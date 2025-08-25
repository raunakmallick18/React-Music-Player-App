import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"

export default function PlayerControls({ currentSong }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-lg border-t border-gray-700">
      {/* Song Info */}
      <div>
        <h3 className="font-semibold">{currentSong?.title || "No song playing"}</h3>
        <p className="text-sm text-gray-400">{currentSong?.artist || ""}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:text-purple-400">
          <SkipBack size={24} />
        </button>

        <button
          className="p-3 bg-purple-600 rounded-full hover:bg-purple-500 transition"
          onClick={togglePlay}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <button className="p-2 hover:text-purple-400">
          <SkipForward size={24} />
        </button>
      </div>
    </div>
  )
}
