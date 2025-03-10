import styled from "styled-components";
import { Button, Logo } from "../../components";
import { colors } from "../../_variables";


const Wrapper = styled.div`
    width: 100%;
    max-width: 390px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    gap: 24px;
    padding: 0 8px;
`
const Title = styled.p`
    font-size: 24px;
    color: ${colors.masala};
`

const Form = styled.form`
    padding: 0 24px 24px;
    width: 100%;
`
const Field = styled.input`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 18px;
    border: 1px solid ${colors.masala};
    border-radius: 8px;
    margin-bottom: 16px;
    background-color: transparent;
    

    &:nth-child(5) {
        margin-bottom: 24px;
    }

    &::placeholder {
        font-size: 14px;
        color: ${colors.mountainMist};
    }
    
`
const TaxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 18px;
    cursor: pointer;
`

// const HiddenCheckbox = styled.input.attrs({type: "checkbox"})`
//     position: absolute;
//     opacity: 0;
//     width: 0;
//     height: 0;
// `

const CheckboxSpan = styled.span`
    font-size: 12px;
    color: ${colors.masala};
`

export const SignUpRestaurant = () => {
    return (
        <Wrapper>
            {<Logo/>}
            <Title>Cadastrar</Title>

            <Form>
                <Field type="text" placeholder="Username"/>
                <Field type="email" placeholder="Email"/>
                <Field type="password" placeholder="Senha"/>
                <Field type="text" placeholder="Telefone"/>
                <Field type="text" placeholder="Endereço"/>

                <TaxContainer>
                        <input type="checkbox"/>
                        <CheckboxSpan>Possui taxa de serviço</CheckboxSpan>
                </TaxContainer>
                <Button isFill radius="50px" padding="12px">
                    Buscar
                </Button>

            </Form>

        </Wrapper>
    );
}


