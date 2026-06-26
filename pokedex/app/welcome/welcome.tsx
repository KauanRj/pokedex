export function Welcome() {
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

     
      <div className="flex flex-col flex-1 bg-red-100 pb-10">

        
        <div className="flex h-20 items-center bg-white mx-10 my-10 rounded-lg px-5 shadow-md ">

            <form className="w-full relative">

              <input

              type="text"

              className="w-330 p-3 pb-1 pl-10 border-b border-gray-200 focus:outline-none  "/>



              <button className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 absolute right-2 cursor-pointer">Buscar</button>

            </form>

        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center px-6 mx-auto w-full max-w-6xl">

       
          <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-yellow-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" className="w-24 h-24 object-contain" />
            <h1 className="text-xl font-bold dark:text-white my-2">Pikachu</h1>
            <button className="bg-yellow-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Elétrico</button>
          </div>

         
          <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-green-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" className="w-24 h-24 object-contain" />
            <h1 className="text-xl font-bold text-black dark:text-white my-2">Bulbassauro</h1>
            <button className="bg-green-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Planta</button>
          </div>

         
          <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-red-200 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" className="w-24 h-24 object-contain" />
            <h1 className="text-xl font-bold text-black dark:text-white my-2">Charmander</h1>
            <button className="bg-red-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Fogo</button>
          </div>

         
          <div className="flex flex-col justify-between h-72 w-64 text-center items-center rounded-xl bg-blue-100 p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105  ">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle" className="w-24 h-24 object-contain" />
            <h1 className="text-xl font-bold text-black dark:text-white my-2">Squirtle</h1>
            <button className="bg-blue-500 rounded-full px-4 py-1 text-xs font-semibold text-white w-full max-w-[120px]">Água</button>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="bg-zinc-800 mt-auto">
        <h1 className="text-center text-sm text-white p-3">Pokédex - React + Tailwind</h1>
      </div>

    </main>
  );
}