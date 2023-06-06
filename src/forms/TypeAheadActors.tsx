import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { actorMovieDTO } from "../actors/actors.mode";

export default function TypeAheadActors(props: typeAheadActorsProps) {
  const actors: actorMovieDTO[] = [
    {
      id: 1,
      name: "Tom Holland",
      character: "",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg",
    },
    {
      id: 1,
      name: "Keanu Reeves",
      character: "",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Reunião_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg/220px-Reunião_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg",
    },
    {
      id: 1,
      name: "Christian Bale",
      character: "",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/220px-Christian_Bale-7837.jpg",
    },
  ];

  const selected: actorMovieDTO[] = [];

  const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined)

  function handleDragStart(actor:actorMovieDTO){
    setDraggedElement(actor);
  }

  function handleDragOver(actor: actorMovieDTO){
      if (!draggedElement){
          return;
      }
      if(actor.id !== draggedElement.id){
          const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id);
          const actorIndex = props.actors.findIndex(x => x.id === actor.id);

          const Actors = [...props.actors];
          actors[actorIndex] = draggedElement;
          actors[draggedElementIndex] = actor;
          props.onAdd(actors);
      }
  }

  return (
    <div className="mb-3">
      <label>{props.displayName}</label>
      <Typeahead
        id="typeahead"
        onChange={(actors) => {
          if (props.actors.findIndex((x) => x.id === actors[0].id) === -1) {
            props.onAdd([...props.actors, actors[0]]);
          }
          console.log(actors);
        }}
        options={actors}
        labelKey={(actor) => actor.name}
        filterBy={["name"]}
        placeholder="Write the name of the actor..."
        minLength={1}
        flip={true}
        selected={selected}
        renderMenuItemChildren={(actor) => (
          <>
            <img
              alt="actor"
              src={actor.picture}
              style={{
                height: "64px",
                marginRight: "10px",
                width: "64px",
              }}
            />
            <span>{actor.name}</span>
          </>
        )}
      />

      <ul className="list-group">
        {props.actors.map((actor) => (
          <li
            key={actor.id}
            draggable={true}
            onDragStart={() => handleDragStart(actor)}
            onDragOver={() => handleDragStart(actor)}
            className="list-group-item list-group-item-action"
          >
            {props.listUI(actor)}
            <span
              className="badge badge-primary badge-pill pointer text-dark"
              style={{ marginLeft: "0.5rem" }}
              onClick={() => props.onRemove(actor)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface typeAheadActorsProps {
  displayName: string;
  actors: actorMovieDTO[];
  onAdd(actors: actorMovieDTO[]): void;
  onRemove(actor: actorMovieDTO): void;
  listUI(acto: actorMovieDTO): ReactElement;
}
