export interface AboutInforProps {
    title: string;
    message: string;
}

export interface AirfieldProps {
    _id: string;
    airfield_code?: string;
    elevation?: string;
    airport_name: string;
    country: string;
    airfield_category: string;
    icao: string;
    iata: string;
    timezone?: TimeZone;
    createdAt?: string;
    updatedAt?: string;
    longitude?: string;
    lattitude?: string;
    nearByCity?: string;
}

export interface TimeZone {
    _id: string,
    timezone: string
    createdAt: string,
    updatedAt: string,
    __v: number
}

export type getAirFieldProps = {
    airfieldId: string | undefined,
    setAirfield: (data: any) => void
}

export interface User {
    _id: string,
    image: string,
    email: string,
    password?: string,
    __v: number,
    age: string,
    company: string,
    country: string,
    description: string,
    fname: string,
    lname: string,
    position: string,
}

export interface UpdateUser {
    image?: string,
    email?: string,
    age?: string,
    company?: string,
    country?: string,
    description?: string,
    fname?: string,
    lname?: string,
    position?: string,
}

export interface AircraftProps {
    _id?: string,
    type?: string,
    image?: string,
    company?: string,
    fin?: string,
    registration_no?: string,
    model?: string,
    variant?: string,
    manufacturer?: string,
    type_rating?: string,
    passenger?: string,
    aircraft_class?: string,
    sub_class?: string,
    category?: string,
    power?: string,
    device?: string,
    aerobatic?: boolean,
    complex?: boolean,
    tm_glider?: boolean,
    tailwheel?: boolean,
    high_performance?: boolean,
    efis?: boolean,
    more_than_weight?: boolean,
    cross_country?: boolean,
    relief_pilot?: boolean,
    ifr?: boolean,
    actual_instrument?: boolean,
    sim_instrument?: boolean,
    default_operation?: string,
    default_approach?: string,
    default_launch?: string,
    auto_load_hours?: string,
    userId?: string,
    __v?: number,
    createdAt?: string;
    updatedAt?: string;
}

export interface UpdateAircraft {
    type?: string,
    image?: string,
    company?: string,
    fin?: string,
    registration_no?: string,
    model?: string,
    variant?: string,
    manufacturer?: string,
    type_rating?: string,
    passenger?: string,
    aircraft_class?: string,
    sub_class?: string,
    category?: string,
    power?: string,
    device?: string,
    aerobatic?: boolean,
    complex?: boolean,
    tm_glider?: boolean,
    tailwheel?: boolean,
    high_performance?: boolean,
    efis?: boolean,
    more_than_weight?: boolean,
    cross_country?: boolean,
    relief_pilot?: boolean,
    ifr?: boolean,
    actual_instrument?: boolean,
    sim_instrument?: boolean,
    default_operation?: string,
    default_approach?: string,
    default_launch?: string,
    auto_load_hours?: string,
}

export interface PilotProps {
    _id?: string,
    image?: string,
    fname?: string,
    lname?: string,
    age?: string,
    email?: string,
    company?: string,
    position?: string,
    employee_id?: string,
    mobile?: string,
    address?: string,
    userId?: string,
    __v?: number,
}

export interface UpdatePilot {
    image?: string,
    fname?: string,
    lname?: string,
    age?: string,
    email?: string,
    company?: string,
    position?: string,
    employee_id?: string,
    mobile?: string,
    address?: string,
}

export interface Approach{
    id?: number,
    category?: string;
    description?: string;
}

export interface Operation{
    id?: number,
    category?: string;
    description?: string;
}

export interface DelayCode{
    id?: number,
    category?: string;
    description?: string;
}

export interface FlightProps{
    _id?: string;
    
    // Flight time and location
    date: string;
    aircraft: AircraftProps;
    flight_nr?: string;
    departure: AirfieldProps;
    arrival: AirfieldProps;
    std?: string;
    out_time?: string;
    takeoff?: string;
    landing?: string;
    in_time?: string;
    sta?: string;
    total_time?: string;
    air?: string;

    // Flight crew details
    pilotOne?: PilotProps;
    pilotTwo?: PilotProps;
    pilotThree?: PilotProps;
    pilotFour?: PilotProps;
    crew_list?: string;
    flight_log?: string;
    remarks?: string;
    training?: string;
    delay_code_one?: string;
    delay_code_two?: string;
    delay_code_three?: string;

    sign?: string;
    pic?: string;
    pic_us?: string;
    sic?: string;
    dual?: string;
    instructor?: string;
    examinar?: string;
    relief?: string;
    task?: string;
    TO_day?: string;
    TO_night?: string;
    LDG_day?: string;
    LDG_night?: string;
    lifts?: string;
    holding?: string;
    night?: string;
    ifr?: string;
    act_instr?: string;
    sim_instr?: string;
    xc?: string;
    pax?: string;
    de_icing?: boolean;
    fuel_total?: string;
    fuel_plan?: string;
    fuel_used?: string;
    userId: string;

    approach?: Approach[];
    operation?: Operation[];
}

export interface UpdateFlightProps{
    // Flight time and location
    date?: string;
    aircraft?: { _id: string } | string;
    flight_nr?: string;
    departure: { _id: string } | string;
    arrival: { _id: string } | string;
    std?: string;
    out_time?: string;
    takeoff?: string;
    landing?: string;
    in_time?: string;
    sta?: string;
    total_time?: string;
    air?: string;
    // Flight crew details
    pilotOne?: { _id: string } | string;
    pilotTwo?: { _id: string } | string;
    pilotThree?: { _id: string } | string;
    pilotFour?: { _id: string } | string;
    crew_list?: string;
    flight_log?: string;
    remarks?: string;
    training?: string;
    delay_code_one?: string;
    delay_code_two?: string;
    delay_code_three?: string;

    sign?: string;
    pic?: string;
    pic_us?: string;
    sic?: string;
    dual?: string;
    instructor?: string;
    examinar?: string;
    relief?: string;
    task?: string;
    TO_day?: string;
    TO_night?: string;
    LDG_day?: string;
    LDG_night?: string;
    lifts?: string;
    holding?: string;
    night?: string;
    ifr?: string;
    act_instr?: string;
    sim_instr?: string;
    xc?: string;
    pax?: string;
    de_icing?: boolean;
    fuel_total?: string;
    fuel_plan?: string;
    fuel_used?: string;

    approach?: string;
    operation?: string;
}

export interface AddFlightForm{
    // Flight time and location
    date: string;
    aircraft?: string;
    flight_nr?: string;
    departure: string;
    arrival: string;
    std?: string;
    out_time?: string;
    takeoff?: string;
    landing?: string;
    in_time?: string;
    sta?: string;
    total_time?: string;
    air?: string;
    // Flight crew details
    pilotOne?: string;
    pilotTwo?: string;
    pilotThree?: string;
    pilotFour?: string;
    crew_list?: string;
    flight_log?: string;
    remarks?: string;
    training?: string;
    delay_code_one?: string;
    delay_code_two?: string;
    delay_code_three?: string;

    sign?: string;
    pic?: string;
    pic_us?: string;
    sic?: string;
    dual?: string;
    instructor?: string;
    examinar?: string;
    relief?: string;
    task?: string;
    TO_day?: string;
    TO_night?: string;
    LDG_day?: string;
    LDG_night?: string;
    lifts?: string;
    holding?: string;
    night?: string;
    ifr?: string;
    act_instr?: string;
    sim_instr?: string;
    xc?: string;
    pax?: string;
    de_icing?: boolean;
    fuel_total?: string;
    fuel_plan?: string;
    fuel_used?: string;

    approach?: string;
    operation?: string;
}