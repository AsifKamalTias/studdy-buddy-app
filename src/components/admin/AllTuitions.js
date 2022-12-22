import { useState, useEffect } from "react";
import axiosConfig from "../../components/admin/axiosConfig";

const AllTuitions = () => {
    const [tuitions, setTuitions] = useState([]);
    useEffect(() => {
        axiosConfig.get('/tuition/tuitions')
            .then((response) => {
                setTuitions(response.data);
            }
            )
            .catch((error) => {
                console.log(error);
            }
            );
    }, []);

    const deleteTuition = (id) => {
        axiosConfig.delete(`/tuition/delete/${id}`)
            .then((response) => {
                console.log(response.data);
                window.location.href = "/admin/tuitions";
            }
            )
            .catch((error) => {
                console.log(error);
            }
            );
    }

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Monthly Fees</th>
                        <th scope="col">Address</th>
                        <th scope="col">Course</th>
                        <th scope="col">Status</th>
                        <th scope="col">Created</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tuitions.map((tuition) => (
                        <tr key={tuition.Id}>
                            <td>{tuition.Id}</td>
                            <td>{tuition.Title}</td>
                            <td>{tuition.Description}</td>
                            <td>{tuition.MonthlyFees}</td>
                            <td>{tuition.Address}</td>
                            <td>{tuition.Course}</td>
                            <td>{tuition.Status}</td>
                            <td>{tuition.Created}</td>
                            <td><button className="btn btn-danger" onClick={() => deleteTuition(tuition.Id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default AllTuitions;