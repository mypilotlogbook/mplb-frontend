import axios from 'axios';
import { baseURL } from '../baseURL';
import { DeleteUserProps } from '../../typescript/types/type';

const deleteUser = (props: DeleteUserProps) => {
    axios.get(`${baseURL}/user/${props.userId}`)
        .then((res) => {
            console.log(res.data.data);
            props.navigate('/login');
        })
        .catch((error) => {
            console.log(error);
        })
}

export default deleteUser;