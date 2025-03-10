import styled from "styled-components";
import { IconEmail } from '../../components/shared/SvgComponents/IconEmail';
import { IconPassword } from "../../components/shared/SvgComponents/IconPassword";
import { colors } from "../../_variables";
import { Button, Logo } from "../../components";


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
`;

const Title = styled.p`
  font-size: 24px;
  color: ${colors.masala};
`;

const Form = styled.form`
  padding: 0 24px 24px;
  width: 100%;
`;
const FieldContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
`;
const Field = styled.input`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px 16px 56px;
  border: 1px solid ${colors.mountainMist};
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: transparent;
  transition: all 0.2s ease-in;


  &::placeholder {
    font-size: 14px;
    color: ${colors.mountainMist};
  }

  &:focus-visible {
    outline: none;
    border: 1px solid ${colors.thunderbird};
  }
`;

const ForgetPassword = styled.a`
    display: block;
    font-size: 12px;
    color: ${colors.thunderbird70};
    text-decoration: underline;
    margin-bottom: 24px;

    &:hover {
        opacity: .6;
    }
`

const NotClient = styled.p`
    width: 100%;
    font-size: 14px;
    color: ${colors.masala};
    text-align: center;
    margin-top: 24px;
    
    a {
        color: ${colors.thunderbird70};
        text-decoration: underline;
        margin-left: 4px;

        &:hover {
            opacity: .6;
        }
    }
`



export const LoginRestaurant = () => {
  return (
    <Wrapper>
      {<Logo/>}
      <Title>Acessar Área Logada</Title>

      <Form>
        <FieldContainer>
          <Field type="email" placeholder="Email" autoFocus/>
          <IconEmail color={colors.mountainMist} />
        </FieldContainer>

        <FieldContainer>
          <Field type="password" placeholder="Senha" />
          <IconPassword color={colors.mountainMist} />
        </FieldContainer>

        <ForgetPassword>
            Esqueci minha senha
        </ForgetPassword>

        <Button isFill radius="50px" padding="12px">
          Entrar
        </Button>

         <NotClient>
            Não é cliente?

            <a href='/restaurants'>
                Cadastre-se
            </a>
         </NotClient>

      </Form>
    </Wrapper>
  );
};