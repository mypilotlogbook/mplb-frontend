import axios from "axios";
import { baseURL } from "../baseURL";
import { getAircraftsByUserIdProps } from "../../typescript/types/type";

const getAircraftsByUserId = async (props: getAircraftsByUserIdProps) => {
    try {
        axios.get(`${baseURL}/aircraft/getByUserId/${props.userId}`)
            .then( (res) => {
                console.log(res.data.data);
                props.setAircrafts(res.data.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }catch (error: any){
        console.log(error.message);
    }
}

export default getAircraftsByUserId;