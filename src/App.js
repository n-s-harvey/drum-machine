import logo from './logo.svg';
import './App.scss'
import Display from './features/display';
import Bank from './features/bank';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container id='drum-machine' className='d-flex justify-content-around flex-column'>
      <Bank />
      <Display />
    </Container>
  );
}

export default App;
