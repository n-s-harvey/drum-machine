import logo from './logo.svg';
import './App.scss'
import Display from './features/display';
import Bank from './features/bank';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container id='drum-machine'>
      <Bank />
      <Display />
    </Container>
  );
}

export default App;
