import { styled } from "styled-components";

export const ButtonStyled = styled.button<{$primary?: boolean}>`
  background-color: ${ props => props.$primary 
                      ? props.theme.colors.blue
                      : props.theme.colors.green};
  border: none;
  border-radius: 5px;
  color: ${ ( { theme } ) => theme.colors.white };  
  padding: 1rem 0;
  text-transform: ${ props => !props.$primary 
                  ? 'uppercase'
                  : 'lowercase'};
  strong{
    text-transform: capitalize;
    font-weight: ${ ( { theme} ) => theme.weight.bold };
  }

  width: ${ props => props.$primary ? '100%' : '90%'};
`


