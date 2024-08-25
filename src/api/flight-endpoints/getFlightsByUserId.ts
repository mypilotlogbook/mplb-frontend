import axios from "axios";
import { baseURL } from "../baseURL";
import { GetFlightsByUserIdProps } from "../../typescript/types/type";

const getFlightsByUserId = (props: GetFlightsByUserIdProps) => {
    try {
        axios.get(`${baseURL}/flight/getFlightsByUserId/${props.userId}`)
        .then((res) => {
            console.log(res.data.data);
            props.setFlights(res.data.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
    } catch (error: any) {
        console.log(error.message);
    }
};

export default getFlightsByUserId;
