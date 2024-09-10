// import { useEffect, useState } from "react";

// function Movie() {
//   return (
//     <>
//       <header>
//         {/* What component should go here? */}
//       </header>
//       <main>
//         {/* Movie info here! */}
//       </main>
//     </>
//   );
// };

// export default Movie;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error))

  }, [id]);


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>T{movie.title}</h1>
        <p>{movie.time}</p>
        {movie?.genres?.map((genre) => (
          <span>{genre}</span>
        ))}
      </main>
    </>
  );
};

export default Movie;
