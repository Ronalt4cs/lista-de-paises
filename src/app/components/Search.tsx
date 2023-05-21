'use client'
export default function Search() {
  return (
    <div className="flex w-80 rounded-sm gap-2 text-gray-400 p-2 bg-gray-700">
      <input
        type="text"
        placeholder="Procure pelo país ..."
        className="text-gray-200 bg-gray-700 focus:outline-none"
        onChange={(e) => console.log(e.target)}
      />
    </div>
  )
}
