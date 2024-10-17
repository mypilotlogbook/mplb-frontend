import axios from "axios";
import { baseURL } from "../baseURL";
import { GetSingleFlightProps } from "../../typescript/types/type";

const getSingleFlight = (props: GetSingleFlightProps) => {
    try {
        axios.get(`${baseURL}/flight/${props.flightId}`)
        .then((res) => {
            console.log(res.data.data);
            if (props.setFlight) {
                props.setFlight(res.data.data);
            }
            if (props.setFormData) {
                props.setFormData({
                    date: res.data.data.date || "",
                    aircraft: res.data.data.aircraft || "",
                    flight_nr: res.data.data.flight_nr || "",
                    arrival: res.data.data.arrival || "",
                    departure: res.data.data.departure || "",
                    std: res.data.data.std || "",
                    out_time: res.data.data.out_time || "",
                    takeoff: res.data.data.takeoff || "",
                    landing: res.data.data.landing || "",
                    in_time: res.data.data.in_time || "",
                    sta: res.data.data.sta || "",
                    total_time: res.data.data.total_time || "",
                    air: res.data.data.air || "",
                    crew_list: res.data.data.crew_list || "",
                    flight_log: res.data.data.flight_log || "",
                    training: res.data.data.training || "",
                    remarks: res.data.data.remarks || "",
                    delay_code_one: res.data.data.delay_code_one || "",
                    delay_code_two: res.data.data.delay_code_two || "",
                    delay_code_three: res.data.data.delay_code_three || "",
                    pic: res.data.data.pic || "",
                    pic_us: res.data.data.pic_us || "",
                    sic: res.data.data.sic || "",
                    dual: res.data.data.dual || "",
                    instructor: res.data.data.instructor || "",
                    examinar: res.data.data.examinar || "",
                    relief: res.data.data.relief || "",
                    night: res.data.data.night || "",
                    ifr: res.data.data.ifr || "",
                    act_instr: res.data.data.act_instr || "",
                    sim_instr: res.data.data.sim_instr || "",
                    xc: res.data.data.xc || "",
                    task: res.data.data.task || "",
                    TO_day: res.data.data.TO_day || "",
                    TO_night: res.data.data.TO_night || "",
                    LDG_day: res.data.data.LDG_day || "",
                    LDG_night: res.data.data.LDG_night || "",
                    holding: res.data.data.holding || "",
                    lifts: res.data.data.lifts || "",
                    pax: res.data.data.pax || "",
                    fuel_total: res.data.data.fuel_total || "",
                    fuel_plan: res.data.data.fuel_plan || "",
                    fuel_used: res.data.data.fuel_used || "",
                    de_icing: res.data.data.de_icing || false,
                });
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
    } catch (error: any) {
        console.log(error.message);
    }
};

export default getSingleFlight;
