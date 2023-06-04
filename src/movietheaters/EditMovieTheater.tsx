import MovieThaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <>
      <h3>Edit Movie Theater</h3>
      <MovieThaterForm
        model={{
          name: "Sambil",
          latitude: 18.476357914436562,
          longitude: -69.92523193359376,
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
