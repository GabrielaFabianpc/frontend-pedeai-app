import styled from "styled-components";
import { Button, Logo } from "../../components";
import { colors } from "../../_variables";
import { TabBarAdmin } from "../../components/Admin/TabBarAdmin";
import IconBack from "../../assets/icons/IconBack.svg"
import { IconHome, IconNotifications, IconOrders, IconProducts, IconProfile } from "../../components/shared/SvgComponents";
// import IconSucess from "../../assets/icons/IconSucess.svg"
// import IconError from "../../assets/icons/IconError.svg"



const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 16px;
  padding: 0 8px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
    margin-bottom: 16px;
`
const Title = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${colors.masala};
`

const Form = styled.form`
    width: 100%;
`
const Field = styled.input`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 18px;
    border: 1px solid ${colors.mountainMist};
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


export const AddProductRestaurant = () => {
    return (
        <Wrapper>
            {<Logo/>}
            <Header>
            <img src={IconBack}></img>
            <Title>Adicionar novo produto</Title>
            </Header>
        
            <Form>
                <Field type="text" placeholder="Nome do Produto*" required
            autoFocus/>
                    {/* <img src={IconSuccess} alt="" /> */}
                    {/* <img src={IconError} alt="" /> */}
                <Field type="number" placeholder="Valor*"/>
                <Field type="text" placeholder="Descrição"/>
                <Field type="text" placeholder="Url da Imagem"/>

                <Button isFill radius="50px" padding="12px">
                    Cadastrar Novo Produto
                </Button>
            </Form>
            <TabBarAdmin
              tabs={[
                { label: "Home", icon: <IconHome color="#333" /> },
                { label: "Pedidos", icon: <IconOrders color="#333" /> },
                { label: "Produtos", icon: <IconProducts color="#333" /> },
                { label: "Notificação", icon: <IconNotifications color="#333" /> },
                { label: "Perfil", icon: <IconProfile color="#333" /> },
              ]}
            />
            
        </Wrapper>
    );
}


