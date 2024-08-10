import axios from 'axios';
import { baseURL } from '../baseURL';
import { GetUserEmailProps } from '../../typescript/types/type';

const getUserEmail = (props: GetUserEmailProps) => {
    axios.get(`${baseURL}/user/${props.id}`)
        .then((res) => {
            props.setEmail(res.data.data.email);
        })
        .catch((error) => {
            console.log(error);
        })
}

export default getUserEmail;