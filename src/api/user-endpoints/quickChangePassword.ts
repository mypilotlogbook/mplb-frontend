import axios from "axios";
import { baseURL } from "../baseURL";
import { QuickChangePasswordProps } from "../../typescript/types/type";

const quickChangePassword = async (props: QuickChangePasswordProps) => {
    try {
        if (props.credentaials.password.trim().length === 0 || props.credentaials.confirmPassword.trim().length === 0) {
            props.setStatusCode(400);
            props.setMessage('Password and confirm password are required');
            props.setError(true);
            setTimeout( () => {
                props.setError(false);
            }, 2000);
        } else {
            if (props.email.includes('@') && props.email.includes('.')) {
                if (props.credentaials.password === props.credentaials.confirmPassword) {
                    await axios.patch(`${baseURL}/user/forgot-password`, {
                        email: props.email,
                        password: props.credentaials.password,
                      })
                        .then( (res) => {
                          console.log(res.data.data);
                          props.resetCredentials();
                          props.setStatusCode(res.data.data.status);
                          props.setMessage('Password updated successfully');
                          props.setSuccess(true);
                          setTimeout( () => {
                              props.setSuccess(false);
                          }, 2000);
                        })
                        .catch( (error) => {
                          console.log(error);
                          props.setStatusCode(error.response.status);
                          props.setMessage('Can not upate new password. Please try again.');
                          props.setError(true);
                          setTimeout( () => {
                              props.setError(false);
                          }, 2000);
                        });
                } else {
                    props.setStatusCode(400);
                    props.setMessage('Password and confirm password must be same');
                    props.setError(true);
                    setTimeout( () => {
                        props.setError(false);
                    }, 2000);
                }
            } else {
                props.setStatusCode(400);
                props.setMessage('Please enter valid email address.');
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

export default quickChangePassword;