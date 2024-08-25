import axios from "axios";
import { baseURL } from "../baseURL";
import { DeleteFlightsByUserIdProps } from "../../typescript/types/type";

const deleteFlightsByUserId = (props: DeleteFlightsByUserIdProps) => {
    try {
        axios.delete(`${baseURL}/flight/deleteFlightsByUserId/${props.userId}`)
        .then((res) => {
            console.log(res.data.data);

            if (props.setStatusCode) {
                props.setStatusCode(res.status);
            }

            if (props.setMessage) {
                props.setMessage('Flights data reset successfully');
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
                props.setMessage('Cannot reset flights data. Please try again later');
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
            props.setMessage('Cannot reset flights data. Server error');
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

export default deleteFlightsByUserId;
