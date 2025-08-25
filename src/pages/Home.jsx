import { useState } from "react"
import SearchBar from "../components/SearchBar"
import SongCard from "../components/SongCard"
import PlayerControls from "../components/PlayerControls"

const songs = [
  { id: 1, title: "Shape of You", artist: "Ed Sheeran" },
  { id: 2, title: "Blinding Lights", artist: "The Weeknd" },
  { id: 3, title: "Levitating", artist: "Dua Lipa" },
]

export default function Home() {
  const [currentSong, setCurrentSong] = useState(null)

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-24 p-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-8">
        <span className="text-purple-400 text-4xl">🎵</span>
        <h1 className="text-3xl font-bold">BeatStream</h1>
      </div>

      {/* Search */}
      <SearchBar />

      {/* Songs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {songs.map(song => (
          <SongCard key={song.id} song={song} onPlay={() => setCurrentSong(song)} />
        ))}
      </div>

      {/* Player */}
      <PlayerControls currentSong={currentSong} />
    </div>
  )
}
