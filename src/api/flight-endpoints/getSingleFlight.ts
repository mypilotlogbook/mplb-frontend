import axios from "axios";
import { baseURL } from "../baseURL";
import { GetSingleFlightProps } from "../../typescript/types/type";

const getSingleFlight = (props: GetSingleFlightProps) => {
    try {
        axios.get(`${baseURL}/flight/${props.flightId}`)
        .then((res) => {
            console.log(res.data.data);
            if (props.setFlight) {
                props.setFlight(res.data.data);
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
    } catch (error: any) {
        console.log(error.message);
    }
};

export default getSingleFlight;
