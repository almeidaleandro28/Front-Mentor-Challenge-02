import { styled } from "styled-components";

interface Text {
  type: string,
  placeholder:string
}

const InputStyled = styled.input`
  border-radius: 5px;
  border: 1px solid ${ ( { theme }) => theme.colors.gray};
  width: 90%;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  &::placeholder{
    font-weight: 900;
    padding-left: 10px;
    text-transform: capitalize;
  }
  
  
`

function Inputs(props: Text) {
  return (
    <InputStyled type={props.type} placeholder={ props.placeholder }/>
  )
}

export default Inputs;