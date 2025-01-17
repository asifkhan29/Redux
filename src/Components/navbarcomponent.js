import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {

   
  
    
      return(
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home"> User {
  
              
              }</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/addusers">Add User</Nav.Link>
                <Nav.Link as={Link} to="/getusers">Users</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
      )
  }

export default NavbarComponent