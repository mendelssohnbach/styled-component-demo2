# Styled-components

[Styled Components Full Tutorial](https://www.youtube.com/watch?v=-FZzPHSLauc)

```shell
$ npm ls
├── @testing-library/jest-dom@5.12.0
├── @testing-library/react@11.2.7
├── @testing-library/user-event@12.8.3
├── react-dom@17.0.2
├── react-scripts@4.0.3
├── react@17.0.2
├── styled-components@5.3.0
└── web-vitals@1.1.2
```

## 3つ3色のボタンを表示

```js
//Button.style.jsx
import styled from 'styled-components';

export const BlueButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: blue;
`;

export const GreenButton = styled.button`
  ...
`;

export const RedButton = styled.button`
  ...
`;
```

```js
// App.js
import { RedButton, GreenButton, BlueButton } from './Components/Button.style';

function App() {
  return (
    <div className="App">
      <RedButton>Click this Button!</RedButton>
      <BlueButton>Click this Button!</BlueButton>
      <GreenButton>Click this Button!</GreenButton>
    </div>
  );
}

export default App;
```

![Button](./images/styled-components001.png)

## ボタン色をpropsで渡す

```js
// Button.style.jsx
import styled from 'styled-components';

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
`;
```

```js
// App.js
      <Button backgroundColor="red">Click this Button!</Button>
      <Button backgroundColor="orange">Click this Button!</Button>
```


