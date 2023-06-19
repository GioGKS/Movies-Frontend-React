import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { urlGenres } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import Loading from "../utils/Loading";
import GenreForm from "./GenreForm";
import { genreCreationDTO, genreDTO } from "./genres.mode";

export default function EditGenre() {
  const { id }: any = useParams();
  const [genre, setGenre] = useState<genreCreationDTO>();
  const [errors, setErrors] = useState<string[]>([]);
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(`${urlGenres}/${id}`)
      .then((response: AxiosResponse<genreDTO>) => {
        setGenre(response.data);
      });
  }, [id]);

  async function edit(genreToEdit: genreCreationDTO) {
    try {
      await axios.put(`${urlGenres}/${id}`, genreToEdit);
      history('/genres');
    } catch (error: any) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  return (
    <>
      <h3>Edit Genre</h3>
      <DisplayErrors errors={errors}></DisplayErrors>
      {genre ? (
        <GenreForm
          model={genre}
          onSubmit={async (value) => {
            // when the form is posted
            await edit(value);
          }}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
