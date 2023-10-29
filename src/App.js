import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
]; 

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
