import styled from "styled-components"
import IconBack from '../../assets/icons/IconBack.svg'
import { colors } from "../../_variables";
import { CardProductCarUser } from "../../components/User/CardProductCarUser";
import { Button } from "../../components";
import { TabBarUser} from "../../components/User/TabBarUser";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useCartContext } from "../../hooks/useCartContext";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 390px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    gap: 24px;
    padding: 0 8px;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
    margin-bottom: 16px;
    padding: 24px 0;
    width: 100%;
`
const Title = styled.p`
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.masala};
`

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
    border-bottom: 1px solid ${colors.platinum};
    padding-bottom: 24px;
`
export const InfoProduct = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: ${colors.mineShaft};
`
export const User = styled.div`
    display: flex;
    justify-content: space-between;
`
export const InfoUser = styled.span`
    font-size: 14px;
    color: ${colors.mineShaft};
`
const ResultUser = styled.span`
    font-size: 14px;
    color: ${colors.boulder};
`

const PriceProducts = styled.div`
    height: 100%;
    width: 100%;
    align-content: flex-end;
    padding-bottom: 100px;
`

const Border = styled.div`
    border-top: 1px solid ${colors.platinum};
    padding-top: 15px;
`

const Summary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
    margin-top: 10px;
`

const Price = styled.div`
  display: flex;
  justify-content: space-between;
`
const ValuePrice = styled.span`
  font-size: 14px;
  color: ${colors.boulder};
`

const ValueTotalPrice = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: ${colors.mineShaft};
`

const PriceTotal = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: ${colors.mineShaft};
`

export const Cart = () => {


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
                <img src={IconBack}></img>
                <Title>Carrinho</Title>
            </Header>
            <Information>
                <InfoProduct>Informações do Pedido</InfoProduct>
                <User>
                    <InfoUser>Comprador</InfoUser>
                    <ResultUser>Maria da Silva</ResultUser>
                </User>
                <User>
                    <InfoUser>Telefone</InfoUser>
                    <ResultUser>(11) 9 0000-0000</ResultUser>
                </User>
                <User>
                    <InfoUser>Endereço</InfoUser>
                    <ResultUser>Av. Principal, Vila Velha - Vitória</ResultUser>
                </User>
            </Information>
            <CardProductCarUser></CardProductCarUser>

            <PriceProducts>
                <InfoProduct>Resumo</InfoProduct>
                <Summary>
                    <Price>
                        <ValuePrice>Sub Total</ValuePrice>
                        <ValuePrice>R$ 134,80</ValuePrice>
                    </Price>
                    <Price>
                        <ValuePrice>Taxa de Serviço</ValuePrice>
                        <ValuePrice>R$ 13,48</ValuePrice>
                    </Price>
                    <Price>
                        <ValuePrice>Taxa de Entrega</ValuePrice>
                        <ValuePrice>R$ 5,00</ValuePrice>
                    </Price>
                    <Price>
                        <ValueTotalPrice>Valor Total</ValueTotalPrice>
                        <PriceTotal>R$ 153,28</PriceTotal>
                    </Price>
                </Summary>
                <Border>
                    <Button isFill padding="12px" radius="32px">
                        Escolher forma de pagamento</Button>
                </Border>
            </PriceProducts>
            <TabBarUser pageActive={pageActive} onNavigate={handleNavigate} itemCount={Calculate.totalItems()} />
        </Wrapper>
    )
}