import axios from "axios";
import { UpdateAircraftProps } from "../../typescript/types/type";
import { baseURL } from "../baseURL";
import getAircraft from "./getAircraft";

const updateAircraft = async (props: UpdateAircraftProps) => {
    try {
        await axios.put(`${baseURL}/aircraft/${props.aircraftId}`, props.formData)
            .then((res) => {
                console.log(res.data);
                getAircraft({
                    aircraftId: props.aircraftId || null,
                    setFormData: props.setFormData,
                    setAircraft: props.setAircraft,
                });
                if (props.setStatusCode) props.setStatusCode(res.data.data.statusCode || 200);
                if (props.setMessage) props.setMessage('Aircraft updated successfully');
                if (props.setSuccess) props.setSuccess(true);
                setTimeout(() => {
                    if (props.setSuccess) props.setSuccess(false);
                }, 2000);
            })
            .catch((error) => {
                console.log(error.message);
                if (props.setStatusCode) props.setStatusCode(error.response?.status || 400);
                if (props.setMessage) props.setMessage('Cannot update aircraft. Please try again later');
                if (props.setError) props.setError(true);
                setTimeout(() => {
                    if (props.setError) props.setError(false);
                }, 2000);
            });
    } catch (error: any) {
        console.log(error.message);
        if (props.setStatusCode) props.setStatusCode(error.response?.status || 500);
        if (props.setMessage) props.setMessage('Cannot update aircraft. Please try again later');
        if (props.setError) props.setError(true);
        setTimeout(() => {
            if (props.setError) props.setError(false);
        }, 2000);
    }
}

export default updateAircraft;