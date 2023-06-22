import { styled } from "styled-components";

const HeroStyled = styled.div`
   
`

const TitleStyled = styled.h1`
  color: ${ ( { theme } ) => theme.colors.white };
  font-family: ${ ( { theme } ) => theme.fonts.poppins };
  font-weight: ${ ( { theme } ) => theme.fonts.bold };
`

const TextStyled= styled.p`
  color: ${ ( { theme } ) => theme.colors.white };
  font-family: ${ ( { theme } ) => theme.fonts.poppins };
  font-weight: ${ ( { theme } ) => theme.fonts.medium };
`



function Hero(props) {
  return (
    <HeroStyled>
      <TitleStyled>
        <h1>learn to code by watching others</h1>
      </TitleStyled>
      <TextStyled>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem omnis officia voluptate laborum, nobis debitis harum inventore? Quas, quam! Et eum ducimus eius nulla nihil laboriosam voluptas distinctio rerum.</p>
      </TextStyled>
    </HeroStyled>
  );
}

export default Hero;