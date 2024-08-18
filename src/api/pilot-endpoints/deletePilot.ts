import axios from "axios";
import { baseURL } from "../baseURL";
import { DeletePilotProps } from "../../typescript/types/type";

const deletePilot = (props: DeletePilotProps) => {
    try {
        axios.delete(`${baseURL}/pilot/${props.pilotId}`)
        .then( (res) => {
            console.log(res.data.data);
            props.setStatusCode(res.status);
            props.setMessage('Pilot deleted successfully');
            props.setSuccess(true);
            setTimeout( () => {
                props.setSuccess(false);
            }, 2000);
            alert('Pilot deleted successfully');
            props.navigate('/dashboard/pilots');
        })
        .catch((error) => {
            console.log(error.message);
            props.setStatusCode(error.response.status);
            props.setMessage('Cannot delete pilot. Please try again later');
            props.setError(true);
            setTimeout( () => {
                props.setError(false);
            }, 2000);
        });
    } catch (error: any) {
        console.log(error.message);
        props.setStatusCode(error.response.status);
        props.setMessage('Cannot delete pilot. Please try again later');
        props.setError(true);
        setTimeout( () => {
            props.setError(false);
        }, 2000);
    }
}

export default deletePilot;