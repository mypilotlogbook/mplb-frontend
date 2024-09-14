import { Dispatch, ReactNode, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"
import { AircraftProps, AirfieldProps, FlightProps, PilotProps, UpdateAircraft, UpdateFlightProps, UpdatePilot, UpdateUser, User } from "../interfaces/interface"

export type AuthHeaderProps = {
    title: string
}

export type BackButtonProps = {
    image: string
}

export type AuthSubHeaderProps = {
    message: string,
    color?: string,
    fontWeight?: number,
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit',
}

export type LableProps = {
    title: string
}

export type TextfieldProps = {
    type?: string,
    placeholder?: string,
    value?: string,
    onChange: (value: string) => void,
    isContact?: boolean,
    name?: string;
}

export type LogoImageProps = {
    src: string;
}

export type SectionProps = {
    marginTop?: string,
    marginBottom?: string,
    children?: ReactNode;
}

export type QuoteTextProps = {
    quote: string,
}

export type HeroFeatureProps = {
    page: string,
    message: string
}

export type RoundedIconProps = {
    image: string,
}

export type AlertProps = {
    type: 'warn'|'error'|'success',
    statusCode: number,
    message: string,
}

export type AuthButtonProps = {
    title: string,
    textColor?: string,
    backgroundColor?: string,
    borderColor?: string,
    onClick?: () => void
}

export type HandleUserRegisterProps = {
    email: string,
    password: string,
    resetCredentials: () => void
    setError: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
    navigate: NavigateFunction,
};

export type HandleUserLoginProps = {
    email: string,
    password: string,
    resetCredentials: () => void
    setError: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
    navigate: NavigateFunction,
    updateToken: (token: string) => void,
    updateId: (id: string) => void
};

export type HandleSendForgotPasswordEmailProps = {
    email: string,
    resetCredentials: () => void
    setError: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
};

export type HandleChangePasswordProps = {
    email: string,
    password: string,
    confirmPassword: string,
    resetCredentials: () => void
    setError: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
    navigate: NavigateFunction,
};

export type NavLinkProps = {
    id: number,
    iconName: string,
    name: string,
    route: string,
}

export type PageHeaderProps = {
    title: string,
    subTitle: string,
}

export type GetUserProps = {
    setName: Dispatch<SetStateAction<string>>,
    id: string | null
}

export type GetUserEmailProps = {
    setEmail: Dispatch<SetStateAction<string>>,
    id: string | null
}

export type GetSingleUserProps = {
    setUser: Dispatch<SetStateAction<User | undefined>>,
    setFormData?: Dispatch<SetStateAction<UpdateUser | undefined>>,
    id: string | null
}

export type DashboardTextfieldProps = {
    type: string;
    name: string;
    value: string;
    placeholder: string;
    isDescription?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type UpdateUserProps = {
    id: string,
    setUser: Dispatch<SetStateAction<User | undefined>>,
    setFormData?: Dispatch<SetStateAction<UpdateUser | undefined>>,
    formData?: UpdateUser | undefined
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
    getSingleUser?: (props: GetSingleUserProps) => void,
}

export type getAircraftsByUserIdProps = {
    userId: string | null,
    setAircrafts: Dispatch<SetStateAction<AircraftProps[]>>
}

export type getPilotsByUserIdProps = {
    userId: string | null,
    setPilots: Dispatch<SetStateAction<PilotProps[]>>
}

export type getPilotPropsById = {
    pilotId: string | undefined | null
    setPilot: Dispatch<SetStateAction<PilotProps | undefined>>,
    setFormData?: Dispatch<SetStateAction<UpdatePilot | undefined>>,
}

export type DeletePilotProps = {
    pilotId: string | null,
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
    navigate: NavigateFunction,
}

export type UpdatePilotProps = {
    pilotId: string | null,
    setError?: Dispatch<SetStateAction<boolean>>,
    setSuccess?: Dispatch<SetStateAction<boolean>>,
    setStatusCode?: Dispatch<SetStateAction<number>>,
    setMessage?: Dispatch<SetStateAction<string>>,
    navigate?: NavigateFunction,
    setFormData?: Dispatch<SetStateAction<UpdatePilot | undefined>>,
    formData: UpdateUser | undefined,
    getPilotById?: (props: getPilotPropsById) => void,
    setPilot?: Dispatch<SetStateAction<PilotProps | undefined>>,
}

export type OverviewCardProps = {
    image?: string,
    title?: string,
    description?: string,
    count?: number,
}

export type getAirFieldsProps = {
    setAirfields?: Dispatch<SetStateAction<AirfieldProps[]>>,
    setFilteredAirfields?: Dispatch<SetStateAction<AirfieldProps[]>>,
}

export type AddPilotProps = {
    userId: string | null,
    setError?: Dispatch<SetStateAction<boolean>>,
    setSuccess?: Dispatch<SetStateAction<boolean>>,
    setStatusCode?: Dispatch<SetStateAction<number>>,
    setMessage?: Dispatch<SetStateAction<string>>,
    resetCredentials?: () => void,
    pilot: PilotProps,
}

export type AddFlightProps = {
    setError?: Dispatch<SetStateAction<boolean>>,
    setSuccess?: Dispatch<SetStateAction<boolean>>,
    setStatusCode?: Dispatch<SetStateAction<number>>,
    setMessage?: Dispatch<SetStateAction<string>>,
    resetCredentials?: () => void,
    flightObj: UpdateFlightProps,
}

export type AddAircraftProps = {
    userId: string | null,
    setError?: Dispatch<SetStateAction<boolean>>,
    setSuccess?: Dispatch<SetStateAction<boolean>>,
    setStatusCode?: Dispatch<SetStateAction<number>>,
    setMessage?: Dispatch<SetStateAction<string>>,
    resetCredentials?: () => void,
    aircraft: AircraftProps,
}

export type CheckboxProp = {
    id: number,
    name: string,
    value: string,
}

export type DeleteAircraftProps = {
    aircraftId: string | null,
    setError?: Dispatch<SetStateAction<boolean>>,
    setSuccess?: Dispatch<SetStateAction<boolean>>,
    setStatusCode?: Dispatch<SetStateAction<number>>,
    setMessage?: Dispatch<SetStateAction<string>>,
    navigate?: NavigateFunction,
}

export type UpdateAircraftProps = {
    aircraftId: string | null,
    formData: UpdateAircraft | undefined,
    setError?: Dispatch<SetStateAction<boolean>>,
    setSuccess?: Dispatch<SetStateAction<boolean>>,
    setStatusCode?: Dispatch<SetStateAction<number>>,
    setMessage?: Dispatch<SetStateAction<string>>,
    setAircraft?: Dispatch<SetStateAction<AircraftProps | undefined>>,
    setFormData?: Dispatch<SetStateAction<UpdateAircraft | undefined>>,
    getAircraft: (props: GetAircraftProps) => void,
}

export type GetAircraftProps = {
    aircraftId: string | null,
    setAircraft?: Dispatch<SetStateAction<AircraftProps | undefined>>,
    setFormData?: Dispatch<SetStateAction<UpdateAircraft | undefined>>,
}

export type DeletePilotsByUserIdProps = {
    userId: string | null,
    setError?: Dispatch<SetStateAction<boolean>>,
    setSuccess?: Dispatch<SetStateAction<boolean>>,
    setStatusCode?: Dispatch<SetStateAction<number>>,
    setMessage?: Dispatch<SetStateAction<string>>,
}

export type DeleteAircraftsByUserIdProps = {
    userId: string | null,
    setError?: Dispatch<SetStateAction<boolean>>,
    setSuccess?: Dispatch<SetStateAction<boolean>>,
    setStatusCode?: Dispatch<SetStateAction<number>>,
    setMessage?: Dispatch<SetStateAction<string>>,
}

export type DeleteFlightsByUserIdProps = {
    userId: string | null,
    setError?: Dispatch<SetStateAction<boolean>>,
    setSuccess?: Dispatch<SetStateAction<boolean>>,
    setStatusCode?: Dispatch<SetStateAction<number>>,
    setMessage?: Dispatch<SetStateAction<string>>,
}

export type Credentials = {
    password: string,
    confirmPassword: string
}

export type NoDataProps = {
    message: string,
}

export type DeleteUserProps = {
    userId: string | null,
    navigate: NavigateFunction,
}

export type GetFlightsByUserIdProps = {
    userId: string | null,
    setFlights: Dispatch<SetStateAction<FlightProps[]>>,
}

export type GetSingleFlightProps = {
    flightId: string | null,
    setFlight?: Dispatch<SetStateAction<FlightProps | undefined>>,
    setFormData?: Dispatch<SetStateAction<UpdateFlightProps | undefined>>,
}

export type QuickChangePasswordProps = {
    userId: string | null,
    email: string,       
    credentaials: Credentials,
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
    resetCredentials: () => void,
}

export type GenerateAllAirfieldsReportProps = {
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
}

export type GenerateSelectedAirfieldsReportProps = {
    country: string,
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
}

export type GenerateAllPilotsReportProps = {
    userId: string | null,
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
}

export type GenerateAllAircraftsReportProps = {
    userId: string | null,
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
}

export type GenerateAllFlightsReportProps = {
    userId: string | null,
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
}

export type GenerateSelectedPilotsReportProps = {
    pilotsList: PilotProps[],
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
}

export type GenerateSelectedAircraftsReportProps = {
    aircraftsList: AircraftProps[],
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
}

export type GenerateSelectedFlightsReportProps = {
    flightsList: FlightProps[],
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
}

export type GetMonthlyFlightAnalyticsProps = {
    userId: string | null,
    setMonthlyAnalytics: Dispatch<SetStateAction<any>>,
}