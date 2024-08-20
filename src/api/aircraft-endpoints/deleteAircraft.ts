import axios from "axios";
import { baseURL } from "../baseURL";
import { DeleteAircraftProps } from "../../typescript/types/type";

const deleteAircraft = async (props: DeleteAircraftProps) => {
    try {
        await axios.delete(`${baseURL}/aircraft/${props.aircraftId}`)
            .then( (res) => {
                alert('Aircraft deleted successfully');
                if (props.navigate) {
                    props.navigate('/dashboard/aircrafts');
                }
            })
            .catch((error) => {
                console.log(error.message);
                if (props.setStatusCode) {
                    props.setStatusCode(400);
                }
                if (props.setMessage) {
                    props.setMessage("Can not delete aircraft. Please try again later");
                }
                if (props.setError) {
                    props.setError(true);
                }
                setTimeout(() => {
                    if (props.setError) {
                        props.setError(false);
                    }
                }, 2000);
            });
    }catch (error: any){
        console.log(error.message);
        if (props.setStatusCode) {
            props.setStatusCode(500);
        }
        if (props.setMessage) {
            props.setMessage("Can not delete aircraft. Please try again later");
        }
        if (props.setError) {
            props.setError(true);
        }
        setTimeout(() => {
            if (props.setError) {
                props.setError(false);
            }
        }, 2000);
    }
}

export default deleteAircraft;