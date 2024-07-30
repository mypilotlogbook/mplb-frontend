import axios from "axios";
import { baseURL } from "../baseURL";
import { HandleSendForgotPasswordEmailProps } from "../../typescript/types/type";

const sendForgotPasswordEmail = async (props: HandleSendForgotPasswordEmailProps) => {
    try {
        if (props.email.trim().length === 0) {
            props.setStatusCode(400);
            props.setMessage('Email is required');
            props.setError(true);
            setTimeout( () => {
                props.setError(false);
            }, 2000);
        } else {
            if (props.email.includes('@') && props.email.includes('.')) {
                props.setLoading(true);
                await axios.post(`${baseURL}/email/forgot-password`, {
                    email: props.email
                  })
                    .then( (res) => {
                      console.log(res.data.data);
                      props.resetCredentials();
                      setTimeout(() => {
                        props.setLoading(false);
                      }, 5000);
                    })
                    .catch( (error) => {
                      console.log(error);
                      props.setStatusCode(error.response.status);
                      props.setMessage(error.response.data.message);
                      props.setError(true);
                      setTimeout( () => {
                          props.setLoading(false);
                          props.setError(false);
                      }, 2000);
                })
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

export default sendForgotPasswordEmail;