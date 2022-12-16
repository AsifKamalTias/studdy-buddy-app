import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () =>
{
	return(
		<>
			<Navbar bg="light" variant="light">
	        <Container>
	          <Navbar.Brand href="/">Study Buddy</Navbar.Brand>
	          <Nav className="me-auto">
	            <Nav.Link href="/">Home</Nav.Link>
	            <Nav.Link href="#features">Tuition Posts</Nav.Link>
	            <Nav.Link href="#pricing">Forum</Nav.Link>
	            <Nav.Link href="#pricing">Sign in</Nav.Link>
	            <Nav.Link href="#pricing">Register</Nav.Link>
	            <Nav.Link href="#pricing">Contact</Nav.Link>
	            <Nav.Link href="#pricing">Feedback</Nav.Link>
	            <Nav.Link href="#pricing">Blogs</Nav.Link>
	          </Nav>
	        </Container>
	      	</Navbar>
		</>
	);
}
export default NavigationBar;