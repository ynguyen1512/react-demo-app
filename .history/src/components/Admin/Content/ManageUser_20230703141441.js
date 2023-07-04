import ModalCreateUser from "./ModalCreateUser"
import  './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'


const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-light"> <FcPlus/> Add New Users</button>
                </div>
                <div className="table-users-container">
                    Table user
                </div>
            <ModalCreateUser/>
            </div>
        </div>
    )
}

export default ManageUser