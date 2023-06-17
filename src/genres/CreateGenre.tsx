import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { urlGenres } from '../endpoints';
import DisplayErrors from '../utils/DisplayErrors';
import GenreForm from './GenreForm';
import { genreCreationDTO } from './genres.mode';

export default function CreateGenre() {
    const history = useNavigate();
    const [errors, setErrors] = useState<string[]>([]);

    async function create(genre: genreCreationDTO){
        try{
            await axios.post(urlGenres, genre)
            history('/genres');
        }
        catch (error: any) {
            if (error && error.response){
                setErrors(error.response.data)
            }
            
        }
    }


    return (
        <>
            <h3>Create Genre</h3>
            <DisplayErrors errors={errors} />
            <GenreForm model={{ name: '' }}
                onSubmit={async value => {
                   await create(value);
                }}
            />
        </>
    )
}