import axios from "axios";
import { baseURL } from "../baseURL";
import { DeleteFlightProps } from "../../typescript/types/type";

const deleteFlight = (props: DeleteFlightProps) => {
    try {
        axios.delete(`${baseURL}/flight/${props.flightId}`)
        .then( (res) => {
            console.log(res.data.data);
            props.setStatusCode(res.status);
            props.setMessage('Flight deleted successfully');
            props.setSuccess(true);
            setTimeout( () => {
                props.setSuccess(false);
            }, 2000);
            alert('Flight deleted successfully');
            props.navigate('/dashboard/flights');
        })
        .catch((error) => {
            console.log(error.message);
            props.setStatusCode(error.response.status);
            props.setMessage('Cannot delete flight. Please try again later');
            props.setError(true);
            setTimeout( () => {
                props.setError(false);
            }, 2000);
        });
    } catch (error: any) {
        console.log(error.message);
        props.setStatusCode(error.response.status);
        props.setMessage('Cannot delete flight. Please try again later');
        props.setError(true);
        setTimeout( () => {
            props.setError(false);
        }, 2000);
    }
}

export default deleteFlight;