import styled from "styled-components";
import { IconMinus, IconPlus } from "../../shared/SvgComponents";
import { colors } from "../../../_variables"
import { IQuantity } from "../../../interfaces/Quantity";

const Wrapper = styled.div<{ $primary?: boolean }>`
  min-width: ${(props) => (props.$primary ? "95px" : "87px")};
  max-width: ${(props) => props.$primary && "100%"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${(props) =>
    props.$primary ? `1px solid ${colors.thunderbird}` : "none"};
  border-radius: ${(props) => (props.$primary ? "50px" : "0")};
  padding: ${(props) => (props.$primary ? "4px 12px" : "4px 0")};
`;
const Icon = styled.div<{ $primary?: boolean }>`
  width: ${(props) => (props.$primary ? "max-content" : "22px")};
  height: ${(props) => (props.$primary ? "max-content" : "22px")};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.$primary ? "transparent" : `${colors.platinum}`};
  border-radius: ${(props) => (props.$primary ? "none" : "50px")};
  cursor: pointer;
`;
const Value = styled.span`
  color: ${colors.thunderbird};
`;

export const Quantity = ({ children, primary, iconColor }: IQuantity) => {
  return (
    <Wrapper $primary={primary}>
      <Icon $primary={primary}>
        <IconMinus color={iconColor} />
      </Icon>
      <Value>{children}</Value>
      <Icon $primary={primary}>
        <IconPlus color={iconColor} />
      </Icon>
    </Wrapper>
  );
};