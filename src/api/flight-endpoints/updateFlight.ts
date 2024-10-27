import axios from "axios";
import { UpdateSingleFlightProps } from "../../typescript/types/type";
import { baseURL } from "../baseURL";

const updateFlight = async (props: UpdateSingleFlightProps) => {
    try {
        await axios.put(`${baseURL}/flight/${props.flightId}`, props.formData)
            .then((res) => {
                console.log(res);

                if (props.setStatusCode) props.setStatusCode(res?.status || 200);
                if (props.setMessage) props.setMessage(res.data.data.message || 'Update flight successfully');
                if (props.setSuccess) props.setSuccess(true);

                if (props.getSingleFlight && props.setFlight && props.setFormData) {
                    props.getSingleFlight({
                        setFlight: props.setFlight,
                        setFormData: props.setFormData,
                        flightId: props.flightId
                    });
                }

                setTimeout(() => {
                    if (props.setSuccess) props.setSuccess(false);
                }, 2000);
            })
            .catch((error) => {
                console.log(error.message);

                if (props.setStatusCode) props.setStatusCode(error.response?.status || 500);
                if (props.setMessage) props.setMessage('Cannot update flight. Please try again later');
                if (props.setError) props.setError(true);

                setTimeout(() => {
                    if (props.setError) props.setError(false);
                }, 2000);
            });
    } catch (error: any) {
        console.log(error.message);

        if (props.setStatusCode) props.setStatusCode(error.response?.status || 500);
        if (props.setMessage) props.setMessage('Cannot update flight. Please try again later');
        if (props.setError) props.setError(true);

        setTimeout(() => {
            if (props.setError) props.setError(false);
        }, 2000);
    }
}


export default updateFlight;