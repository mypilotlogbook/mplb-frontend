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
    varient?: string,
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
    default_launch?: string,
    auto_load_hours?: string,
    userId?: string,
    __v?: number,
    createdAt?: string;
    updatedAt?: string;
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