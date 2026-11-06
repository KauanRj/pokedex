export function Tipos() {
  const tipos = [
    {
      id: 1,
      name: "Elétrico",
      desc: "Pokémons rápidos que usam ataques de eletricidade",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/13.png",
    },
    {
      id: 2,
      name: "Planta",
      desc: "Usam energia da natureza, folhas, vinhas e sementes",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/12.png",
    },
    {
      id: 3, 
      name: "Fogo",
      desc: "Possuem ataques quentes, intensos e explosivos",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/10.png",
    },  
    {
      id: 4, 
      name: "Água", 
      desc: "São versáteis e usam jatos de água em batalha",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/11.png",
    },
    { 
      id: 5,  
      name: "Gelo",
      desc: "São rápidos e usam ataques de gelo",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/15.png",
    },
    { 
      id: 6, 
      name: "Pedra",  
      desc: "São fortes e usam ataques de pedra",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/6.png",
    },
    { 
      id: 7,
      name: "Psíquico",
      desc: "São misteriosos e usam ataques psíquicos",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/14.png",
    },
    {
      id: 8,
      name: "Fantasma",
      desc: "São enigmáticos e usam ataques fantasmagóricos",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/8.png",
    },
  ];

  const buttonTipos = [
    { id: 1, name: "Elétrico" },
    { id: 2, name: "Planta" },
    { id: 3, name: "Fogo" },
    { id: 4, name: "Água" },
    { id: 5, name: "Gelo" },
    { id: 6, name: "Pedra" },
    { id: 7, name: "Psíquico" },
    { id: 8, name: "Fantasma" },
  ];  

  const coresTipos = {
    Elétrico: "bg-yellow-100",
    Fogo: "bg-red-200",
    Água: "bg-blue-100",
    Planta: "bg-green-100",
    Psíquico: "bg-pink-100",
    Fantasma: "bg-purple-100",
    Gelo: "bg-cyan-100",
    Pedra: "bg-stone-200",
  };
  return (
    <main className="flex flex-col min-h-screen">
      
     
      <header className="flex justify-between bg-gradient-to-r from-red-500 to-yellow-500 p-4 shadow-md">
        <div className="p-1 flex gap-4 text-white text-2xl font-bold">
          <h1>Pokemon</h1>
        </div>
        <nav className="flex p-1 gap-4 text-white font-medium">
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/'}>
            Home
          </span>
          <span className="cursor-pointer hover:via-20%" onClick={() => window.location.href = '/pokemons'}>
            Pokemons
          </span>
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/types'}>
            Tipos
          </span>
        </nav>
      </header>

   
      <div className="p-8 bg-red-100 flex-1 flex flex-col gap-6">
        
       
         <div className="mx-auto flex flex-col  max-w-364 text-center items-center gap-x-4 rounded-xl bg-white p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Tipos de Pokémon</h1>
            <p className="text-gray-500 dark:text-gray-400">Conheça os principais tipos de Pokémon e suas características!</p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-2 mx-auto w-full max-w-6xl">

         
          {tipos.map((tipo) => (
            <div key={tipo.id} className={`flex flex-col items-center gap-2 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${coresTipos[tipo.name]}`}>
              <img src={tipo.image} alt={tipo.name} className="w-16 h-16" />  
              <h2 className="text-lg font-semibold">{tipo.name}</h2>
              <p className="text-gray-700 text-center">{tipo.desc}</p>
            </div>
          ))}
      </div>
      </div>

      
      <div className="bg-zinc-800 flex justify-center mt-auto">
        <h1 className="text-center text-sm text-white p-3">Pokédex - React + Tailwind</h1>
      </div>
    </main>
  );
}