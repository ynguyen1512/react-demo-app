import ModalCreateUser from "./ModalCreateUser"
import  './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState } from "react"


const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-light" onClick={()=> setShowModalCreateUser(true)}> <FcPlus/> Add New Users</button>
                </div>
                <div className="table-users-container">
                    Table user
                </div>
            <ModalCreateUser show={showModalCreateUser}/>
            </div>
        </div>
    )
}

export default ManageUser