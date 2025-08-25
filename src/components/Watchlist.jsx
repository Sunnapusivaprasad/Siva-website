import React from "react";

import { useState } from "react";

function Watchlist({ watchList,setWatchlist }) {
  let [search, setSearch] = useState("");
  
  const [isActive, setIsActive] = useState(false);
  const [originalList] = useState(watchList);
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let deleteButton = (movie) => {
    let filtered = watchList.filter((m) => m.id !== movie.id);
    setWatchlist(filtered);
    

   
  };
  let sortInc = () => {
  let sortedInc = [...watchList].sort((a, b) => Number(a.rating) - Number(b.rating));
  setWatchlist(sortedInc);
  
};

let sortDec = () => {
  let sortedDec = [...watchList].sort((a, b) => Number(b.rating) - Number(a.rating));
  setWatchlist(sortedDec);
  
};
 const [backupList] = useState([...watchList]);
let handleClickAction= () => {
    if (!isActive) {
      // 👉 Filter movies with genre "action"
      let actionGener = watchList.filter(
        (movie) => movie.gener.toLowerCase() === "action"
      );
      setWatchlist(actionGener);
      console.log("Filtered Action Movies 🎬");
    } else {
      // 👉 Reset to original list
      setWatchlist(backupList)
      }
    setIsActive(!isActive); // toggle state
  };
let allGeners=()=>{
setWatchlist(backupList)
    
  
}


let handleClickRomance= () => {
    if (!isActive) {
      // 👉 Filter movies with genre "romance"
      let actionGener = watchList.filter(
        (movie) => movie.gener.toLowerCase() === "romance"
      );
      setWatchlist(actionGener);
      console.log("Filtered Action Movies 🎬");
    } else {
      // 👉 Reset to original list
     setWatchlist(backupList)
    }
    setIsActive(!isActive); // toggle state
  };

  let handleClickScifi= () => {
    if (!isActive) {
      // 👉 Filter movies with genre "sci-fi"
      let actionGener = watchList.filter(
        (movie) => movie.gener.toLowerCase() === "sci-fi"
      );
      setWatchlist(actionGener);
      console.log("Filtered Action Movies 🎬");
    } else {
      // 👉 Reset to original list
     setWatchlist(backupList)
    }
    setIsActive(!isActive); // toggle state
  };
  
  let handleClickAnime= () => {
    if (!isActive) {
      // 👉 Filter movies with genre "action"
      let actionGener = watchList.filter(
        (movie) => movie.gener.toLowerCase() === "animation"
      );
      setWatchlist(actionGener);
      console.log("Filtered Action Movies 🎬");
    } else {
      // 👉 Reset to original list
     setWatchlist(backupList)
    }
    setIsActive(!isActive); // toggle state
  };



    
  return (
    <>
    <div className="flex justify-center items-center gap-2 "></div>
      <div className="flex justify-center items-center gap-2 ">
        <div onClick={allGeners}  className="bg-blue-500 text-white mb-1 w-[5rem] text-center  rounded text-center ">
          AllGeners
        </div>
        <div onClick={handleClickAction}  className="bg-blue-500 text-white mb-1 w-[3rem] text-center  rounded text-center ">
          action
        </div>
        <div onClick={handleClickRomance} className="bg-blue-500 text-white mb-1 w-[5rem] text-center  rounded text-center ">
          Romance
        </div>
        <div  onClick={handleClickScifi} className="bg-blue-500 text-white mb-1 w-[4rem] text-center  rounded text-center ">
          Sci-fi
        </div>
        
        <div onClick={handleClickAnime}  className="bg-blue-500 text-white mb-1 w-[5rem] text-center  rounded text-center ">
          Animation
        </div>
      </div>

      <div>
        <input
          onChange={handleSearch}
          value={search}
          className="border h-[40px] w-[200px] p-1"
          placeholder="Search movies"
          type="text"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 mt-4">
        <table className="w-full text-gray-500 text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>
              <div className="flex"> 
                <div onClick={sortInc}  className="mr-2 cursor-pointer">&#8595;</div>
                <div>
                Rating</div>
                <div  onClick={sortDec} className="ml-2 cursor-pointer">&#8593;</div>
                </div>
                </th>
                
              
              <th>gener</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movie) => {
                return movie.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((movie) => (
                <tr key={`${movie.id}-${movie.name}`} className="border-b">
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="w-20 h-20 object-cover border border-gray-200 ml-2"
                      src={movie.poster}
                      alt={movie.name}
                    />
                    <div className="mx-4">{movie.name}</div>
                  </td>
                  <td>{movie.rating}</td>
                  <td>{movie.gener}</td>
                  <td>
                    <button
                      className="bg-red-500 text-center ml-1 px-3 py-1 rounded text-white"
                      onClick={() => deleteButton(movie)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
