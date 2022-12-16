import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () =>
{
	return(
		<>
			<Navbar bg="light" variant="light">
		        <Container>
		          <Navbar.Brand href="/admin">Study Buddy</Navbar.Brand>
		          <Nav className="me-auto">
		            <Nav.Link href="/admin">Home</Nav.Link>
		            <Nav.Link href="#features">Sign out</Nav.Link>
		          </Nav>
		        </Container>
      		</Navbar>
		</>
	);
}

export default NavigationBar;