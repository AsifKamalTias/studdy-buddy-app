import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignIn = () =>
{
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSignIn = (e) =>
	{
		e.preventDefault();
		const data = {
			uniqueIdentity: username,
			password: password
		};
		axios
			.post('https://localhost:44388/api/admin/login', data)
			.then((response) => {
				localStorage.setItem('_adminAuthToken', response.data);
				window.location.href="/admin/dashboard";
			}
			)
			.catch((error) => {
				setError(error.response.data);
			}
			);

	}
	return(
		<>
			<div className='center'>
			{error !== ''? <div className="alert alert-danger">{error}</div>:''}
			<div className="border rounded p-3">
				 <Form onSubmit={handleSignIn} method="POST">
			      <Form.Group className="mb-3" controlId="formBasicUsername">
			        <Form.Label>Username</Form.Label>
			        <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
			      </Form.Group>

			      <Form.Group className="mb-3" controlId="formBasicPassword">
			        <Form.Label>Password</Form.Label>
			        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
			      </Form.Group>

			      <Button variant="success" type="submit">
			        Sign in
			      </Button>
			    </Form>				  
			</div>
			</div>
		</>
	);
}

export default SignIn;