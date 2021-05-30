import styled from 'styled-components';

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
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
