import { ReactNode } from "react"

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

export type RoundedIconProps = {
    image: string,
}

export type AuthButtonProps = {
    title: string,
    textColor?: string,
    backgroundColor?: string,
    borderColor?: string,
    onClick?: () => void
}