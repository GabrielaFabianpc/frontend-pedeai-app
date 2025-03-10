import styled from "styled-components";
import { colors } from "../../_variables";
import { Button, Logo } from "../../components";
import { TabBarAdmin } from "../../components/Admin/TabBarAdmin";
import { CardProductAdmin } from "../../components/Admin/CardProductAdmin";
import { IconHome, IconNotifications, IconOrders, IconProducts, IconProfile } from "../../components/shared/SvgComponents";
import { useState } from "react";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 16px;
  padding: 0 8px;
`;

const Products = styled.div``;

const Header = styled.div`
`

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

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 136px;
  margin-bottom: 16px;
  justify-self: right;
`;

const List = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
padding-bottom: 90px;
`

export const ProductsRestaurant = () => {
  const [pageActive, setPageActive] = useState('home')
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Header>
        {<Logo />}
        <Container>
          <Button radius="4px" padding="16px">Novo Produto</Button>
        </Container>
      </Header>
      <Products>
        <InfoProduct>
          <Title>Produtos</Title>
        </InfoProduct>
      </Products>
      <List>
        <li>
          <CardProductAdmin
            productImage="/src/assets/img/product.png"
            productName="Esfiha de Carne"
            productDescription="Esfiha de carne preparada com ingredientes frescos e massa artesanal."
            productPrice="R$ 1,59"
          />
        </li>
         <li>
          <CardProductAdmin
            productImage="/src/assets/img/product.png"
            productName="Esfiha de Carne"
            productDescription="Esfiha de carne preparada com ingredientes frescos e massa artesanal."
            productPrice="R$ 1,59"
          />
        </li>
         <li>
          <CardProductAdmin
            productImage="/src/assets/img/product.png"
            productName="Esfiha de Carne"
            productDescription="Esfiha de carne preparada com ingredientes frescos e massa artesanal."
            productPrice="R$ 1,59"
          />
        </li>
         <li>
          <CardProductAdmin
            productImage="/src/assets/img/product.png"
            productName="Esfiha de Carne"
            productDescription="Esfiha de carne preparada com ingredientes frescos e massa artesanal."
            productPrice="R$ 1,59"
          />
        </li>
         <li>
          <CardProductAdmin
            productImage="/src/assets/img/product.png"
            productName="Esfiha de Carne"
            productDescription="Esfiha de carne preparada com ingredientes frescos e massa artesanal."
            productPrice="R$ 1,59"
          />
        </li>
         <li>
          <CardProductAdmin
            productImage="/src/assets/img/product.png"
            productName="Esfiha de Carne"
            productDescription="Esfiha de carne preparada com ingredientes frescos e massa artesanal."
            productPrice="R$ 1,59"
          />
        </li>
         <li>
          <CardProductAdmin
            productImage="/src/assets/img/product.png"
            productName="Esfiha de Carne"
            productDescription="Esfiha de carne preparada com ingredientes frescos e massa artesanal."
            productPrice="R$ 1,59"
          />
        </li>
         <li>
          <CardProductAdmin
            productImage="/src/assets/img/product.png"
            productName="Esfiha de Carne"
            productDescription="Esfiha de carne preparada com ingredientes frescos e massa artesanal."
            productPrice="R$ 1,59"
          />
        </li>
         <li>
          <CardProductAdmin
            productImage="/src/assets/img/product.png"
            productName="Esfiha de Carne"
            productDescription="Esfiha de carne preparada com ingredientes frescos e massa artesanal."
            productPrice="R$ 1,59"
          />
        </li>
         <li>
          <CardProductAdmin
            productImage="/src/assets/img/product.png"
            productName="Esfiha de Carne"
            productDescription="Esfiha de carne preparada com ingredientes frescos e massa artesanal."
            productPrice="R$ 1,59"
          />
        </li>
         <li>
          <CardProductAdmin
            productImage="/src/assets/img/product.png"
            productName="Esfiha de Carne"
            productDescription="Esfiha de carne preparada com ingredientes frescos e massa artesanal."
            productPrice="R$ 1,59"
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
