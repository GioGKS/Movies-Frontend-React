import GenreForm from "./GenreForm";

export default function CreateGenre() {
  //const history = useNavigate();
  return (
    <>
      <h3>Create Genre</h3>

      <GenreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          // when form is posted
          await new Promise((r) => setTimeout(r, 2000));
          console.log(value);
        }}
      />
    </>
  );
}
