import AdminNavigationBar from './NavigationBar';
const Dashboard = () =>
{
	return(
		<>
			<AdminNavigationBar/>
			<div className="container my-3">
				<div className="text-center">
					<h3>Dashboard</h3>
				</div>
				<hr/>
				<div className="container d-flex justify-content-center flex-column">
					<a href="" className="btn btn-outline-success mb-3">Manage User</a>
					<a href="" className="btn btn-outline-success mb-3">Manage Tutotor</a>
					<a href="" className="btn btn-outline-success mb-3">Manage Tuition Posts</a>
					<a href="" className="btn btn-outline-success mb-3">Manage Forum</a>
					<a href="" className="btn btn-outline-success mb-3">Manage Blogs</a>
					<a href="" className="btn btn-outline-success mb-3">View Feedbacks</a>
					<a href="" className="btn btn-outline-success mb-3">View Contact Messages</a>
				</div>
			</div>
		</>
	);
}

export default Dashboard;