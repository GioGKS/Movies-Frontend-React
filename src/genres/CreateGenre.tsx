import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";

export default function CreateGenre() {
  const history = useNavigate();
  return (
    <>
      <h3>Create Genre</h3>

      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(value) => {
          // when the form is posted
          console.log(value);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Thies field is required"),
        })}
      >
        <Form>
          <TextField field="name" displayName="Name" />

          <Button type="submit">Save Changes</Button>
          <Link className="btn btn-secondary" to="/genres">
            Cancel
          </Link>
        </Form>
      </Formik>
    </>
  );
}
