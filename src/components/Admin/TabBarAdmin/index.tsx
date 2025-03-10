import styled from "styled-components";
import { colors } from "../../../_variables";
import { TabBarAdminProps } from "../../../interfaces/TabBarAdmin";

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
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li<{$active?: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${(props) => props.$active ? colors.thunderbird : colors.mineShaft};
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    opacity: 0.6;
  }
`;

export const TabBarAdmin = ({ items = []}: TabBarAdminProps) => {
    return (
      <Wrapper>
        <List>
          {items.map((item, index) => (
            <Item key={index} onClick={item.onclick} $active={item.active}>
              {item.icon}
              {item.label}
            </Item>
          ))}
        </List>
      </Wrapper>
    );
  };
  