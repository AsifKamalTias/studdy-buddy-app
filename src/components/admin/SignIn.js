import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignIn = () =>
{
	return(
		<>
			<div className="border rounded p-3 center">
				 <Form>
			      <Form.Group className="mb-3" controlId="formBasicEmail">
			        <Form.Label>Username</Form.Label>
			        <Form.Control type="email" placeholder="Enter Username" />
			      </Form.Group>

			      <Form.Group className="mb-3" controlId="formBasicPassword">
			        <Form.Label>Password</Form.Label>
			        <Form.Control type="password" placeholder="Password" />
			      </Form.Group>

			      <Button variant="primary" type="submit">
			        Sign in
			      </Button>
			    </Form>				  
			</div>
		</>
	);
}

export default SignIn;