import axios from "axios";
import { baseURL } from "../baseURL";
import { getPilotPropsById } from "../../typescript/types/type";

const getPilotById = (props: getPilotPropsById) => {
    try {
        axios.get(`${baseURL}/pilot/${props.pilotId}`)
            .then( (res) => {
                console.log(res.data.data);
                props.setPilot(res.data.data);
                if (props.setFormData) {
                    props.setFormData({
                        fname: res.data.data.fname || '',
                        lname: res.data.data.lname || '',
                        age: res.data.data.age || '',
                        image: res.data.data.image || '',
                        company: res.data.data.company || '',
                        position: res.data.data.position || '',
                        email: res.data.data.email || '',
                        mobile: res.data.data.mobile || '',
                        address: res.data.data.address || '',
                        employee_id: res.data.data.employee_id || '',
                    });
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }catch (error: any){
        console.log(error.message);
    }
}

export default getPilotById;