export function Pokemons() {
  const pokemons = [
    { id: 1, 
      name: "Bulbassauro", 
      type: "Planta", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" 
    },
    { 
      id: 4, 
      name: "Charmander", 
      type: "Fogo", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" 
    },
    { 
      id: 7, 
      name: "Squirtle", 
      type: "Água", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" 
    },
    { 
      id: 25, 
      name: "Pikachu", 
      type: "Elétrico", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" 
    },
    { 
      id: 39, 
      name: "Jigglypuff", 
      type: "Fada", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" 
    },
    { 
      id: 52, 
      name: "Meowth", 
      type: "Normal", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png" 
    },
    { 
      id: 54, 
      name: "Psyduck", 
      type: "Água", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png" 
    },
    { 
      id: 59, 
      name: "Arcanine", 
      type: "Fogo", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png" 
    },
    { 
      id: 74, 
      name: "Geodude", 
      type: "Pedra", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
      
    },
    { 
      id: 92, 
      name: "Gastly", 
      type: "Fantasma", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png" 
    },
    { 
      id: 95, 
      name: "Onix", 
      type: "Pedra", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png" 
    },
    { 
      id: 113, 
      name: "Chansey", 
      type: "Normal", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png" 
    },
    { 
      id: 129, 
      name: "Magikarp", 
      type: "Água", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png" 
    },
    { 
      id: 130, 
      name: "Gyarados", 
      type: "Água", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png" 
    },
    { 
      id: 131, 
      name: "Lapras", 
      type: "Água", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png" 
    },
    { 
      id: 133, 
      name: "Eevee", 
      type: "Normal", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
    },
    { 
      id: 144, 
      name: "Articuno", 
      type: "Gelo", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png" 
    },
    { 
      id: 149, 
      name: "Dragonite", 
      type: "Dragão", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png" 
    },
    { 
      id: 150, 
      name: "Mewtwo", 
      type: "Psíquico", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" 
    },
  ];

  const coresTipos = {
    Elétrico: "bg-yellow-100",
    Fogo: "bg-red-200",
    Água: "bg-blue-100",
    Planta: "bg-green-100",
    Psíquico: "bg-violet-100",
    Fantasma: "bg-purple-100",
    Pedra: "bg-stone-200",
    Voador: "bg-sky-100",
    Gelo: "bg-cyan-100",
    Dragão: "bg-sky-100",
    Normal: "bg-zinc-100",
    Fada: "bg-pink-200",
  }

   const coresButton = {
    Elétrico: "bg-yellow-400",
    Fogo: "bg-red-400",
    Água: "bg-blue-400",
    Planta: "bg-green-400",
    Psíquico: "bg-violet-400",
    Fantasma: "bg-purple-400",
    Pedra: "bg-stone-400",
    Voador: "bg-sky-400",
    Gelo: "bg-cyan-400",
    Dragão: "bg-sky-400",
    Normal: "bg-zinc-400",
    Fada: "bg-pink-400",
  }
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

        <div className="mx-auto flex flex-col max-w-364 text-center items-center gap-x-4 rounded-xl bg-white p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Pokemons</h1>
            <p className="text-gray-500 dark:text-gray-400">Conheça os Pokemons da região de Kanto!</p>
        </div>

      
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-2 mx-auto w-full max-w-7xl justify-items-center">
            {pokemons.map((pokemon) => (
                <div className={`flex flex-col justify-between h-72 w-full max-w-64 text-center items-center rounded-xl p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105 ${coresTipos[pokemon.type] || "bg-gray-100"}`} key={pokemon.id}>
                    <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32 object-contain mb-4" />
                    <h2 className="text-lg font-bold text-black dark:text-white">{pokemon.name}</h2>
                    <button className={`px-3 py-1 text-xs text-white font-semibold rounded-md dark:bg-slate-600 dark:text-white ${coresButton[pokemon.type] || "bg-gray-200 text-white"}`}>
                        {pokemon.type}
                    </button>
                </div>
            ))}

            
        </div>

      </div>

      <div className="bg-zinc-800 mt-auto">
        <h1 className="text-center text-sm text-white p-3">Pokédex - React + Tailwind</h1>
      </div>
    </main>
  );
}