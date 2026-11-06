import { useEffect, useState } from "react";

const API = "http://localhost:8080/pokemon";

type Pokemon = {
  
  nome: string;
  tipo: string;
 
};

export function Welcome() {
  const [lista, setLista] = useState<Pokemon[]>([]);
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState(""); 

  const [nomeEditando, setNomeEditando] = useState<string | null>(null);
  const [novoNome, setNovoNome] = useState("");
  const [novoTipo, setNovoTipo] = useState("");

  //Get /pokemon/lista
  function carregar() {
    fetch(`${API}/lista`)
      .then((res) => res.json())
      .then((dados) => setLista(dados));
  }

  //POST /pokemon/add
  function adicionar(e: React.FormEvent) {
    e.preventDefault();
    fetch(`${API}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, tipo }),
    }).then(() => {
      setNome("");
      setTipo("");
      carregar();
    });
  }

  function att(e: React.FormEvent) {
    e.preventDefault();
    if (!nomeEditando) return;

    fetch(`${API}/update/${nomeEditando}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: novoNome, tipo: novoTipo }),
    }).then(() => {
      setNomeEditando(null);
      setNovoNome("");
      setNovoTipo("");
      carregar();
    });
  }

  //DELETE 
  function deletar(nome: string) {
    if(confirm(`Tem certeza que deseja deletar o Pokémon ${nome}?`)) {
      fetch(`${API}/delete/${nome}`, {
        method: "DELETE",
      }).then(() => carregar());
    }
  }


  

  useEffect(() => {
    carregar();
  }, []);

 
  return (
    <main className="flex min-h-screen flex-col">
      <header className="flex justify-between bg-gradient-to-r from-red-500 to-yellow-500 p-4 text-white shadow-md">
        <h1 className="p-1 text-2xl font-bold">Pokémon</h1>
        <nav className="flex gap-4 p-1 font-medium">
          <a className="hover:underline" href="/">Home</a>
          <a className="hover:underline" href="/pokemons">Pokémons</a>
          <a className="hover:underline" href="/types">Tipos</a>
        </nav>
      </header>

      <div className="flex flex-1 flex-col bg-red-100 pb-10">
        <div className="mx-4 my-8 rounded-lg bg-white p-5 shadow-md sm:mx-10">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Adicionar Pokémon</h2>
          <form onSubmit={adicionar} className="grid w-full grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <input
                placeholder="Nome do Pokémon"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200"
              />
              <input
                placeholder="Tipo (ex.: Fogo)"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200"
              />
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 px-5 py-3 font-semibold text-white shadow hover:brightness-105"
              >
                Adicionar
              </button>
          </form>
        </div>

        {nomeEditando && (
          <div className="mx-4 mb-8 rounded-lg border border-yellow-200 bg-yellow-50 p-5 shadow-md sm:mx-10">
            <h3 className="mb-3 font-bold text-yellow-800">Editando: {nomeEditando}</h3>
            <form onSubmit={att} className="grid w-full grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto_auto]">
                <input
                  placeholder="Novo nome"
                  value={novoNome}
                  onChange={(e) => setNovoNome(e.target.value)}
                  className="rounded-lg border border-yellow-300 p-3 outline-none focus:border-yellow-500"
                />
                <input
                  placeholder="Novo tipo"
                  value={novoTipo}
                  onChange={(e) => setNovoTipo(e.target.value)}
                  className="rounded-lg border border-yellow-300 p-3 outline-none focus:border-yellow-500"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-white shadow hover:bg-yellow-600"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={() => setNomeEditando(null)}
                  className="rounded-lg bg-gray-400 px-5 py-3 font-semibold text-white shadow hover:bg-gray-500"
                >
                  Cancelar
                </button>
            </form>
          </div>
        )}

        <section className="mx-auto w-full max-w-6xl px-6" aria-labelledby="lista-titulo">
          <h2 id="lista-titulo" className="mb-4 text-xl font-bold text-gray-800">
            Pokémon cadastrados
          </h2>
          {lista.length > 0 ? (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {lista.map((p) => (
                <li
                  key={p.nome}
                  className="flex items-center gap-4 rounded-xl border border-red-100 bg-white p-4 shadow-md"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-yellow-400 text-xl font-bold text-white"
                  >
                    {p.nome.trim().charAt(0).toUpperCase() || "?"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-gray-800">{p.nome}</p>
                    <span className="mt-1 inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                      {p.tipo}
                    </span>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => {
                        setNomeEditando(p.nome);
                        setNovoNome(p.nome);
                        setNovoTipo(p.tipo);
                      }}
                      className="rounded-lg bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-yellow-600"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => deletar(p.nome)}
                      className="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-red-600"
                    >
                      Deletar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-xl border border-black/5 bg-white p-5 text-gray-500 shadow-md">
              Nenhum Pokémon cadastrado ainda.
            </p>
          )}
        </section>
      </div>

      <footer className="mt-auto bg-zinc-800">
        <p className="p-3 text-center text-sm text-white">Pokédex - React + Tailwind</p>
      </footer>
    </main>
  );
}