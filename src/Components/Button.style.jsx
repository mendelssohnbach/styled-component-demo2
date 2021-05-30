import styled from 'styled-components';
import Button from './Button';

export const StyledButton = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    color: aqua;
    & label {
      color: tomato;
    }
  }
  &:active {
    background-color: wheat;
  }
`;

export const ButtonLabel = styled.label`
  font-size: 20px;
  color: gray;
`;
