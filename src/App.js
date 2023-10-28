import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';

function App() {
  return (
    <div>
      <Wrapper>
        <Screen />
        <h1>Calculator</h1>
      </Wrapper>
    </div>
  );
}

export default App;
