import axios from "axios";
import { baseURL } from "../baseURL";
import { GetAircraftProps } from "../../typescript/types/type";

const getAircraft = async (props: GetAircraftProps) => {
    try {
        await axios.get(`${baseURL}/aircraft/${props.aircraftId}`)
            .then( (res) => {
                console.log(res.data.data);
                if(props.setAircraft) {
                    props.setAircraft(res.data.data);
                }
                if (props.setFormData) {
                    props.setFormData({
                        device: res.data.data.device || '',
                        type: res.data.data.type || '',
                        company: res.data.data.company || '',
                        registration_no: res.data.data.registration_no || '',
                        image: res.data.data.image || '',
                        fin: res.data.data.fin || '',
                        model: res.data.data.model || '',
                        variant: res.data.data.variant || '',
                        manufacturer: res.data.data.manufacturer || '',
                        type_rating: res.data.data.type_rating || '',
                        passenger: res.data.data.passenger || '',
                        aircraft_class: res.data.data.aircraft_class || '',
                        sub_class: res.data.data.sub_class || '',
                        category: res.data.data.category || '',
                        power: res.data.data.power || '',
                        auto_load_hours: res.data.data.auto_load_hours || '',
                        default_approach: res.data.data.default_approach || '',
                        default_launch: res.data.data.default_launch || '',
                        default_operation: res.data.data.default_operation || '',
                        aerobatic: res.data.data.aerobatic || false,
                        high_performance: res.data.data.high_performance || false,
                        more_than_weight: res.data.data.more_than_weight || false,
                        complex: res.data.data.complex || false,
                        tm_glider: res.data.data.tm_glider || false,
                        tailwheel: res.data.data.tailwheel || false,
                        efis: res.data.data.efis || false,
                        cross_country: res.data.data.cross_country || false,
                        relief_pilot: res.data.data.relief_pilot || false,
                        ifr: res.data.data.ifr || false,
                        actual_instrument: res.data.data.actual_instrument || false,
                        sim_instrument: res.data.data.sim_instrument || false,
                    });
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }catch (error: any){
        console.log(error.message);
    }
}

export default getAircraft;