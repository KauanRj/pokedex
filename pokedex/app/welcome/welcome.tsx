
export function Welcome() {



  return (
    <main >
      
        <div className="flex flex-auto justify-between bg-linear-to-r from-red-500 to-yellow-500 p-4 ">
          <div className="p-1 flex gap-4 text-white text-2xl font-bold">
            <h1>Pokemon </h1>
          </div>

          <div className="flex p-1 gap-4 text-white">
            <h1>Home</h1>
            <h1>Pokemons</h1>
            <h1>Tipos</h1>
          </div>
        </div>
     
     

      <div className="flex  flex-col justify-between  bg-red-100 min-h-[calc(99.4vh-99.4px)]">

        <div className="flex h-20 items-center bg-white mx-10 my-10 rounded-lg px-5 shadow-md ">
            <form className="w-full relative">
              <input 
              type="text" 
              className="w-330 p-3 pb-1 pl-10 border-b border-gray-200 focus:outline-none  "/>

              <button className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 absolute right-2 cursor-pointer">Buscar</button>
            </form>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center p-6 max-w-6xl mx-auto ">

          <div className=" flex flex-col h-68  w-64 min-w-[16rem] max-w- text-center items-center gap-x-4 rounded-xl bg-yellow-100 p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" className="w-20 h-20 mx-auto mb-2" />
              <h1 className="text-center text-xl font-medium  dark:text-white p-10">Pikachu</h1>
              <button className="bg-yellow-400 rounded-lg p-0.5 text-white m-0.5">Eletrico</button>
            
          </div>

          <div className="mx-auto flex flex-col h-68  w-64 text-center items-center gap-x-4 rounded-xl bg-green-100 p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" className="w-20 h-20 mx-auto mb-2" />
              <h1 className="text-center text-xl font-medium text-black dark:text-white p-10">Bulbassauro</h1>
              <button className="bg-green-400 rounded-lg px-2 py-0.5 text-xs text-white m-0.5">Planta</button>
            
          </div>

          <div className="mx-auto flex flex-col h-68  w-64 text-center items-center gap-x-4 rounded-xl bg-red-200 p-5 shadow-lg outline outline-black/5  dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" className="w-20 h-20 mx-auto mb-2" />
              <h1 className="text-center text-xl font-medium text-black dark:text-white p-10">Charmander</h1>
              <button className="bg-red-400 rounded-lg p-0.5 text-white m-0.5">Fogo</button>
            
          </div>

          <div className="mx-auto flex flex-col h-68  w-64 text-center items-center gap-x-4 rounded-xl bg-blue-100 p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
    
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle" className="w-20 h-20 mx-auto mb-2" />
              <h1 className="text-center text-xl font-medium text-black dark:text-white p-10">Squirtle</h1>
              <button className="bg-blue-400 rounded-lg p-0.5 text-white m-0.5 ">Agua</button>
            
          </div>
    
        </div>
    
        
      </div>
      <div className="bg-taupe-900 ">
          <h1 className="text-center text-sm  text-white p-1.5">Pokédex - React + Tailwind</h1>
        </div>

    </main>
  );
}
