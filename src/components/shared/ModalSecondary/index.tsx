import styled from "styled-components"
import { colors } from "../../../_variables"
import { Modal } from "../Modal"



const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
gap: 10px;
margin-bottom: 16px;
`
const Field = styled.input`
font-size: 10px;
font-weight: 300;
color: ${colors.boulder};
padding: 8px;
text-align: center;
border-radius: 4px;
border: 1px solid ${colors.boulder};
width: 100%;

&.error{
border: 1px solid ${colors.thunderbird};


&::placeholder {
    color: ${colors.thunderbird}
}
}


`

const FieldContainer = styled.div`
`

const Message = styled.p`
font-size: 9px;
color: ${colors.thunderbird};
font-weight: 300;
margin-top: 8px;
`


export const ModalSecondary = () => {

    return (
        <Modal title='Informações' description='Insira suas informações abaixo para prosseguir com seu pedido!' buttonText='Enviar Dados' buttonTextSecondary='Cancelar'>
            <Form>
                <FieldContainer>
                    <Field type='text' placeholder='Nome'></Field>
                    {/* <Message> Campo Obrigátorio! </Message> */}
                </FieldContainer>
                <FieldContainer>
                    <Field type='string' placeholder='Celular'></Field>
                    {/* <Message> Campo Obrigátorio! </Message> */}
                </FieldContainer>

            </Form>
        </Modal>
    )
}