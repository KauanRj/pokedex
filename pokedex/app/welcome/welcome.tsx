
export function Welcome() {



  return (
    <main >
      
        <div className="flex flex-auto justify-between bg-linear-to-r from-red-500 to-yellow-500 p-4 ">
          <div className="p-1 flex gap-4 text-white">
            <h1>Pokemon </h1>
          </div>

          <div className="flex p-1 gap-4 text-white">
            <h1>Home</h1>
            <h1>Pokemons</h1>
            <h1>Tipos</h1>
          </div>
        </div>
     
     

      <div className="flex  flex-col justify-between bg-red-100 min-h-[calc(105.2vh-105.2px)]">

        <div className="flex h-20 items-center bg-white mx-10 my-10 rounded-lg px-5 shadow-md ">
            <form className="w-full relative">
              <input 
              type="text" 
              className="w-330 p-3 pb-1 pl-10 border-b border-gray-200 focus:outline-none  "/>

              <button className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 absolute right-2">Buscar</button>
            </form>
        </div>


        <div className="flex justify-between p-3">

          <div className="houver:scale-100 duration-300 mx-auto flex flex-col max-w-sm text-center items-center gap-x-4 rounded-xl bg-yellow-200 p-15 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

            
              <h1 className="text-center text-xl font-medium text-black dark:text-white p-10">Pikachu</h1>
              <button className="bg-yellow-400 rounded-lg p-0.5 text-white m-0.5">Eletrico</button>
            
          </div>

          <div className="mx-auto flex flex-col max-w-sm text-center items-center gap-x-4 rounded-xl bg-green-200 p-15 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

            
              <h1 className="text-center text-xl font-medium text-black dark:text-white p-10">Bulbassauro</h1>
              <button className="bg-green-400 rounded-lg p-0.5 text-white m-0.5">Planta</button>
            
          </div>

          <div className="mx-auto flex flex-col max-w-sm text-center items-center gap-x-4 rounded-xl bg-red-200 p-15 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

            
              <h1 className="text-center text-xl font-medium text-black dark:text-white p-10">Charmander</h1>
              <button className="bg-red-400 rounded-lg p-0.5 text-white m-0.5">Fogo</button>
            
          </div>

          <div className="mx-auto text-center max-w-sm  flex-col items-center  gap-x-4 rounded-xl bg-blue-200 p-15 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
    
            
              <h1 className="text-center text-xl font-medium text-black dark:text-white p-10">Squirtle</h1>
              <button className="bg-blue-400 rounded-lg p-0.5 text-white m-0.5 ">Agua</button>
            
          </div>
    
        </div>
    
        <div className="bg-blue-900 ">
          <h1 className="text-center text-sm  text-white p-1.5">Pokédex - React + Tailwind</h1>
        </div>
      </div>
    </main>
  );
}
