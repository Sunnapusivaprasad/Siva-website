import React from "react";

const movies = [
  { name: "Inception", poster: "https://m.media-amazon.com/images/I/51oD9w1Lr6L._AC_UF1000,1000_QL80_.jpg" },
  { name: "The Dark Knight", poster: "https://m.media-amazon.com/images/I/71pVzTbV0FL._AC_UF894,1000_QL80_.jpg" },
  { name: "Avengers: Endgame", poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Titanic", poster: "https://m.media-amazon.com/images/I/71K6u2xX-2L._AC_UF1000,1000_QL80_.jpg" },
  { name: "Interstellar", poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_UF1000,1000_QL80_.jpg" },
  { name: "Spider-Man: No Way Home", poster: "https://m.media-amazon.com/images/I/81vm3v2jVhL._AC_UF1000,1000_QL80_.jpg" },
  { name: "The Lion King", poster: "https://m.media-amazon.com/images/I/81r1n9kMmyL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Frozen", poster: "https://m.media-amazon.com/images/I/71AqqPiKufL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Joker", poster: "https://m.media-amazon.com/images/I/81FZlmK4bWL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Black Panther", poster: "https://m.media-amazon.com/images/I/91NnYlpL-pL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Doctor Strange", poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Guardians of the Galaxy", poster: "https://m.media-amazon.com/images/I/91KsA7FQp6L._AC_UF1000,1000_QL80_.jpg" },
  { name: "The Batman", poster: "https://m.media-amazon.com/images/I/71g40mlbinL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Shang-Chi and the Legend of the Ten Rings", poster: "https://m.media-amazon.com/images/I/91u0hX1VqXL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Thor: Ragnarok", poster: "https://m.media-amazon.com/images/I/91MV1gqfwtL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Black Widow", poster: "https://m.media-amazon.com/images/I/81fnd5Zl1lL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Iron Man", poster: "https://m.media-amazon.com/images/I/81KkrQWEHIL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Captain America: Civil War", poster: "https://m.media-amazon.com/images/I/91K7V7gq5pL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Deadpool", poster: "https://m.media-amazon.com/images/I/81m5ZzMZJbL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Ant-Man", poster: "https://m.media-amazon.com/images/I/81o1HfDapdL._AC_UF1000,1000_QL80_.jpg" }
];

 function MovieList() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-white text-3xl font-bold mb-6">🎬 Movie Posters</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img src={movie.poster} alt={movie.name} className="w-full h-80 object-cover" />
            <div className="p-3">
              <h2 className="text-white text-lg font-semibold">{movie.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MovieList