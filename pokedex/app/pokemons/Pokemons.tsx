
export function Pokemons() {



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
            <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Pokemons</h1>
            <p className="text-gray-500 dark:text-gray-400">Conheça os Pokemons da região de Kanto!</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-2 mx-auto w-full max-w-6xl">

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-green-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" className="w-24 h-24 object-contain" />
                <h1 className="text-xl font-bold text-black dark:text-white my-2">001</h1>
                <p className="text-gray-500 dark:text-gray-400">Bulbassauro</p>
                <button className="bg-green-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Planta</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-red-200 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold text-black dark:text-white my-2">004</h1>
              <p className="text-gray-500 dark:text-gray-400">Charmander</p>
              <button className="bg-red-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Fogo</button>
            </div>

             <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-blue-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105  ">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold text-black dark:text-white my-2">007</h1>
              <p className="text-gray-500 dark:text-gray-400">Squirtle</p>
              <button className="bg-blue-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Água</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-yellow-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">025</h1>
              <p className="text-gray-500 dark:text-gray-400">Pikachu</p>
              <button className="bg-yellow-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Elétrico</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-pink-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" alt="Jigglypuff" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">039</h1>
              <p className="text-gray-500 dark:text-gray-400">Jigglypuff</p>
              <button className="bg-pink-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Fada</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-gray-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png" alt="Meowth" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">052</h1>
              <p className="text-gray-500 dark:text-gray-400">Meowth</p>
              <button className="bg-gray-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Normal</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-blue-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png" alt="Psyduck" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">054</h1>
              <p className="text-gray-500 dark:text-gray-400">Psyduck</p>
              <button className="bg-blue-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Água</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-red-200 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png" alt="Arcanine" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">059</h1>
              <p className="text-gray-500 dark:text-gray-400">Arcanine</p>
              <button className="bg-red-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Fogo</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-stone-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png" alt="Geodude" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">074</h1>
              <p className="text-gray-500 dark:text-gray-400">Geodude</p>
              <button className="bg-stone-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Pedra</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-purple-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png" alt="Gastly" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">092</h1>
              <p className="text-gray-500 dark:text-gray-400">Gastly</p>
              <button className="bg-purple-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Fantasma</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-stone-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png" alt="Onix" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">095</h1>
              <p className="text-gray-500 dark:text-gray-400">Onix</p>
              <button className="bg-stone-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Pedra</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-gray-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png" alt="Chansey" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">113</h1>
              <p className="text-gray-500 dark:text-gray-400">Chansey</p>
              <button className="bg-gray-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Normal</button>
            </div>


            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-blue-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png" alt="Magikarp" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">129</h1>
              <p className="text-gray-500 dark:text-gray-400">Magikarp</p>
              <button className="bg-blue-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Agua</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-blue-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png" alt="Gyarados" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">130</h1>
              <p className="text-gray-500 dark:text-gray-400">Gyarados </p>
              <button className="bg-blue-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Agua/Voador</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-cyan-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png" alt="Lapras" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">131</h1>
              <p className="text-gray-500 dark:text-gray-400">Lapras</p>
              <button className="bg-cyan-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Água</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-gray-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" alt="Eevee" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">133</h1>
              <p className="text-gray-500 dark:text-gray-400">Eevee </p>
              <button className="bg-gray-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Normal</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-gray-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" alt="Snorlax" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">143</h1>
              <p className="text-gray-500 dark:text-gray-400">Snorlax  </p>
              <button className="bg-gray-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Normal</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-cyan-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png" alt="Articuno" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">144</h1>
              <p className="text-gray-500 dark:text-gray-400">Articuno  </p>
              <button className="bg-cyan-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Gelo/Voador</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-sky-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png" alt="Dragonite" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">149</h1>
              <p className="text-gray-500 dark:text-gray-400">Dragonite </p>
              <button className="bg-sky-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Dragão/Voador</button>
            </div>

            <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-purple-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="Mewtwo" className="w-24 h-24 object-contain" />
              <h1 className="text-xl font-bold dark:text-white my-2">150</h1>
              <p className="text-gray-500 dark:text-gray-400">Mewtwo </p>
              <button className="bg-purple-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Psíquico</button>
            </div>



        </div>

      </div>



      <div className="bg-zinc-800 mt-auto">
        <h1 className="text-center text-sm text-white p-3">Pokédex - React + Tailwind</h1>
      </div>
    </main>
  );
}
