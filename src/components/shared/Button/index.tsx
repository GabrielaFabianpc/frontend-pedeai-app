
import styled from 'styled-components';
import { colors } from '../../../_variables';
import IconCart from "../../../assets/icons/IconCart.svg"
import { IButton } from '../../../interfaces/Button';


const Wrapper = styled.button<{$fill?: boolean, $radius: string, $padding: string}>`
    width: 100%;
    // max-height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background-color: ${(props) => props.$fill ? colors.thunderbird : 'transparent' };
    border: ${(props) => props.$fill ? 'none' : `1px solid ${colors.thunderbird}` };
    border-radius: ${(props) => props.$radius};
    padding: ${(props) => props.$padding} 8px;
    color: ${(props) => props.$fill ? colors.white : colors.thunderbird};
    font-size: 12px;

    &:hover {
        opacity: .8;
    }
`

export const Button = ({children, isFill, hasIcon, radius, padding, onClick}: IButton) => {
    return (
        <Wrapper $fill={isFill} $radius={radius} $padding={padding} onClick={onClick}>
            { hasIcon && <img src={IconCart} alt="icon" />}
            { children }
        </Wrapper>
    );
}