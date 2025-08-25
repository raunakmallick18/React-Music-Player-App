export default function SongCard({ song, onPlay }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-4 hover:bg-gray-700 transition">
      <h2 className="text-lg font-semibold">{song.title}</h2>
      <p className="text-sm text-gray-400">{song.artist}</p>
      <button
        onClick={onPlay}
        className="mt-3 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white text-sm"
      >
        ▶ Play
      </button>
    </div>
  )
}
