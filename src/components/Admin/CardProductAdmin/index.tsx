import styled from "styled-components";
import { colors } from "../../../_variables";
import IconPencil from "/src/assets/icons/IconPencil.svg";
import IconTrash from "/src/assets/icons/IconTrash.svg";
import { CardProductAdminProps } from "../../../interfaces/CardProductAdmin";

const Wrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const Figure = styled.figure`
    width: 80px;
    height: 80px;
    flex-shrink: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 8px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;
const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Product = styled.div``;
const Icons = styled.div`
    display: flex;
    gap: 24px;
`;

const NameProduct = styled.span`
    color: ${colors.masala};
    font-size: 10px;
    font-weight: 600;
`;

const DescriptionProduct = styled.p`
    color: ${colors.mountainMist};
    font-size: 9px;
    font-weight: 500;
    line-height: 14px;
`;

const PriceProduct = styled.span`
    color: ${colors.masala};
    font-size: 10px;
    font-weight: 600;
`;

export const CardProductAdmin = ({
    productImage,
    productName,
    productDescription,
    productPrice,
}: CardProductAdminProps) => {
    return (
        <Wrapper>
            <Figure>
                <img src={productImage} alt={productName} />
            </Figure>
            <Container>
                <ContainerInfo>
                    <Product>
                        <NameProduct>{productName}</NameProduct>
                    </Product>
                    <Icons>
                        <img src={IconPencil} alt="Edit" />
                        <img src={IconTrash} alt="Delete" />
                    </Icons>
                </ContainerInfo>
                <DescriptionProduct>{productDescription}</DescriptionProduct>
                <PriceProduct>{productPrice}</PriceProduct>
            </Container>
        </Wrapper>
    );
};
