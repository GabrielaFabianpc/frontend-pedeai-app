import { ReactNode } from "react"

export interface IButton {
    children: ReactNode,
    isFill?: boolean,
    hasIcon?: boolean,
    radius: string,
    padding: string,
    onClick: () => void
}