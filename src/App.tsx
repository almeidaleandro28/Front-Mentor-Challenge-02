import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./assets/GlobalStyled"
import { StyledMain } from "./assets/Components/layout/Main"
import Hero from "./assets/Components/layout/Hero"
import Registration from "./assets/Components/layout/Registration"

const theme = {
  colors: {
    blue: 'hsl(248, 32%, 49%)',
    green: 'hsl(154, 59%, 51%)',
    red: 'hsl(0, 100%, 74%)',
    white: '#ffffff'
    
  },
  fonts: {
    poppins: '"Poppins", sans-serif',
  },
  weight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  sm: '640px',
  md: '7680x',
  lg: '1024px'
}

function App() {

  return (
    <ThemeProvider theme={ theme } >
    <>
      <GlobalStyle />
      <StyledMain>
        <Hero />
        <Registration />
      </StyledMain>
    </>
    </ThemeProvider>
  )
}

export default App
