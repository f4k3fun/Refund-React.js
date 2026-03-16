export function NotFound(){
  return(
    <div className="w-screen h-screen flex items-center justify-center bg-gray-300 flex-col">
    <h1 className="text-green-100 uppercase font-semibold text-2xl mb-10">Ops essa pagína não existe...🥲</h1>
    <a href="/" className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear">Voltar para o inicio</a>
    </div>
  )
}