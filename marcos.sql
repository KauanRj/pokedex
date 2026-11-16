SELECT current_database();
SELECT  current_date;

CREATE TABLE treinadores (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nome VARCHAR(40) NOT NULL,
	cidade varchar(60) not null,
	idade int ,
	disponivel BOOLEAN DEFAULT TRUE
);

select * from treinadores;

insert into treinadores (nome, cidade, idade, disponivel)
values ('Kauan ', 'Recantinho ', 17, true);

select * from treinadores;

-- selecionar coluna
select nome, idade
from treinadores

-- so ativos
select nome, idade
from treinadores
where disponivel = true;

-- maior que 15
select nome, idade
from treinadores
where idade >= 15;

-- ordem alfabetica
select *
from treinadores
order by nome asc;

-- procurar pelo nome
select *
from treinadores
where nome = 'Kauan ';

-- contar registro
select count (*)
from treinadores;

-- todos filtros juntos
select nome, idade                                                                                                     
from treinadores
where disponivel = true and idade >= 15
order by nome asc;

-- criamos data de incio
alter table treinadores
add column data_inicio Date;

-- criamos o saldo
alter table treinadores
add column saldo_pokedolares numeric(10,2) default(0);


-- criamos biografia
alter table treinadores
add column biografia text;

-- atualizamos algumas informação de alguns personagem
update treinadores
set saldo_pokedolares = 150.50
where nome = 'Ash ';

update treinadores
set saldo_pokedolares = 275.00
where nome = 'Misty ';

update treinadores
set data_inicio = '2026-02-10'
where nome = 'Brock ';

update treinadores
set biografia = 'Membro da Equipe Rocket em busca de Pokémon raros.'
where nome = 'Jessie ';

update treinadores
set disponivel = true
where nome = 'Jessie ';

update treinadores
set saldo_pokedolares = saldo_pokedolares + 25.00
where nome = 'Brock ';

-- reformando
alter table treinadores
rename column cidade To cidade_origem;

alter table treinadores
alter column cidade_origem type varchar(80);

select * from treinadores;

select cidade_origem from treinadores;

-- Criando os tipos de Pokemons 

CREATE TABLE tipos_pokemon (
	id_tipo SMALLINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nome VARCHAR(40) NOT NULL UNIQUE,
	descricao text,
	cor_hex char(7)
);

select * from tipos_pokemon;

insert into tipos_pokemon (nome, descricao, cor_hex)
values
('Fogo', 'Pokémon que dominam chamas e altas temperaturas.', '#F85149'),
    ('Agua', 'Pokémon adaptados aos oceanos, rios e chuvas.', '#3B82F6'),
    ('Planta', 'Pokémon ligados à natureza, folhas e florestas.', '#22C55E'),
    ('Eletrico', 'Pokémon capazes de gerar e controlar eletricidade.', '#FACC15'),
    ('Pedra', 'Pokémon com corpos rígidos e alta resistência física.', '#A8A29E'),
    ('Normal', 'Pokémon versáteis sem afinidade elemental específica.', '#CBD5E1');

select id_tipo, nome, cor_hex
from tipos_pokemon
order by id_tipo;

create table pokemon (
	id_pokemon bigint generated always as identity primary key,
	nome varchar(50),
	numero_pokedex smallint not null unique,
	nivel smallint not null default 1 check(nivel between 1 and 100)
	id_tipo smallint not null references tipos_pokemon(id_tipo),
	id_treinador bigint references treinadores(id_treinador)
);

select * from pokemon;

select id_tipo, nome from tipos_pokemon order by id_tipo;
select id_treinador, nome from treinadores order by id_treinador;

insert into pokemon (nome, numero_pokedex, nivel, id_tipo, id_treinador)
values 
    ('Pikachu', 25, 18, 4, 1),
    ('Squirtle', 7, 12, 2, 1),
    ('Bulbasaur', 1, 10, 3, 1),
    ('Charmander', 4, 14, 1, 1),
    ('Staryu', 120, 17, 2, 2),
    ('Onix', 95, 16, 5, 3),
    ('Pidgey', 16, 5, 6, NULL);

alter table pokemon 
add column altura_m numeric(4,2),
add column peso_kg numeric(6,2),
add column lendario boolean default false,
add column capturado_em timestamp;

select * from pokemon order by id_pokemon;
drop table exemplo;