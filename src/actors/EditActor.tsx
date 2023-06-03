import ActorForm from "./ActorForm";

export default function EditActor() {
    return (
      <>
        <h3>Edit Actor</h3>
        <ActorForm model={{name: 'Tom Holland', dateOfBirth: new Date('1996-06-01T00:00:00'),
        biography: `# Something
        This person was born in **DR**`,
        pictureURL: 'https://phantom-marca.unidadeditorial.es/c894a9fe33544116c51a881cd6819819/resize/828/f/jpg/assets/multimedia/imagenes/2023/05/27/16852166698636.jpg'  
      }} 
          onSubmit={values => console.log(values)}
        />
      </>
    );
  }
  