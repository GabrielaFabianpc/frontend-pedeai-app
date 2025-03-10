import styled from "styled-components";
import IconBack from '../../assets/icons/IconBack.svg';
import { colors } from "../../_variables";
import IconCash from '../../assets/icons/IconCash.svg'
import IconPix from '../../assets/icons/IconPix.svg'
import { Button } from "../../components";
import { TabBarUser} from "../../components/User/TabBarUser";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useCartContext } from "../../hooks/useCartContext";


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

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
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

const Container = styled.div``

const InfoCash = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 8px;

`

const Payment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const TitlePayment = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: ${colors.mineShaft};
`

const Cash = styled.div`
    display: flex;
    border: 1px solid ${colors.platinum};
    border-radius: 8px;
    height: 64px;
    align-items: center;
    padding: 16px;
    gap: 10px;
`
const TitleCash = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: ${colors.mineShaft};
`


const TitlePix = styled.span`
    font-size: 12px;
    color: ${colors.mineShaft};
`

const ContainerPix = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`


const Carton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 1px solid ${colors.platinum};
    padding-bottom: 10px;
`
const DescriptionCarton = styled.span`
    font-size: 12px;
    color: ${colors.mountainMist};
`
const AddCarton = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: ${colors.mineShaft};
`
const ButtonCpf = styled.input`
    border: 1px solid ${colors.platinum};
    border-radius: 4px;
    height: 39px;
    font-size: 12px;
    color: ${colors.boulder};
    padding: 10px;
    text-align: left;
`
const PriceProducts = styled.div`
    height: 100%;
    width: 100%;
    align-content: flex-end;
    padding-bottom: 100px;
`


export const InfoProduct = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: ${colors.mineShaft};
`

const Summary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
    margin-top: 15px;
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

const PriceDivTotal = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const Border = styled.div`
    border-top: 1px solid ${colors.platinum};
    padding-top: 15px;
`

export const CartPagamento = () => {

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
                <Title>Pagamento</Title>
            </Header>
            <Container>
                <Payment>
                    <TitlePayment>Forma de Pagamento</TitlePayment>
                    <InfoCash>
                        <Cash>
                            <img src={IconCash} />
                            <TitleCash>Dinheiro</TitleCash>
                        </Cash>
                        <Cash>
                            <img src={IconPix} />
                            <ContainerPix>
                                <TitleCash>Pague com Pix</TitleCash>
                                <TitlePix>Use o QR Code ou copie e cole o código</TitlePix>
                            </ContainerPix>
                        </Cash>
                    </InfoCash>

                    <Carton>
                        <AddCarton>Adicione um Cartão</AddCarton>
                        <DescriptionCarton>É prático, seguro e você não perde nenhum minuto a mais quando seu pedido chegar.</DescriptionCarton>
                        <Button radius="0px" padding="8px" >Adicionar novo cartão</Button>
                    </Carton>
                </Payment>
            </Container>
            <TabBarUser pageActive={pageActive} onNavigate={handleNavigate} itemCount={Calculate.totalItems()} />

            <ButtonCpf type="text" placeholder='CPF/CNPJ na nota'></ButtonCpf>

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
                                <PriceDivTotal>
                                    <ValueTotalPrice>Valor Total</ValueTotalPrice>
                                    <PriceTotal>R$ 153,28</PriceTotal>
                                </PriceDivTotal>
                            </Summary>
                            <Border>
                                <Button isFill padding="12px" radius="32px">
                                    Confirmar Pedido</Button>
                            </Border>
                        </PriceProducts>
        </Wrapper>
    )
}