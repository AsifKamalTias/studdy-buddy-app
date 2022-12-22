import { useState, useEffect } from "react";
import axiosConfig from "../../components/admin/axiosConfig";

const Payments = () => {
    const [payments, setPayments] = useState([]);
    useEffect(() => {
        axiosConfig.get('/payment/payments')
            .then((response) => {
                setPayments(response.data);
            }
            )
            .catch((error) => {
                console.log(error);
            }
            );
    }, []);
    return(
        <div>
            <h1>Payments</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Verification</th>
                        <th scope="col">Tuition ID</th>
                        <th scope="col">User ID</th>
                        <th scope="col">Created</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.Id}>
                            <td>{payment.Id}</td>
                            <td>{payment.IsVerified}</td>
                            <td>{payment.TuitionId}</td>
                            <td>{payment.UserId}</td>
                            <td>{payment.Created}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Payments;