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
  return (
    <main className="flex flex-col min-h-screen">
      
     
      <div className="flex justify-between bg-gradient-to-r from-red-500 to-yellow-500 p-4 shadow-md">
        <div className="p-1 flex gap-4 text-white text-2xl font-bold">
          <h1>Pokemon</h1>
        </div>
        <div className="flex p-1 gap-4 text-white font-medium">
          <h1 className="cursor-pointer hover:underline">Home</h1>
          <h1 className="cursor-pointer hover:underline">Pokemons</h1>
          <h1 className="cursor-pointer hover:underline">Tipos</h1>
        </div>
      </div>

   
      <div className="p-8 bg-red-100 flex-1 flex flex-col gap-6">
        
       
         <div className="mx-auto flex flex-col  max-w-364 text-center items-center gap-x-4 rounded-xl bg-white p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Tipos de Pokémon</h1>
            <p className="text-gray-500 dark:text-gray-400">Conheça os principais tipos de Pokémon e suas características!</p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-2 mx-auto w-full max-w-6xl">

         
          <div className="flex flex-col justify-between text-center items-center rounded-xl bg-yellow-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/13.png" alt="Elétrico" className="w-16 h-16 object-contain mb-2" />
            <h1 className="text-lg font-bold text-black dark:text-white mb-1">Elétrico</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">Pokémons rápidos que usam ataques de eletricidade</p>
            <button className="bg-yellow-400 text-white px-3 py-1 text-xs font-semibold rounded-md w-full">Ex: Pikachu</button>
          </div>

         
          <div className="flex flex-col justify-between text-center items-center rounded-xl bg-green-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/12.png" alt="Planta" className="w-16 h-16 object-contain mb-2" />
            <h1 className="text-lg font-bold text-black dark:text-white mb-1">Planta</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">Usam energia da natureza, folhas, vinhas e sementes</p>
            <button className="bg-green-400 text-white px-3 py-1 text-xs font-semibold rounded-md w-full">Ex: Bulbasaur</button>
          </div>

         
          <div className="flex flex-col justify-between text-center items-center rounded-xl bg-red-200 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/10.png" alt="Fogo" className="w-16 h-16 object-contain mb-2" />
            <h1 className="text-lg font-bold text-black dark:text-white mb-1">Fogo</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">Possuem ataques quentes, intensos e explosivos</p>
            <button className="bg-red-400 text-white px-3 py-1 text-xs font-semibold rounded-md w-full">Ex: Charmander</button>
          </div>

          
          <div className="flex flex-col justify-between text-center items-center rounded-xl bg-blue-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/11.png" alt="Água" className="w-16 h-16 object-contain mb-2" />
            <h1 className="text-lg font-bold text-black dark:text-white mb-1">Água</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">São versáteis e usam jatos de água em batalha</p>
            <button className="bg-blue-400 text-white px-3 py-1 text-xs font-semibold rounded-md w-full">Ex: Squirtle</button>
          </div>

         
          <div className="flex flex-col justify-between text-center items-center rounded-xl bg-cyan-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/15.png" alt="Gelo" className="w-16 h-16 object-contain mb-2" />
            <h1 className="text-lg font-bold text-black dark:text-white mb-1">Gelo</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">Usam frio, neve e congelamento contra seus oponentes</p>
            <button className="bg-cyan-400 text-white px-3 py-1 text-xs font-semibold rounded-md w-full">Ex: Lapras</button>
          </div>
          
          
          <div className="flex flex-col justify-between text-center items-center rounded-xl bg-stone-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/6.png" alt="Pedra" className="w-16 h-16 object-contain mb-2" />
            <h1 className="text-lg font-bold text-black dark:text-white mb-1">Pedra</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">São resistentes e possuem grande força defensiva</p>
            <button className="bg-stone-400 text-white px-3 py-1 text-xs font-semibold rounded-md w-full">Ex: Onix</button>
          </div>

        
          <div className="flex flex-col justify-between text-center items-center rounded-xl bg-violet-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/14.png" alt="Psíquico" className="w-16 h-16 object-contain mb-2" />
            <h1 className="text-lg font-bold text-black dark:text-white mb-1">Psíquico</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">Usam poderes mentais, telecinese e energia psíquica</p>
            <button className="bg-violet-400 text-white px-3 py-1 text-xs font-semibold rounded-md w-full">Ex: Mewtwo</button>
          </div>

         
          <div className="flex flex-col justify-between text-center items-center rounded-xl bg-purple-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/8.png" alt="Fantasma" className="w-16 h-16 object-contain mb-2" />
            <h1 className="text-lg font-bold text-black dark:text-white mb-1">Fantasma</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">Misteriosos, assustadores e difíceis de atingir</p>
            <button className="bg-purple-400 text-white px-3 py-1 text-xs font-semibold rounded-md w-full">Ex: Gengar</button>
          </div>

        </div>
      </div>

      
      <div className="bg-zinc-800 flex justify-center mt-auto">
        <h1 className="text-center text-sm text-white p-3">Pokédex - React + Tailwind</h1>
      </div>
    </main>
  );
}