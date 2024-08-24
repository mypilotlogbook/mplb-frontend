import axios from "axios";
import { baseURL } from "../baseURL";
import { DeletePilotsByUserIdProps } from "../../typescript/types/type";

const deletePilotsByUserId = (props: DeletePilotsByUserIdProps) => {
    try {
        axios.delete(`${baseURL}/pilot/deletePilotsByUserId/${props.userId}`)
        .then((res) => {
            console.log(res.data.data);

            if (props.setStatusCode) {
                props.setStatusCode(res.status);
            }

            if (props.setMessage) {
                props.setMessage('Pilots data reset successfully');
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
                props.setMessage('Cannot reset pilots data. Please try again later');
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
            props.setMessage('Cannot reset pilots data. Server error');
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

export default deletePilotsByUserId;
