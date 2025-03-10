import { ReactNode } from "react";

export interface IModal {
    children?: ReactNode,
    title: string,
    description: string,
    primary?: boolean,
    buttonText: string,
    buttonTextSecondary?: string
}
