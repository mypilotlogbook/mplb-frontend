import axios from "axios";
import { baseURL } from "../baseURL";
import { getAirFieldProps } from "../../typescript/interfaces/interface";

const getAirField = async (props: getAirFieldProps) => {
    try {
        axios.get(`${baseURL}/airfield/${props.airfieldId}`)
            .then( (res) => {
                props.setAirfield(res.data.data);
                console.log(res.data.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }catch (error: any){
        console.log(error.message);
    }
}

export default getAirField;