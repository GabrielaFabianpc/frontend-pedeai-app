import styled from "styled-components"
import { colors } from "../../../_variables";


const Text = styled.h1`
  font-family: Agbalumo;
  font-weight: 400;
  font-size: 44px;
  color: ${colors.thunderbird};
`;

export const Logo = () => {
    return(
        <Text>PedeAí</Text>
    )
}