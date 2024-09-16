import axios from "axios";
import { baseURL } from "../baseURL";
import { GetMonthlyPilotsAnalyticsProps } from "../../typescript/types/type";

const getMonthlyPilotsAnalytics = (props: GetMonthlyPilotsAnalyticsProps) => {
    try {
        axios.get(`${baseURL}/analytics/getMonthlyPilotsData/${props.userId}`)
        .then((res) => {
            console.log(res.data.data);
            props.setMonthlyPilotAnalytics(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    } catch (error: any) {
        console.log(error);
    }
};

export default getMonthlyPilotsAnalytics;
