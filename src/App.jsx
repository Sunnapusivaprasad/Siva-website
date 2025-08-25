import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchList, setWatchlist] = useState([]);

  
 let addToWatchlist = (movie) => {
  
  if (watchList.some((m) => m.id === movie.id)) {
    
    return;
  }

  let newWatchlist = [...watchList, movie];
  setWatchlist(newWatchlist);
  localStorage.setItem("movies", JSON.stringify(newWatchlist));
};

  useEffect(()=>{
    let localstorageMovie=localStorage.getItem('movies')
    if(!localstorageMovie){
      return
    }
    

      setWatchlist(JSON.parse(localstorageMovie))
    
  },[])
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies addToWatchlist={addToWatchlist} watchList={watchList} setWatchlist={setWatchlist}  />
              </>
            }
          />
          <Route
            path="/WatchList"
            element={<Watchlist watchList={watchList} setWatchlist={setWatchlist} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
