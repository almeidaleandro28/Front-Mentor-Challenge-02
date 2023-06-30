import { styled } from "styled-components";

export const ButtonStyled = styled.button<{$primary?: boolean}>`
  background-color: ${ props => props.$primary 
                      ? props.theme.colors.blue
                      : props.theme.colors.green};
  color: ${props => props.theme.color};

  width: 100%;
`


