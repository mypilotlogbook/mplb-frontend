import axios from 'axios';
import { baseURL } from '../baseURL';
import { GetUserProps } from '../../typescript/types/type';

const getUserName = (props: GetUserProps) => {
    axios.get(`${baseURL}/user/${props.id}`)
        .then((res) => {
            if(res.data.data.fname && res.data.data.lname) {
                const fullName = res.data.data.fname + ' ' + res.data.data.lname;
                props.setName(fullName);
            }else {
                props.setName(res.data.data.email);
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

export default getUserName;