import axios from "axios";
import { baseURL } from "../baseURL";
import { GenerateSelectedPilotsReportProps } from "../../typescript/types/type";

const generateSelectedPilotsPdf = (props: GenerateSelectedPilotsReportProps) => {
    try {
        axios.post(`${baseURL}/report/generateSelectedPilotsPdf`, { pilotsList: props.pilotsList })
        .then((res) => {
            console.log(res.data.data);
            alert('Document generated');
            props.setSuccess(true);
            props.setMessage('Report generated successfully');
            props.setStatusCode(201);
            setTimeout(() => {
                if (props.setSuccess) {
                    props.setSuccess(false);
                }
            }, 2000);
        })
        .catch((error) => {
            console.log(error.message);
            props.setError(true);
            props.setStatusCode(400);
            props.setMessage('Generate Report Bad Request. Please try again later.');
            setTimeout(() => {
                if (props.setError) {
                    props.setError(false);
                }
            }, 2000);
        });
    } catch (error: any) {
        console.log(error.message);
        props.setError(true);
        props.setMessage('Generate Report Internal Server Error. Please try again later.');
        props.setStatusCode(500);
        setTimeout(() => {
            if (props.setError) {
                props.setError(false);
            }
        }, 2000);
    }
};

export default generateSelectedPilotsPdf;
