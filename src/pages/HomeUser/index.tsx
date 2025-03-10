import styled from 'styled-components'
import { Logo } from '../../components'
import IconNotification from '../../assets/icons/IconNotification.svg'
import IconSearch from "../../assets/icons/IconSearch.svg";
import IconStar from "../../assets/icons/IconStar.svg"
import IconLocation from "../../assets/icons/IconLocation.svg"
import { colors } from '../../_variables';
import { IconCircle } from '../../components/shared/SvgComponents/IconCircle';
import { CardProductUser } from '../../components/User/CardProductUser';
import { TabBarUser} from "../../components/User/TabBarUser";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useCartContext } from "../../hooks/useCartContext";
import { useApi } from '../../hooks/useApi';
import { IHomeRestaurant } from '../../interfaces/Restaurant';
import { IProduct } from '../../interfaces/Product';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 24px;
  padding: 0 8px;
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 0 8px;
`
const LogoContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const InfoAdress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

`
const Delivery = styled.span`
    font-size: 10px;
    color: ${colors.mineShaft};
`

const Div = styled.div`
    display: flex;
    align-items: center;
`

const Adress = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: ${colors.mineShaft};
`
const NameRestaurant = styled.span`
    font-size: 32px;
    color: ${colors.mineShaft};
    font-family: Caveat;
`
const InfoRestaurant = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Pontuation = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

const InfoStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

const Status = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${colors.mantis};
`
const Frete = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${colors.mineShaft};
`
const TimeDelivery = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${colors.mineShaft};
`
const Red = styled.span`
    font-size: 10px;
    color: ${colors.thunderbird70};
`
const InfoStar = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: ${colors.robBoy};
`

const FieldContainer = styled.div`
    width: 100%;
    position: relative;
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
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${colors.alabaster};
  transition: all 0.2s ease-in;
  border: none;

  &::placeholder {
    font-size: 14px;
    color: ${colors.mountainMist};
  }
`

const Products = styled.div`
    display: flex;
    background-color: ${colors.alabaster};
    border-radius: 23px;
    padding: 24px 16px;
`

const List = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
padding-bottom: 90px;
`


export const HomeUser = () => {

    const [pageActive, setPageActive] = useState("home");
    const navigate = useNavigate();
    const params = useParams();
    const { Calculate } = useCartContext()
    
  
    const { data: restaurante } = useApi<IHomeRestaurant>(`http://localhost:3333/public/restaurants/${params.restaurantId}`)
//   const { data: products } = useApi<IProduct>(`http://localhost:3333/restaurant/products/${params.restaurantId}`, {
//     headers: {
//       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN0YXVyYW50SWQiOjMsImlhdCI6MTc0MTU2Nzk2MSwiZXhwIjoxNzQxNTc1MTYxfQ.XfwBn54mQxjl9NRJEKs2kpbSv-nj6ABsqhvjijdJNp8'
//     }
//   })


    const username = restaurante?.username?.replace('_', ' ')
    const handleNavigate = (page: string) => {
      setPageActive(page);
      navigate(`/resto/${page === "home" ? "" : page}`);
    };


    return (
        <Wrapper>
            <Header>
                <LogoContainer>
                    <Logo />
                    <img src={IconNotification} />
                </LogoContainer>
                <InfoAdress>
                    <Div>
                        <img src={IconLocation} />
                        <Delivery>Entregar em </Delivery>
                    </Div>
                    <Adress>Av Principal, Vila Velha - ES</Adress>
                </InfoAdress>
                <NameRestaurant>{username}</NameRestaurant>
                <InfoRestaurant>
                    <Info>
                        <InfoStatus>
                            <IconCircle color={colors.mantis} />
                            <Status>Aberto</Status>
                        </InfoStatus>
                        <Frete>Frete Fixo: <Red>R$5,00</Red></Frete>
                        <TimeDelivery>Tempo de entrega <Red>40 - 60 minutos</Red> </TimeDelivery>
                    </Info>
                    <Pontuation>
                        <img src={IconStar} />
                        <InfoStar>4.9</InfoStar>
                    </Pontuation>
                </InfoRestaurant>
                <FieldContainer>
                    <Field type="text" placeholder="Buscar" autoFocus />
                    <img src={IconSearch} />
                </FieldContainer>
            </Header>

            <Products>
                <List>
                    <li>
                        <CardProductUser></CardProductUser>
                    </li>
                    <li>
                        <CardProductUser></CardProductUser>
                    </li>
                    <li>
                        <CardProductUser></CardProductUser>
                    </li>
                    <li>
                        <CardProductUser></CardProductUser>
                    </li>
                    <li>
                        <CardProductUser></CardProductUser>
                    </li>
                    <li>
                        <CardProductUser></CardProductUser>
                    </li>
                    <li>
                        <CardProductUser></CardProductUser>
                    </li>
                </List>
            </Products>
            <TabBarUser pageActive={pageActive} onNavigate={handleNavigate} itemCount={Calculate.totalItems()} />
        </Wrapper>
    )
}