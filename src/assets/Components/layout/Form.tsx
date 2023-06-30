import { styled } from 'styled-components';
import Inputs from '../input/Inputs';
import { ButtonStyled } from '../input/Button';


const FormStyled  = styled.form`

`

function Form(props) {
  return (
    <FormStyled>
      <Inputs type='text' placeholder='first name'/>
      <Inputs type='text' placeholder='last name'/>
      <Inputs type='email' placeholder='email address'/>
      <Inputs type='password' placeholder='password'/>
      <ButtonStyled>send</ButtonStyled>
    </FormStyled>
  );
}

export default Form;