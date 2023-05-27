import { useEffect, useState } from "react";
import "./App.css";
import { landingPageDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";
import Button from "./utils/Button";

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "Spider-Man",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
          },
          {
            id: 2,
            title: "Luca",
            poster:
              "https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg",
          },
        ],
        upcomingreleases: [
          {
            id: 3,
            title: "Deadpool",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/220px-Deadpool_%282016_poster%29.png",
          },
        ],
      });
    }, 2000);

    return () => clearTimeout(timerId);
  });

  return (
    <div className="container">
      <Button>Whatever Text</Button>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingreleases} />
    </div>
  );
}

export default App;
