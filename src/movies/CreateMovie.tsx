import { boolean } from "yup";
import { genreDTO } from "../genres/genres.mode";
import MovieForm from "./MovieForm";

export default function CreateMovie() {
  const nonSelectedgenres: genreDTO[] = [
    { id: 1, name: "Comedy" },
    { id: 2, name: "Drama" },
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
        nonSelectedGenres={nonSelectedgenres}
      />
    </>
  );
}
