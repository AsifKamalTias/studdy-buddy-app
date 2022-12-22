import AllTuitions from "../../components/admin/AllTuitions";
import NavigationBar from "../../components/admin/NavigationBar";
import Payments from "../../components/admin/Payments";

const Tuition = () =>
{
    return(
        <div>
            <NavigationBar/>
            <div className="container mt-4">
                <h2>Manage Tuition Posts</h2>
                <hr/>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="all-tuitions-tab" data-bs-toggle="tab" data-bs-target="#all-tuitions-tab-pane" type="button" role="tab" aria-controls="all-tuitions-tab-pane" aria-selected="true">All Tuition Posts</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pending-tab" data-bs-toggle="tab" data-bs-target="#pending-tab-pane" type="button" role="tab" aria-controls="pending-tab-pane" aria-selected="false">Pending</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="all-tuitions-tab-pane" role="tabpanel" aria-labelledby="all-tuitions-tab" tabIndex="0"><AllTuitions/></div>
                    <div className="tab-pane fade" id="pending-tab-pane" role="tabpanel" aria-labelledby="pending-tab" tabIndex="1"><Payments/></div>
                </div>
            </div>
        </div>
    );
}
export default Tuition;