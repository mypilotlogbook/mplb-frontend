import axios from "axios";
import { baseURL } from "../baseURL";
import { getAirFieldsProps } from "../../typescript/types/type";

const getAirFields = async (props: getAirFieldsProps) => {
    try {
        await axios.get(`${baseURL}/airfield`)
            .then( (res) => {
                if (props.setAirfields) {
                    props.setAirfields(res.data.data);
                }
                if (props.setFilteredAirfields) {
                    props.setFilteredAirfields(res.data.data);
                }
                console.log(res.data.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }catch (error: any){
        console.log(error.message);
    }
}

export default getAirFields;