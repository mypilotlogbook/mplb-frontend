import axios from "axios";
import { baseURL } from "../baseURL";
import { GetMonthlyFlightAnalyticsProps } from "../../typescript/types/type";

const getMonthlyFlightAnalytics = (props: GetMonthlyFlightAnalyticsProps) => {
    try {
        axios.get(`${baseURL}/analytics/getMonthlyFlightData/${props.userId}`)
        .then((res) => {
            console.log(res.data.data);
            props.setMonthlyAnalytics(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    } catch (error: any) {
        console.log(error);
    }
};

export default getMonthlyFlightAnalytics;
