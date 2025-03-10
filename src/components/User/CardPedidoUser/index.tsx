import styled from "styled-components"
import { colors } from "../../../_variables"

const Wrapper = styled.div`
/* width: 358px; */
display: flex;
flex-direction: column;
border: 1px solid ${colors.alto};
border-radius: 10px;
gap: 10px;
padding: 10px;
`

const ContainerInfo = styled.div`
display: flex;
gap: 20px;
`
const Info = styled.div`
display: flex;
flex-direction: column;
gap: 7px;
`

const Image = styled.div`
display: flex;
gap: 16px;
border-radius: 8px;
overflow: hidden;
`
const Order = styled.div`
display: flex;
gap: 8px;
`
const Date = styled.div`
display: flex;
gap: 16px;
`

const Quantity = styled.span`
color: ${colors.mineShaft};
font-size: 14px;
`
const Item = styled.span`
color: ${colors.mineShaft};
font-size: 14px;
font-weight: 600;
`

const DateOrder = styled.span`
color: ${colors.stormdust};
font-size: 11px;
`

const Status = styled.span`
color: ${colors.yellowSea};
font-size: 12px;
font-weight: 600;
`

const PriceProduct = styled.span`
color: ${colors.thunderbird};
font-size: 12px;
font-weight: 500;
`

export const CardPedidoUser = () => {
    return (
        <Wrapper>
            <ContainerInfo>
                <Image>
                    <img src="/src/assets/img/product.png"></img>
                </Image>
                <Info>
                    <Order>
                        <Quantity>x2</Quantity>
                        <Item>Pizza de Mussarela</Item>
                    </Order>
                    <Date>
                        <DateOrder>01 Março 2025</DateOrder>
                        <Status>Em andamento</Status>
                    </Date>
                        <PriceProduct>R$ 134,80</PriceProduct>
                </Info>
            </ContainerInfo>
        </Wrapper>
    )
}