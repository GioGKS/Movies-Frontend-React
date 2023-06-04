import MovieThaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
    return (
      <>
        <h3>Edit Movie Theater</h3>
        <MovieThaterForm
        model={{ name: "Sambil" }}
        onSubmit={(values) => console.log(values)}
      />
      </>
    );
  }
  