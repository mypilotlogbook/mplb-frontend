import axios from "axios";
import { UpdatePilotProps } from "../../typescript/types/type";
import { baseURL } from "../baseURL";

const updatePilot = async (props: UpdatePilotProps) => {
    const {
        setStatusCode = () => {},
        setMessage = () => {},
        setError = () => {},
        setSuccess= () => {},
        setFormData = () => {},
    } = props;

    try {
        await axios.put(`${baseURL}/pilot/${props.pilotId}`, props.formData)
            .then((res) => {
                console.log(res);
                setStatusCode(res?.status || 200);
                setMessage(res.data.data.message || 'Update pilot successfully');
                setSuccess(true);
                if (props.getPilotById && props.setPilot) {
                    props.getPilotById({
                        setPilot: props.setPilot,
                        setFormData: props.setFormData,
                        pilotId: props.pilotId
                    });
                }
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
            })
            .catch((error) => {
                console.log(error.message);
                setStatusCode(error.response?.status || 500);
                setMessage('Cannot update pilot. Please try again later');
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 2000);
            });
    } catch (error: any) {
        console.log(error.message);
        setStatusCode(error.response?.status || 500);
        setMessage('Cannot update pilot. Please try again later');
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 2000);
    }
}

export default updatePilot;