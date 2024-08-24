import axios from "axios";
import { baseURL } from "../baseURL";
import { DeleteAircraftsByUserIdProps } from "../../typescript/types/type";

const deleteAircraftsByUserId = (props: DeleteAircraftsByUserIdProps) => {
    try {
        axios.delete(`${baseURL}/aircraft/deleteAircraftsByUserId/${props.userId}`)
        .then((res) => {
            console.log(res.data.data);

            if (props.setStatusCode) {
                props.setStatusCode(res.status);
            }

            if (props.setMessage) {
                props.setMessage('Aircraft data reset successfully');
            }

            if (props.setSuccess) {
                props.setSuccess(true);
                setTimeout(() => {
                    if (props.setSuccess) {
                        props.setSuccess(false);
                    }
                }, 2000);
            }
        })
        .catch((error) => {
            console.log(error.message);

            if (props.setStatusCode && error.response) {
                props.setStatusCode(error.response.status);
            }

            if (props.setMessage) {
                props.setMessage('Cannot reset aircraft data. Please try again later');
            }

            if (props.setError) {
                props.setError(true);
                setTimeout(() => {
                    if (props.setError) {
                        props.setError(false);
                    }
                }, 2000);
            }
        });
    } catch (error: any) {
        console.log(error.message);

        if (props.setStatusCode && error.response) {
            props.setStatusCode(error.response.status);
        }

        if (props.setMessage) {
            props.setMessage('Cannot reset aircraft data. Server error');
        }

        if (props.setError) {
            props.setError(true);
            setTimeout(() => {
                if (props.setError) {
                    props.setError(false);
                }
            }, 2000);
        }
    }
};

export default deleteAircraftsByUserId;
