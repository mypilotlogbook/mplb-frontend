import axios from 'axios';
import { baseURL } from '../baseURL';
import { DeleteUserProps } from '../../typescript/types/type';

const deleteUser = async (props: DeleteUserProps) => {
    await axios.delete(`${baseURL}/user/${props.userId}`)
        .then((res) => {
            console.log(res.data.data);
            alert('Your account has been deleted successfully. You will redirected to login page.');
        })
        .catch((error) => {
            console.log(error);
        })
}

export default deleteUser;