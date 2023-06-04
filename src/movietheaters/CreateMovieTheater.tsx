import MovieThaterForm from "./MovieTheaterForm";

export default function CreateMovieTheater() {
  return (
    <>
      <h3>Create Movie Theaters</h3>
      <MovieThaterForm
        model={{ name: "" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
