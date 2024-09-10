// import { useEffect, useState } from "react";

// function Home() {
//   return (
//     <>
//       <header>
//         {/* What component should go here? */}
//       </header>
//       <main>
//         {/* Info goes here! */}
//       </main>
//     </>
//   );
// };

// export default Home;

import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovie] = useState([]);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/movies');
        const data = await response.json();
        setMovie(data);
      }
      catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();

  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <ul>
          {
            movies.map((movie) => (
              <li key={movie.id}><MovieCard title={movie.title} id={movie.id} /></li>
            ))
          }
        </ul>
      </main>
    </>
  );
};

export default Home;
