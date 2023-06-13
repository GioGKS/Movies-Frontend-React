import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { urlGenres } from '../endpoints';
import GenreForm from './GenreForm';
import { genreCreationDTO } from './genres.mode';

export default function CreateGenre() {
    const history = useNavigate();

    async function create(genre: genreCreationDTO){
        try{
            await axios.post(urlGenres, genre)
            history('/genres');
        }
        catch (error) {
            console.error(error);
            
        }
    }


    return (
        <>
            <h3>Create Genre</h3>
            <GenreForm model={{ name: '' }}
                onSubmit={async value => {
                   await create(value);
                }}
            />
        </>
    )
}