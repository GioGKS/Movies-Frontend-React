import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";

export default function CreateGenre() {
  const history = useNavigate();
  return (
    <>
      <h3>Create Genre</h3>
      <Button onclick={() => {
        // ... saving in the db
        history('/genres');
      }} >Save Changes</Button>
    </>
  );
}
