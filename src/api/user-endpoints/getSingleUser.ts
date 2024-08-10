import axios from 'axios';
import { baseURL } from '../baseURL';
import { GetSingleUserProps } from '../../typescript/types/type';

const getSingleUser = (props: GetSingleUserProps) => {
    axios.get(`${baseURL}/user/${props.id}`)
        .then((res) => {
            props.setUser(res.data.data);
            if (props.setFormData) {
                props.setFormData({
                    fname: res.data.data.fname || '',
                    lname: res.data.data.lname || '',
                    age: res.data.data.age || '',
                    image: res.data.data.image || '',
                    company: res.data.data.company || '',
                    country: res.data.data.country || '',
                    description: res.data.data.description || '',
                    position: res.data.data.position || '',
                    email: res.data.data.email || '',
                });
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

export default getSingleUser;
