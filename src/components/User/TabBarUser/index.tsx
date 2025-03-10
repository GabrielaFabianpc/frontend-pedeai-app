import styled from "styled-components";
import {
  IconHome,
  IconNotifications,
  IconOrders,
  IconProfile,
} from "../../../components/shared/SvgComponents";
import { colors } from "../../../_variables";
import {IconOrder} from "../../shared/SvgComponents/IconOrder";
import { IUserTabBarProps } from "../../../interfaces/TabBarUser";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 18px;
  margin: 0 auto;
  background: ${colors.white};
`;

const List = styled.ul`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li<{ $active?: boolean }>`
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 12px;
  color: ${(props) => (props.$active ? colors.thunderbird : colors.mineShaft)};
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    opacity: 0.6;
  }
`;

const ItemHighlighted = styled(Item)`
  position: relative;
  bottom: 30px;
  gap: 8px;
`;

const Highligh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.thunderbird};
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

const Count = styled.span`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -2px;
  right: 0;
  background: ${colors.yellowSea};
  border-radius: 50%;
  font-size: 9px;
  font-weight: 600;
  color: ${colors.white};
`;

export const TabBarUser = ({ pageActive, onNavigate, itemCount = 0 }: IUserTabBarProps) => {
  return (
    <Wrapper>
      <List>
        <Item $active={pageActive === "home"} onClick={() => onNavigate("home")}>
          <IconHome color={pageActive === "home" ? "#D71A1A" : "#333333"} />
          Home
        </Item>
        <Item $active={pageActive === "orders"} onClick={() => onNavigate("orders")}>
          <IconOrders color={pageActive === "orders" ? "#D71A1A" : "#333333"} />
          Pedidos
        </Item>
        <ItemHighlighted onClick={() => onNavigate("cart")}>
          <Highligh>
            < IconOrder color={colors.white}/>
          </Highligh>
          {itemCount > 0 && <Count>{itemCount}</Count>}
          Pedir
        </ItemHighlighted>
        <Item $active={pageActive === "notificacao"}>
          <IconNotifications color={pageActive === "notificacao" ? "#D71A1A" : "#333333"} />
          Notificações
        </Item>
        <Item $active={pageActive === "perfil"}>
          <IconProfile color={pageActive === "perfil" ? "#D71A1A" : "#333333"} />
          Perfil
        </Item>
      </List>
    </Wrapper>
  );
};
