import axios from "axios";
import { baseURL } from "../baseURL";
import { HandleUserRegisterProps } from "../../typescript/types/type";

const handleRegister = async (props: HandleUserRegisterProps) => {
    try { 
      if (props.email.trim().length === 0 || props.password.trim().length === 0) {
        props.setStatusCode(400);
        props.setMessage('Email and password are required');
        props.setError(true);
        setTimeout( () => {
            props.setError(false);
        }, 2000);
      } else {
        if (props.email.includes('@') && props.email.includes('.')) {
            await axios.post(`${baseURL}/user`, {
                email: props.email,
                password: props.password,
              })
                .then( (res) => {
                  console.log(res.data.data);
                  props.resetCredentials();
                  props.setLoading(true);
                  setTimeout(() => {
                    props.navigate('/login');
                    props.setLoading(false);
                  }, 5000);
                })
                .catch( (error) => {
                  console.log(error);
                  props.setStatusCode(error.response.status);
                  props.setMessage(error.response.data.message);
                  props.setError(true);
                  setTimeout( () => {
                      props.setError(false);
                  }, 2000);
                });
        } else {
            props.setStatusCode(400);
            props.setMessage('Invalid email. Please enter valid email address.');
            props.setError(true);
            setTimeout( () => {
                props.setError(false);
            }, 2000);
        }
      }
    } catch (error: any) {
      console.log(error);
      props.setStatusCode(error.response.status);
      props.setMessage(error.response.data.message);
      props.setError(true);
      setTimeout( () => {
        props.setError(false);
      }, 2000);
    }
}

export default handleRegister;