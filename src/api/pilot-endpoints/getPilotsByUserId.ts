import axios from "axios";
import { baseURL } from "../baseURL";
import { getPilotsByUserIdProps } from "../../typescript/types/type";

const getPilotsByUserId = (props: getPilotsByUserIdProps) => {
    try {
        axios.get(`${baseURL}/pilot/getPilotByUserId/${props.userId}`)
            .then( (res) => {
                console.log(res.data.data);
                props.setPilots(res.data.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }catch (error: any){
        console.log(error.message);
    }
}

export default getPilotsByUserId;