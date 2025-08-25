import React, { useState } from "react";

function MoviesCard({ addToWatchlist }) {
  const movies = [
  { id: 1, name: "Inception", rating: 8.8, gener: "Sci-Fi", poster: "https://tse2.mm.bing.net/th/id/OIP.vnJImFIy1GEoBBAjyZ-tfQHaK-?pid=Api&P=0&h=180" },
  { id: 2, name: "The Dark Knight", rating: 9.0, gener: "Action", poster: "https://tse4.mm.bing.net/th/id/OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH?pid=Api&P=0&h=180" },
  { id: 3, name: "Avengers: Endgame", rating: 8.4, gener: "Action", poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_UF1000,1000_QL80_.jpg" },
  { id: 4, name: "Titanic", rating: 7.9, gener: "Romance", poster: "https://c8.alamy.com/comp/T0JG1G/leonardo-dicapriokate-winslet-poster-titanic-1997-T0JG1G.jpg" },
  { id: 5, name: "Interstellar", rating: 8.6, gener: "Sci-Fi", poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_UF1000,1000_QL80_.jpg" },
  { id: 6, name: "Spider-Man: No Way Home", rating: 8.3, gener: "Action", poster: "https://tse2.mm.bing.net/th/id/OIP.twsAmsYpRhmk-4Cbf0QiswHaK_?pid=Api&P=0&h=180" },
  { id: 7, name: "The Lion King", rating: 8.5, gener: "Animation", poster: "https://tse4.mm.bing.net/th/id/OIP.MoXczQ4iqOpsj8OYC5iqWgHaLH?pid=Api&P=0&h=180" },
  { id: 8, name: "Frozen", rating: 7.4, gener: "Animation", poster: "https://tse3.mm.bing.net/th/id/OIP.YbYxEo1sPYNGmjprCAllaAHaLH?pid=Api&P=0&h=180" },
  { id: 9, name: "Joker", rating: 8.5, gener: "Thriller", poster: "https://images-cdn.ubuy.co.in/6345f652ec87e81aa558cd24-ubuy-online-shopping.jpg" },
  { id: 10, name: "Black Panther", rating: 7.9, gener: "Action", poster: "https://tse3.mm.bing.net/th/id/OIP.tnzR4SNgzUnPCIB1fFa16QHaLH?pid=Api&P=0&h=180" },
  { id: 11, name: "Doctor Strange", rating: 7.5, gener: "Fantasy", poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_UF1000,1000_QL80_.jpg" },
  { id: 12, name: "Guardians of the Galaxy", rating: 8.0, gener: "Sci-Fi", poster: "https://tse1.mm.bing.net/th/id/OIP.jUiMXol9roixbBpKToqmsgHaLH?pid=Api&P=0&h=180" },
  { id: 13, name: "The Batman", rating: 8.3, gener: "Action", poster: "https://wallpaper.dog/large/20462656.jpg" },
  { id: 14, name: "Shang-Chi and the Legend of the Ten Rings", rating: 7.8, gener: "Action", poster: "https://tse2.mm.bing.net/th/id/OIP.GdnrtWhQuHbWmpMiytjzxgHaK-?pid=Api&P=0&h=180" },
  { id: 15, name: "Thor: Ragnarok", rating: 8.1, gener: "Action", poster: "https://tse4.mm.bing.net/th/id/OIP.n9dDc54wd1qaDnFS2r8M0wHaLH?pid=Api&P=0&h=180" },
  { id: 16, name: "Black Widow", rating: 6.8, gener: "Action", poster: "https://tse1.mm.bing.net/th/id/OIP.hwogBwwfw3Nwcl-SHmyeTgHaLH?pid=Api&P=0&h=180" },
  { id: 17, name: "Iron Man", rating: 7.9, gener: "Action", poster: "https://tse2.mm.bing.net/th/id/OIP.bNjmyqc_0Sxl8A8urGKDgAHaLH?pid=Api&P=0&h=180" },
  { id: 18, name: "Captain America: Civil War", rating: 7.8, gener: "Action", poster: "https://tse2.mm.bing.net/th/id/OIP.3znYq9ZQqYxXRzAQ1DyLbgHaLH?pid=Api&P=0&h=180" },
  { id: 19, name: "Deadpool", rating: 8.0, gener: "Action", poster: "https://tse2.mm.bing.net/th/id/OIP.tvld7d81jojpgEIp190EbgHaLH?pid=Api&P=0&h=180" },
  { id: 20, name: "Ant-Man", rating: 7.3, gener: "Action", poster: "http://cdn.collider.com/wp-content/uploads/2015/05/ant-man-poster-1.jpg" }
];

const [selectedMovies, setSelectedMovies]=useState([])
const toggleMovie=(id)=>{
  if(selectedMovies.includes(id)){
    setSelectedMovies(selectedMovies.filter((movieId)=>movieId!==id))

  }
  else{
    setSelectedMovies([...selectedMovies,id])
  }
}




  return (
    <div className="flex flex-wrap gap-4 p-4 relative">
      {movies.map((movie) => (
        <div key={movie.id} className="text-center relative">
          <img
            className="w-[110px] h-[37vh] rounded-xl hover:scale-110 duration-600 hover:cursor-pointer"
            src={movie.poster}
            alt={movie.name}
          />
          <div
  onClick={() => {
    addToWatchlist(movie);
    toggleMovie(movie.id);
  }}
  className="absolute top-0 right-0 rounded cursor-pointer bg-black mr-1 mt-1"
>
  {selectedMovies.includes(movie.id) ? "❌" : "😊"}
</div>

          <div className="text-black mt-2 w-[100px] justify-center items-center">
            {movie.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesCard;
