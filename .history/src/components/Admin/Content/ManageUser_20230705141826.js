import ModalCreateUser from "./ModalCreateUser"
import  './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getAllUsers } from "../../../services/apiServices"
import ModalUpdateUser from "./ModalUpdateUser"

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [listUsers,setListUsers] = useState([])
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState()

    useEffect(()=> {
        fetchListUsers()
    },[])

    const fetchListUsers = async() => {
        let res = await getAllUsers()
        if(res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);

    }

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
                    <TableUser 
                    listUsers={listUsers}
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    />
                </div>
            <ModalCreateUser 
            show={showModalCreateUser} 
            setShow={setShowModalCreateUser}
            fetchListUsers={fetchListUsers}
            />
            <ModalUpdateUser
            show={showModalUpdateUser}
            setShow={setShowModalUpdateUser}
            fetchListUsers={fetchListUsers} 
            />
            </div>
        </div>
    )
}

export default ManageUser