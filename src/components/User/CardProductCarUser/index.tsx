import styled from "styled-components"
import IconTrash from '/src/assets/icons/IconTrash.svg';
import { colors } from "../../../_variables";
import { Quantity } from "../Quantity";

const Wrapper = styled.div`
display: flex;
gap: 10px;
`

const Figure = styled.figure`
width: 108px;
height: 108px;
flex-shrink: 0;

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
}
`
const ContainerInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 10px;
`
const InfoProducts = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`
const Products = styled.div``
const NameProduct = styled.span`
color: ${colors.mineShaft};
font-size: 14px;
font-weight: 500;
`
const Icon = styled.div``

const DescriptionProduct = styled.span`
color: ${colors.mountainMist};
font-size: 10px;
font-weight: 300;
`
const PriceProducts = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
const Price = styled.div``

export const CardProductCarUser = () => {
    return (
        <Wrapper>
            <Figure>
                <img src="/src/assets/img/PizzaProduct.png"></img>
            </Figure>
            <ContainerInfo>
                <InfoProducts>
                    <Products>
                        <NameProduct>Pizza de Mussarella</NameProduct>
                    </Products>
                    <Icon>
                        <img src={IconTrash}></img>
                    </Icon>
                </InfoProducts>
                <DescriptionProduct>
                    Lorem ipsum dolor sit amet consectetur. Dignissim etiam ut egestas vulputate vitae et. Scelerisque et donec purus feugiat.
                </DescriptionProduct>
                <PriceProducts>
                    <Price>
                        R$ 134,80
                    </Price>
                    <Quantity iconColor={colors.boulder} >
                        2
                    </Quantity>
                </PriceProducts>

            </ContainerInfo>
        </Wrapper>
    )
}