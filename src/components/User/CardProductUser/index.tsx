import styled from "styled-components"
import { colors } from "../../../_variables"
import { useState } from "react"
import { Quantity } from "../Quantity"


const Wrapper = styled.div`
display: flex;
background-color: ${colors.white};
border-radius: 16px;
`

const Figure = styled.div`
width: 118px;
height: 118px;
flex-shrink: 0;
`
const StyledImg = styled.img`
border-radius: 16px;
width: 100%;
height: 100%;
object-fit: contain;
`

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 8px 12px;
width: 100%;
`
const InfoProducts = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
`
const PriceProducts = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`

const InfoName = styled.div`
`
const InfoDescription = styled.div`
`
const Price = styled.div``
const Icon = styled.div`
cursor: pointer;
`


const NameProduct = styled.span`
color: ${colors.mineShaft};
font-size: 14px;
font-weight: 500;
`
const DescriptionProduct = styled.span`
color: ${colors.mountainMist};
font-size: 10px;
font-weight: 300;
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 3;
`
const PriceProduct = styled.span`
color: ${colors.stormdust};
font-size: 14px;
font-weight: 500;
`

export const CardProductUser = () => {
const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Wrapper>
            <Figure>
                <StyledImg src="/src/assets/img/product.png"></StyledImg>
            </Figure>
            <Container>
                <InfoProducts>
                    <InfoName>
                        <NameProduct>Drink Name</NameProduct>
                    </InfoName>
                    <InfoDescription>
                        <DescriptionProduct>Lorem ipsum dolor sit amet consectetur. Dignissim etiam ut egestas vulputate vitae et. Scelerisque et donec purus feugiat...</DescriptionProduct>
                    </InfoDescription>
                </InfoProducts>
                <PriceProducts>
                    <Price>
                        <PriceProduct>R$ 10,49</PriceProduct>
                    </Price>
                    <Icon onClick={() => setIsExpanded(!isExpanded) }>
                        {isExpanded ? <Quantity primary iconColor={colors.thunderbird}> 2 </Quantity> : <img src="/src/assets/icons/IconMore.svg"/>}
                    </Icon>
                </PriceProducts>

            </Container>
        </Wrapper>
    )
}