import { styled } from "styled-components";

export const ButtonStyled = styled.button<{$primary?: boolean}>`
  background-color: ${ props => props.$primary 
                      ? props.theme.colors.blue
                      : props.theme.colors.green};
  color: ${ ( { theme } ) => theme.colors.white };  
  padding: 1rem 0;
  text-transform: ${ props => !props.$primary 
                  ? 'uppercase'
                  : 'lowercase'};
  width: ${ props => props.$primary ? '100%' : '90%'};
`


