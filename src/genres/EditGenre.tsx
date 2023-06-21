import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { urlGenres } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import EditEntity from "../utils/EditEntity";
import Loading from "../utils/Loading";
import GenreForm from "./GenreForm";
import { genreCreationDTO, genreDTO } from "./genres.mode";

export default function EditGenre() {
  

  return (
    <>
      <EditEntity<genreCreationDTO, genreDTO>
        url={urlGenres} entityName="Genres"
      >
        {(entity, edit) => 
          <GenreForm
          model={entity}
          onSubmit={async (value) => {
            // when the form is posted
            await edit(value);
          }}
        />
        }
      </EditEntity>
    </>
  );
}
