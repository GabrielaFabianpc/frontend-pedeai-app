import styled from "styled-components";
import IconPencil from "/src/assets/icons/IconPencil.svg";
import IconTrash from "/src/assets/icons/IconTrash.svg";
import { colors } from "../../../_variables";
import { CardPedidoAdminProps } from "../../../interfaces/CardPedidoAdmin";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${colors.alto};
    border-radius: 10px;
    gap: 10px;
    padding: 10px;
`;
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;
const ContainerInfo = styled.div`
    display: flex;
    gap: 20px;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`;
const Icon = styled.div`
    display: flex;
    gap: 30px;
`;
const Image = styled.div`
    display: flex;
    gap: 16px;
    border-radius: 8px;
    overflow: hidden;
`;
const Order = styled.div`
    display: flex;
    gap: 8px;
`;
const Date = styled.div`
    display: flex;
    gap: 16px;
`;
const Number = styled.span`
    color: ${colors.mineShaft};
    font-size: 16px;
    font-weight: 500;
`;
const Quantity = styled.span`
    color: ${colors.mineShaft};
    font-size: 14px;
`;
const Item = styled.span`
    color: ${colors.mineShaft};
    font-size: 14px;
    font-weight: 600;
`;
const DateOrder = styled.span`
    color: ${colors.stormdust};
    font-size: 11px;
`;
const Status = styled.span`
    color: ${colors.yellowSea};
    font-size: 12px;
    font-weight: 600;
`;
const PriceProduct = styled.span`
    color: ${colors.thunderbird};
    font-size: 12px;
    font-weight: 500;
`;

export const CardPedidoAdmin = ({
    phoneNumber,
    quantity,
    itemName,
    orderDate,
    status,
    price,
    productImage,
}: CardPedidoAdminProps) => {
    return (
        <Wrapper>
            <Div>
                <Number>{phoneNumber}</Number>
                <Icon>
                    <img src={IconPencil} alt="Edit" />
                    <img src={IconTrash} alt="Delete" />
                </Icon>
            </Div>
            <ContainerInfo>
                <Image>
                    <img src={productImage} alt={itemName} />
                </Image>
                <Info>
                    <Order>
                        <Quantity>x{quantity}</Quantity>
                        <Item>{itemName}</Item>
                    </Order>
                    <Date>
                        <DateOrder>{orderDate}</DateOrder>
                        <Status>{status}</Status>
                    </Date>
                    <PriceProduct>{price}</PriceProduct>
                </Info>
            </ContainerInfo>
        </Wrapper>
    );
};
