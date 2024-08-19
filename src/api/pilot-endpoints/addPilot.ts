import axios from "axios";
import { AddPilotProps } from "../../typescript/types/type";
import { baseURL } from "../baseURL";

const addPilot = async (props: AddPilotProps) => {
    try {
        await axios.post(`${baseURL}/pilot`, props.pilot)
            .then((res) => {
                console.log(res.data.data);

                if (props.setStatusCode) {
                    props.setStatusCode(res.data.data.statusCode);
                }
                if (props.setMessage) {
                    props.setMessage("Pilot added successfully");
                }
                if (props.setSuccess) {
                    props.setSuccess(true);
                }
                if (props.resetCredentials) {
                    props.resetCredentials();
                }

                setTimeout(() => {
                    if (props.setSuccess) {
                        props.setSuccess(false);
                    }
                }, 2000);

            })
            .catch((error) => {
                console.log(error.message);

                if (props.setStatusCode && error.response) {
                    props.setStatusCode(error.response.status);
                }
                if (props.setMessage) {
                    props.setMessage('Cannot add pilot. Please try again later');
                }
                if (props.setError) {
                    props.setError(true);
                }
                if (props.resetCredentials) {
                    props.resetCredentials();
                }

                setTimeout(() => {
                    if (props.setError) {
                        props.setError(false);
                    }
                }, 2000);
            });
    } catch (error: any) {
        console.log(error.message);

        if (props.setStatusCode && error.response) {
            props.setStatusCode(error.response.status);
        }
        if (props.setMessage) {
            props.setMessage('Cannot add a new pilot. Please try again later');
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

export default addPilot;
