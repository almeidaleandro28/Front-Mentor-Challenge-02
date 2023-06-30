import { styled } from "styled-components";

interface Text {
  type: string,
  placeholder:string
}

const InputStyled = styled.input`

`

function Inputs(props: Text) {
  return (
    <InputStyled type={props.type} placeholder={ props.placeholder }/>
  )
}

export default Inputs;