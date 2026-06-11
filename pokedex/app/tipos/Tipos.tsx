
export function Tipos() {



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
     

     <div className="p-8  bg-red-100 min-h-[calc(99.4vh-99.4px)]  ">


       
         <div className="mx-auto flex flex-col  max-w-364 text-center items-center gap-x-4 rounded-xl bg-white p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

            <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Tipos de Pokémon</h1>
            <p className="text-gray-500 dark:text-gray-400">Conheça os principais tipos de Pokémon e suas características!</p>
      
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-4 p-10 gap-5">

            <div className="mx-auto flex flex-col  max-w-350 text-center items-center gap-x-4 rounded-xl bg-yellow-100 p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

                <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Eletrico</h1>
                <p className="text-gray-500 dark:text-gray-400">Pokémons rápidos que usam ataques de eletricidade</p>
                <button className="bg-yellow-400 text-white px-2 m-0.5 rounded-md ">Ex: Pikachu</button>

            </div>

            <div className="mx-auto flex flex-col  max-w-350 text-center items-center gap-x-4 rounded-xl bg-green-100 p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <img src="https://github.com/PokeAPI/sprites/blob/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/12.png" alt="Planta" />
                <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Planta</h1>
                <p className="text-gray-500 dark:text-gray-400">Usam energia da natureza, folhas, vinhas e sementes</p>
                <button className="bg-green-400 text-white px-2 py-1 rounded-md">Ex: Bulbasaur</button>

            </div>

            <div className="mx-auto houver:scale-100 duration-300 flex flex-col  max-w-350 text-center items-center gap-x-4 rounded-xl bg-red-200 p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <img src="https://github.com/PokeAPI/sprites/blob/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/10.png" alt="Fogo" />
                <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Fogo</h1>
                <p className="text-gray-500 dark:text-gray-400">Possuem ataques quentes, intensos e explosivos</p>
                <button className="bg-red-400 text-white px-2 py-1 rounded-md ">Ex: Charmander</button>

            </div>

            <div className="mx-auto flex flex-col  max-w-350 text-center items-center gap-x-4 rounded-xl bg-blue-100 p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

                <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Água</h1>
                <p className="text-gray-500 dark:text-gray-400">São versáteis e usam jatos de água em batalha</p>
                <button className="bg-blue-400 text-white px-2 py-1 rounded-md ">Ex: Squirtle</button>

            </div>

            <div className="mx-auto flex flex-col  max-w-350 text-center items-center gap-x-4 rounded-xl bg-cyan-100 p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

                <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Gelo</h1>
                <p className="text-gray-500 dark:text-gray-400">Usam frio, neve e congelamento contra seus oponentes</p>
                <button className="bg-cyan-400 text-white px-2 py-1 rounded-md ">Ex: Lapras</button>

            </div>
            
            <div className="mx-auto flex flex-col  max-w-350 text-center items-center gap-x-4 rounded-xl bg-stone-100 p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

                <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Pedra</h1>
                <p className="text-gray-500 dark:text-gray-400">São resistentes e possuem grande força defensiva</p>
                <button className="bg-stone-400 text-white px-2 py-1 rounded-md ">Ex: Onix</button>

            </div>

             <div className="mx-auto flex flex-col  max-w-350 text-center items-center gap-x-4 rounded-xl bg-violet-100 p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

                <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Psíquico</h1>
                <p className="text-gray-500 dark:text-gray-400">Usam poderes mentais, telecinese e energia psíquica</p>
                <button className="bg-violet-400 text-white px-2 py-1 rounded-md ">Ex: Mewtwo</button>


            </div>

            <div className="mx-auto flex flex-col  max-w-350 text-center items-center gap-x-4 rounded-xl bg-purple-100 p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

                <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Fantasma</h1>
                <p className="text-gray-500 dark:text-gray-400">Misteriosos, assustadores e difíceis de atingir</p>
                <button className="bg-purple-400 text-white px-2 py-1 rounded-md ">Ex: Gengar</button>


            </div>



           


        </div>

        
       



     </div>

      <div className="bg-taupe-900 flex justify-center">
          <h1 className="text-center text-sm  text-white p-1.5">Pokédex - React + Tailwind</h1>
        </div>
    </main>
  );
}
