import { useFormikContext } from "formik";
import coordinateDTO from "../utils/coordinate.model"
import Map from "../utils/Map"

export default function MapField(props: mapFieldProps){

    const {values} = useFormikContext<any>();

    function handleMapClick(coordinates: coordinateDTO){
        values[props.latFielt] = coordinates.lat
        values[props.lngField] = coordinates.lng

    }

    return (
        <Map 
            coordinates={props.coordinates}
            handleMapClick={handleMapClick}
        />
    )
}

interface mapFieldProps{
    coordinates: coordinateDTO[];
    latFielt: string;
    lngField: string;
}

MapField.defaultProps = {
    coordinates: []
}