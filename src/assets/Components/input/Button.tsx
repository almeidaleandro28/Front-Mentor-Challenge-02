import { styled } from "styled-components";

export const ButtonStyled = styled.button<{$primary?: boolean}>`
  background-color: ${ props => props.$primary 
                      ? props.theme.colors.blue
                      : props.theme.colors.green};
  color: ${ ( { theme } ) => theme.colors.white };

  /* width: 100%; */
  width: ${ props => props.$primary ? '100%' : '90%'};
`


