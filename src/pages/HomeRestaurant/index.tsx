import styled from "styled-components"
import { colors } from "../../_variables";
import { Logo } from "../../components";
import { Button } from "../../components/shared/Button";
import { TabBarAdmin } from "../../components/Admin/TabBarAdmin";
import { IconHome, IconNotifications, IconOrders, IconProducts, IconProfile } from "../../components/shared/SvgComponents";
import { useApi } from "../../hooks/useApi";
import { IHomeRestaurant } from '../../interfaces/Restaurant/index';
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 24px;
  padding: 0 8px;
`;

const Information = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
border-bottom: 1px solid ${colors.mountainMist};
padding-bottom: 24px;
`
const Restaurant = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: ${colors.masala};
`
const EmailRestaurant = styled.span`
    font-size: 16px;
    color: ${colors.masala};
`
const NumberRestaurant = styled.span`
    font-size: 16px;
    color: ${colors.masala};
`
const Products = styled.div``

const InfoProduct = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 16px;
`
const Title = styled.span`
flex-basis: 100%;
font-size: 18px;
font-weight: 600;
color: ${colors.masala};
`

const Description = styled.span`
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
color: ${colors.mountainMist};
margin-bottom: 24px;
`


export const HomeRestaurant = () => {
    const { data: restaurants } = useApi<IHomeRestaurant[]>("http://localhost:3333/public/restaurants");

    const params = useParams();

    const [pageActive, setPageActive] = useState('home')
    const navigate = useNavigate()

    return (
        <Wrapper>
            {<Logo />}
            <Information>
                <Restaurant>{restaurants[0]?.username}</Restaurant>
                <EmailRestaurant>{restaurants[0]?.email}</EmailRestaurant>
                <NumberRestaurant>{restaurants[0]?.phone}</NumberRestaurant>
            </Information>
            <Products>
                <InfoProduct>
                    <Title>Produtos</Title>
                    <Button radius="4px" padding="8px">Adicionar Novo Produto</Button>
                </InfoProduct>
                <Description>Você não possui nenhum produto</Description>
                <InfoProduct>
                    <Title>Pedidos</Title>
                </InfoProduct>
                <Description>Você não possui nenhum pedido</Description>
            </Products>

            <TabBarAdmin
                items={[
                  { 
                    active: pageActive === 'home' && true,
                    label: "Home", 
                    icon: <IconHome color={pageActive === 'home' ? '#D71A1A' : '#333333' }/>,
                    onclick:() => { setPageActive('home'), navigate(`/admin`)}
                  },
                  { 
                    active: pageActive === 'pedidos' && true,
                    label: "Pedidos", 
                    icon: <IconOrders color={pageActive === 'pedidos' ? '#D71A1A' : '#333333' }/>,
                    onclick:() =>{ setPageActive('pedidos'), navigate("/admin/orders")}
                  },
                  { 
                    active: pageActive === 'produtos' && true,
                    label: "Produtos", 
                    icon: <IconProducts color={pageActive === 'produtos' ? '#D71A1A' : '#333333' }/>,
                    onclick:() =>{ setPageActive('produtos'), navigate("/admin/products")}
                  },
                  { 
                    active: pageActive === 'notificacao' && true,
                    label: "Notificação",
                    icon: <IconNotifications color={pageActive === 'notificacao' ? '#D71A1A' : '#333333' }/>,
                    onclick:() =>setPageActive('notificacao')
                  },
                  { 
                    active: pageActive === 'perfil' && true,
                    label: "Perfil", 
                    icon: <IconProfile color={pageActive === 'perfil' ? '#D71A1A' : '#333333' }/>, 
                    onclick:() =>setPageActive('perfil') 
                  },
                ]}
              />
        </Wrapper>
    )
}