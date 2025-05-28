import { Link,NavLink } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarExample({list}) {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home">HG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <NavLink className={({isActive})=> isActive ? `nav-link text-white` : `nav-link`} to='/home' >  Home  </NavLink>  
             <NavLink className={ ({isActive}) => isActive ? `nav-link text-white` : 'nav-link'} to='/about' >  About  </NavLink>  
             <NavLink className={ ({isActive}) => isActive ? `nav-link text-white` : 'nav-link'} to='/users' >  Users  </NavLink>  
             <NavLink className={ ({isActive}) => isActive ? `nav-link text-white` : 'nav-link'} to='/contact' >  Contact  </NavLink>  
             
              <NavLink className='btn btn-danger btn-sm' to='/' >  Login  </NavLink>  
              <NavLink className='btn btn-outline-light btn-sm' to='/' > 👥- {list.length}  </NavLink>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExample;