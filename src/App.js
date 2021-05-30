import { StyledButton } from './Components/Button.style';
import { AppContainer } from './Components/Container.style';
import { GlobalStyles } from './Components/GlobalSytles.style';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <StyledButton buttonLabel="Click Here" background="violet"></StyledButton>
    </AppContainer>
  );
}

export default App;
