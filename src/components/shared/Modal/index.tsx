import { useEffect } from "react"
import styled from "styled-components"
import { Button } from "../Button"
import { colors } from "../../../_variables"
import { IModal } from "../../../interfaces/Modal"



const Dialog = styled.dialog`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${colors.white};
    border-radius: 16px;
    padding: 16px;
    max-width: 370px;
    width: max-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::backdrop {
        background: ${colors.black50};
        backdrop-filter: blur(3px);
    }
`

const Title = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: ${colors.masala};
    margin-bottom: 12px;
`

const Description = styled.p`
    font-weight: 300;
    font-size: 12px;
    text-align: center;
    color: ${colors.masala};
    margin-bottom: 24px;
`

const Actions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`


export const Modal = ({ children, title, description, buttonText, buttonTextSecondary }: IModal) => {

    const dialog: HTMLDialogElement | null = document.querySelector('#dialog-primary');

    useEffect(() => {
        dialog && dialog.showModal();
    }, [])

    return (
        <Dialog id="dialog-primary">
            <Title> {title} </Title>
            <Description> {description} </Description>

            {children && children}

            <Actions>
                <Button isFill radius='50px' padding="12px"> {buttonText} </Button>
                {
                    buttonTextSecondary != undefined && <Button radius="50px" padding="12px"> {buttonTextSecondary} </Button>
                }
            </Actions>


        </Dialog>
    )
}