import React from "react";
import MoviesCard from "./MoviesCard";
import Pagenation from "./Pagenation";
import Watchlist from "./Watchlist";

function Movies({ addToWatchlist ,watchlist,setWatchlist }) {
  return (
    <div>
      <div className="mt-[10px] text-center font-bold">Trending Movies</div>
      <div className="flex flex-row gap-[10px] mt-[20px]">
        <MoviesCard  addToWatchlist={addToWatchlist} watchlist={Watchlist} setWatchlist={setWatchlist}  />
      </div>
      <Pagenation />
    </div>
  );
}

export default Movies;
