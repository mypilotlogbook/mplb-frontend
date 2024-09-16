import axios from "axios";
import { baseURL } from "../baseURL";
import { GetMonthlyAircraftsAnalyticsProps } from "../../typescript/types/type";

const getMonthlyAircraftsAnalytics = (props: GetMonthlyAircraftsAnalyticsProps) => {
    try {
        axios.get(`${baseURL}/analytics/getMonthlyAicraftData/${props.userId}`)
        .then((res) => {
            console.log(res.data.data);
            props.setMonthlyAircraftAnalytics(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    } catch (error: any) {
        console.log(error);
    }
};

export default getMonthlyAircraftsAnalytics;
