import axios from "axios";
import { baseURL } from "../baseURL";
import { HandleChangePasswordProps } from "../../typescript/types/type";

const changePassword = async (props: HandleChangePasswordProps) => {
    try {
        if (props.password.trim().length === 0 || props.confirmPassword.trim().length === 0) {
            props.setStatusCode(400);
            props.setMessage('Password and confirm password are required');
            props.setError(true);
            setTimeout( () => {
                props.setError(false);
            }, 2000);
        } else {
            if (props.email.includes('@') && props.email.includes('.')) {
                if (props.password === props.confirmPassword) {
                    await axios.patch(`${baseURL}/user/forgot-password`, {
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
                          props.setMessage('Login failed. Invalid email or password. Please try again.');
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

export default changePassword;