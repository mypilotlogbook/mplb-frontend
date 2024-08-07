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