import axios from "axios";
import { baseURL } from "../baseURL";
import { AddFlightProps } from "../../typescript/types/type";

const addFlight = (props: AddFlightProps) => {
    try {
        axios.post(`${baseURL}/flight`, props.flightObj)
        .then((res) => {
            console.log(res.data);

            if (props.setStatusCode) {
                props.setStatusCode(res.data.data.statusCode);
            }
            if (props.setMessage) {
                props.setMessage("Flight added successfully");
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
                props.setMessage('Please enter all the details. Please try again later');
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
            props.setMessage('Please try again later');
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
};

export default addFlight;
