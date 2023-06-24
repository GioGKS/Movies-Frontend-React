import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlActors } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import { convertActorToFormData } from "../utils/formDataUtils";
import ActorForm from "./ActorForm";
import { actorCreationDTO } from "./actors.mode";

export default function CreateActor() {
  const [errors, setErrors] = useState<string[]>([]);
  const history = useNavigate();

  async function create(actor: actorCreationDTO) {
    try {
      const formData = convertActorToFormData(actor);

      await axios({
        method: 'post',
        url: urlActors,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
      });
      history('/actors');

    } catch (error: any) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  return (
    <>
      <h3>Create Actor</h3>
      <DisplayErrors errors={errors} />
      <ActorForm
        model={{ name: "", dateOfBirth: undefined }}
        onSubmit={async values => await create(values)}
      />
    </>
  );
}
