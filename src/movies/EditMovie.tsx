import { genreDTO } from "../genres/genres.mode";
import MovieForm from "./MovieForm";

export default function EditMovie() {
  const nonSelectedgenres: genreDTO[] = [{ id: 2, name: "Drama" }];
  const selectedgenres: genreDTO[] = [{ id: 1, name: "Comedy" }];

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "Toy Story",
          inTheaters: true,
          trailer: "url",
          releaseDate: new Date("2019-01-01T00:00:00"),
        }}
        onSubmit={(values) => console.log(values)}
        selectedGenres={selectedgenres}
        nonSelectedGenres={nonSelectedgenres}
      />
    </>
  );
}
