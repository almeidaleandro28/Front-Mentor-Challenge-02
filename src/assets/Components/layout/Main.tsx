import { styled } from "styled-components";
import BgMobile from '../../img/bg-intro-mobile.png';
import BgDesktop from '../../img/bg-intro-desktop.png';

export const StyledMain = styled.main`
  background-image: url( ${BgDesktop } );
  background-color: ${ ( { theme } ) => theme.colors.red};
  height: 100vh;

  @media ( max-width: ${ ( { theme } ) => theme.sm } ) {
    background-image: url( ${BgMobile } );  
  }

  display: flex;
  flex-direction: column;

  div {
    flex: 1;
    padding: 2rem;
    border-radius: 5px;
  }


`