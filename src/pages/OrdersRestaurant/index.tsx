import styled from "styled-components";
import { colors } from "../../_variables";
import { Logo } from "../../components";
import { TabBarAdmin } from "../../components/Admin/TabBarAdmin";
import IconSearch from "../../assets/icons/IconSearch.svg";
import { CardPedidoAdmin } from "../../components/Admin/CardPedidoAdmin";
import { IconHome, IconNotifications, IconOrders, IconProducts, IconProfile } from "../../components/shared/SvgComponents";
import { useState } from "react";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 16px;
  padding: 0 8px;
`;

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

const FieldContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;

  img {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;

const Field = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${colors.alabaster};
  border-radius: 8px;
  border: none;
  padding: 12px 16px;
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

const VerTodos = styled.span`
  width: 100%;
  font-size: 14px;
  color: ${colors.thunderbird70};
  text-align: end;
`;

const List = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
padding-bottom: 90px;
`

export const OrdersRestaurant = () => {
    const [pageActive, setPageActive] = useState('home')
    const navigate = useNavigate()
  return (
    <Wrapper>
      {<Logo />}
      <FieldContainer>
        <Field type="text" placeholder="Buscar" autoFocus />
        <img src={IconSearch} />
      </FieldContainer>
      <Products>
        <InfoProduct>
          <Title>Seus Pedidos</Title>
          <VerTodos>ver todos</VerTodos>
        </InfoProduct>
      </Products>
      <List>
        <li>
          <CardPedidoAdmin
            phoneNumber="(27) 9 9999-9999"
            quantity={2}
            itemName="Pizza de Mussarela"
            orderDate="01 Março 2025"
            status="Em andamento"
            price="R$ 134,80"
            productImage="/src/assets/img/product.png"
          />
        </li>
        <li>
          <CardPedidoAdmin
            phoneNumber="(27) 9 9999-9999"
            quantity={2}
            itemName="Pizza de Mussarela"
            orderDate="01 Março 2025"
            status="Em andamento"
            price="R$ 134,80"
            productImage="/src/assets/img/product.png"
          />
        </li>
        <li>
          <CardPedidoAdmin
            phoneNumber="(27) 9 9999-9999"
            quantity={2}
            itemName="Pizza de Mussarela"
            orderDate="01 Março 2025"
            status="Em andamento"
            price="R$ 134,80"
            productImage="/src/assets/img/product.png"
          />
        </li>
        <li>
          <CardPedidoAdmin
            phoneNumber="(27) 9 9999-9999"
            quantity={2}
            itemName="Pizza de Mussarela"
            orderDate="01 Março 2025"
            status="Em andamento"
            price="R$ 134,80"
            productImage="/src/assets/img/product.png"
          />
        </li>
        <li>
          <CardPedidoAdmin
            phoneNumber="(27) 9 9999-9999"
            quantity={2}
            itemName="Pizza de Mussarela"
            orderDate="01 Março 2025"
            status="Em andamento"
            price="R$ 134,80"
            productImage="/src/assets/img/product.png"
          />
        </li>
        <li>
          <CardPedidoAdmin
            phoneNumber="(27) 9 9999-9999"
            quantity={2}
            itemName="Pizza de Mussarela"
            orderDate="01 Março 2025"
            status="Em andamento"
            price="R$ 134,80"
            productImage="/src/assets/img/product.png"
          />
        </li>
        <li>
          <CardPedidoAdmin
            phoneNumber="(27) 9 9999-9999"
            quantity={2}
            itemName="Pizza de Mussarela"
            orderDate="01 Março 2025"
            status="Em andamento"
            price="R$ 134,80"
            productImage="/src/assets/img/product.png"
          />
        </li>
      </List>
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
  );
};
