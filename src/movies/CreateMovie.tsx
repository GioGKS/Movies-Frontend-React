import { genreDTO } from "../genres/genres.mode";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function CreateMovie() {
  const nonSelectedGenres: genreDTO[] = [
    { id: 1, name: "Comedy" },
    { id: 2, name: "Drama" },
  ];

  const nonSelectedMovieTheaters: movieTheaterDTO[] = [
    { id: 1, name: "Sambil" },
    { id: 2, name: "Agora" },
  ];

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "",
          inTheaters: false,
          trailer: '',
          
        }}
        onSubmit={(values) => console.log(values)}
        selectedGenres={[]}
        nonSelectedGenres={nonSelectedGenres}

        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={[]}
        selectedActors={[]}
      />
    </>
  );
}
