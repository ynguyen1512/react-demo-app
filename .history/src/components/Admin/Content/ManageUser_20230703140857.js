import ModalCreateUser from "./ModalCreateUser"
import  './ManageUser.scss'

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button>Add New Users</button>
                </div>
                <div>
                    Table user
                </div>
            <ModalCreateUser/>
            </div>
        </div>
    )
}

export default ManageUser