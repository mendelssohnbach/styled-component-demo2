import { Button, ButtonLabel } from './Components/Button.style';
import { AppContainer } from './Components/Container.style';

function App() {
  return (
    <AppContainer>
      <Button backgroundColor="red">Click this Button!</Button>
      <Button backgroundColor="orange">Click this Button!</Button>
      <Button backgroundColor="orange">
        <ButtonLabel>Click this Button!</ButtonLabel>
      </Button>
    </AppContainer>
  );
}

export default App;
