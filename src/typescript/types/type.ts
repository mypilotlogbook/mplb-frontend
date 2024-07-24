import { Dispatch, ReactNode, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"

export type AuthHeaderProps = {
    title: string
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
    onChange: (value: string) => void
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