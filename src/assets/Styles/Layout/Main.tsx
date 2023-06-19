import { styled } from "styled-components";
import BgMobile from '../../img/bg-intro-mobile.png';
import BgDesktop from '../../img/bg-intro-desktop.png';

export const StyledMain = styled.main`
  background-image: url( ${BgDesktop } );
  background-color: ${ ( { theme } ) => theme.colors.red};
  height: 100vh;
`