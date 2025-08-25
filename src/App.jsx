import { Play, Pause, SkipBack, SkipForward, Search } from "lucide-react";

export default function App() {
  const songs = [
    { title: "Shape of You", artist: "Ed Sheeran" },
    { title: "Blinding Lights", artist: "The Weeknd" },
    { title: "Levitating", artist: "Dua Lipa" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold flex items-center gap-2 mb-6">
        🎵 BeatStream
      </h1>

      {/* Search Bar */}
      <div className="flex w-full max-w-md mb-10">
        <input
          type="text"
          placeholder="Search songs or artists..."
          className="flex-grow p-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition flex items-center gap-1">
          <Search className="w-5 h-5" /> Search
        </button>
      </div>

      {/* Song List */}
      <div className="space-y-6 w-full max-w-md">
        {songs.map((song, i) => (
          <div
            key={i}
            className="p-4 bg-gray-800 rounded-xl shadow-md flex flex-col gap-2"
          >
            <h2 className="text-xl font-semibold">{song.title}</h2>
            <p className="text-gray-400">{song.artist}</p>
            <button className="bg-indigo-600 px-4 py-2 rounded-lg w-fit hover:bg-indigo-700 transition flex items-center gap-2">
              <Play className="w-5 h-5" /> Play
            </button>
          </div>
        ))}
      </div>

      {/* Player Controls */}
      <div className="fixed bottom-0 w-full max-w-md bg-gray-800 border-t border-gray-700 p-4 flex items-center justify-between rounded-t-xl">
        <p className="font-semibold">No song playing</p>
        <div className="flex gap-3">
          <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
            <SkipBack className="w-5 h-5" />
          </button>
          <button className="p-3 bg-indigo-600 rounded-full hover:bg-indigo-700">
            <Play className="w-6 h-6" />
          </button>
          <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
