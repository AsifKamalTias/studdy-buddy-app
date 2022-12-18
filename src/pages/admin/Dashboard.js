import { useEffect } from 'react';
import axiosConfig from '../../components/admin/axiosConfig';
import AdminNavigationBar from '../../components/admin/NavigationBar';
const Dashboard = () =>
{
	useEffect(() => {
		document.title = "Dashboard";
		axiosConfig
		.post('/admin/dashboard')
		.then((response) => {
			console.log(response.data);
		}
		)
		.catch((error) => {
			console.log(error);
			window.location.href="/admin";
		}
		);
	}, []);

	return(
		<>
			<AdminNavigationBar/>
			<div className="container my-3">
				<div className="text-center">
					<h3>Dashboard</h3>
				</div>
				<hr/>
				<div className="container d-flex justify-content-center flex-column">
					<a href="/" className="btn btn-outline-success mb-3">Manage User</a>
					<a href="/" className="btn btn-outline-success mb-3">Manage Tutor</a>
					<a href="/" className="btn btn-outline-success mb-3">Manage Tuition Posts</a>
					<a href="/" className="btn btn-outline-success mb-3">Manage Forum</a>
					<a href="/" className="btn btn-outline-success mb-3">Manage Blogs</a>
					<a href="/" className="btn btn-outline-success mb-3">View Feedbacks</a>
					<a href="/" className="btn btn-outline-success mb-3">View Contact Messages</a>
				</div>
			</div>
		</>
	);
}

export default Dashboard;