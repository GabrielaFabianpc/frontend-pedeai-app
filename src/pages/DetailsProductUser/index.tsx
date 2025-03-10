import styled from "styled-components"
import { colors } from '../../_variables';
import IconBack from "../../assets/icons/IconBack.svg"
import { Quantity } from "../../components/User/Quantity"
import { Button } from "../../components";



const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 16px;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    padding: 24px 8px;
`
const Title = styled.p`
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.masala};
`

const InfoProduct = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
`
const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const YouProduct = styled.span`
  font-size: 12px;
  color: ${colors.masala};
`
const NameProduct = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.thunderbird};
`
const QuantityProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const InfoQuantity = styled.span`
    font-size: 12px;
    color: ${colors.masala};
`

const Figure = styled.figure`
  width: 100%;
  height: 226px;
  flex-shrink: 0;
  overflow: hidden;


img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`


const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 8px;
`

const TitleDescription = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.masala};
`
const Description = styled.span`
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: ${colors.boulder};
`

const PriceProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 16px 16px;
`
const Price = styled.div`
  display: flex;
  justify-content: space-between;
`
const ValuePrice = styled.span`
  font-size: 14px;
  color: ${colors.mineShaft};
`

const Value = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.mineShaft};
`
const Div = styled.div` 
  display: flex;
  flex-direction: column;
  border-radius: 44px 44px 0 0;
  width: 100%;
  gap: 12px;
  background-color: ${colors.alabaster};
`



export const DetailsProductUser = () => {
  return (
    <Wrapper>
      <Header>
        <img src={IconBack}></img>
        <Title>Detalhes</Title>
      </Header>

      <InfoProduct>
        <Product>
          <YouProduct>Seu pedido</YouProduct>
          <NameProduct>Pizza de Mussarella</NameProduct>
        </Product>
        <QuantityProduct>
          <InfoQuantity>Quantidade</InfoQuantity>
          <Quantity iconColor={colors.thunderbird}>2</Quantity>
        </QuantityProduct>
      </InfoProduct>

      <Div>
        <Figure>
          <img src="/src/assets/img/PizzaDetails.png"></img>
        </Figure>

        <DescriptionContainer>
        <TitleDescription>Descrição</TitleDescription>
        <Description>Lorem ipsum dolor sit amet consectetur. Proin eget pulvinar risus nisi nibh amet est dignissim diam. Suscipit dui nisl faucibus odio.</Description>
        </DescriptionContainer>
       

        <PriceProducts>
          <Price>
            <ValuePrice>Preço</ValuePrice>
            <Value>R$ 67,40</Value>
          </Price>
          <Price>
            <ValuePrice>Preço Total</ValuePrice>
            <Value>R$ 134,80</Value>
          </Price>
          <Button hasIcon isFill padding="12px" radius="32px">
            Adicionar ao carrinho</Button>
        </PriceProducts>
      </Div>
    </Wrapper>
  )
}