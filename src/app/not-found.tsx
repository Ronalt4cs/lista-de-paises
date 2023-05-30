export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-zinc-900">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-9xl text-gray-300">404</h2>
        <h2 className="text-5xl text-gray-300">Página não encontrada</h2>
        <p className="p-2 rounded-md text-center text-xl text-gray-700 bg-green-400 hover:text-gray-800 hover:bg-green-300 cursor-pointer">
          Voltar <a href="/">para página principal</a>
        </p>
      </div>
    </div>
  )
}
