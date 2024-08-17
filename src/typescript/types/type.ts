import { Dispatch, ReactNode, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"
import { AircraftProps, PilotProps, UpdateUser, User } from "../interfaces/interface"

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