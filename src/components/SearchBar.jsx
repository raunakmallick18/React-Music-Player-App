export default function SearchBar() {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search songs or artists..."
        className="px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1"
      />
      <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white">
        Search
      </button>
    </div>
  )
}
