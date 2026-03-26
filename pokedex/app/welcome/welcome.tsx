
export function Welcome() {



  return (
    <main >
      <div className="flex flex-auto justify-between bg-red-600 p-4 ">
        <div className="p-1 flex gap-4 text-white">
          <h1>Pokemon </h1>
        </div>

        <div className="flex p-1 gap-4 text-white">
          <h1>Home</h1>
          <h1>Pokemons</h1>
          <h1>Tipos</h1>
        </div>
      </div>
     

      <div className="flex justify-between p-3">

        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-yellow-300 p-15 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

          <div className=" ">
            <div className="text-center text-xl font-medium text-black dark:text-white p-10">Pikachu</div>
            <button className="bg-yellow-400 rounded-lg p-0.5 text-white m-0.5">Eletrico</button>
          </div>
        </div>

        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-green-300 p-15 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

          <div className="justify-center">
            <div className="text-center text-xl font-medium text-black dark:text-white p-10">Pikachu</div>
            <button className="bg-green-400 rounded-lg p-0.5 text-white m-0.5">Eletrico</button>
          </div>
        </div>

        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-red-300 p-15 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

          <div className="justify-center">
            <div className="text-center text-xl font-medium text-black dark:text-white p-10">Pikachu</div>
            <button className="bg-red-400 rounded-lg p-0.5 text-white m-0.5">Eletrico</button>
          </div>
        </div>

        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-blue-300 p-15 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

          <div className="justify-center">
            <div className="text-center text-xl font-medium text-black dark:text-white p-10">Pikachu</div>
            <button className="bg-blue-400 rounded-lg p-0.5 text-white m-0.5">Eletrico</button>
          </div>
        </div>


      </div>
    </main>
  );
}
