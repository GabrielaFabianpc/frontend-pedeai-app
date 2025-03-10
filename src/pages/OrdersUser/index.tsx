import styled from "styled-components";
import { colors } from "../../_variables";
import { Logo } from "../../components";
import { CardPedidoUser } from "../../components/User/CardPedidoUser";
import IconNotification from "../../assets/icons/IconNotification.svg"
import { TabBarUser} from "../../components/User/TabBarUser";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useCartContext } from "../../hooks/useCartContext";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 16px;
  padding: 0 8px;
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Products = styled.div``;

const InfoProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.span`
  flex-basis: 100%;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.masala};
`;

const List = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
padding-bottom: 90px;
`

export const OrdersUser = () => {

  const [pageActive, setPageActive] = useState("home");
    const navigate = useNavigate();
    const { Calculate } = useCartContext()
  
    const handleNavigate = (page: string) => {
      setPageActive(page);
      navigate(`/resto/${page === "home" ? "" : page}`);
    };
    
  return (
    <Wrapper>
        <Header>
        {<Logo />}
        <img src={IconNotification}/>
      </Header>
      <Products>
        <InfoProduct>
          <Title>Seus Pedidos</Title>
        </InfoProduct>
      </Products>
      <List>
        <li>
        <CardPedidoUser></CardPedidoUser>
        </li>
        <li>
        <CardPedidoUser></CardPedidoUser>
        </li>
        <li>
        <CardPedidoUser></CardPedidoUser>
        </li>
        <li>
        <CardPedidoUser></CardPedidoUser>
        </li>
        <li>
        <CardPedidoUser></CardPedidoUser>
        </li>
        <li>
        <CardPedidoUser></CardPedidoUser>
        </li>
        <li>
        <CardPedidoUser></CardPedidoUser>
        </li>
      </List>
      <TabBarUser pageActive={pageActive} onNavigate={handleNavigate} itemCount={Calculate.totalItems()} />
    </Wrapper>
  );
};
