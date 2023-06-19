import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./assets/GlobalStyled"
import { StyledMain } from "./assets/Styles/Layout/Main"

const theme = {
  colors: {
    red: 'hsl(0, 100%, 74%)',
    green: 'hsl(154, 59%, 51%)'
    
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
        <h1>main</h1>
      </StyledMain>
        
    </>
    </ThemeProvider>
  )
}

export default App
