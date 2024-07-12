import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/navbarcomponent';
import { Container } from 'react-bootstrap';
import AddUser from './Components/adduser';
import GetUsers from './Components/getUser';

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent/>
        <Container>
          <Routes>
            <Route path='/addusers' Component={AddUser} />
            <Route path='/getusers' Component={GetUsers} />
          </Routes>
        </Container>
      </div>

    </Router>
  
  );
}

export default App;
