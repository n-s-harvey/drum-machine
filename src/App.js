import './App.scss'
import Display from './features/display';
import Bank from './features/bank';
import Header from './features/header';
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Drum Machine";
  })
  return (
    <Container id='drum-machine' className='d-flex justify-content-around flex-column'>
      <Header />
      <Bank />
      <Display />
      <script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js' />
    </Container>
  );
}

export default App;
