import ModalCreateUser from "./ModalCreateUser"
import  './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getAllUsers, getUserWithPaginate } from "../../../services/apiServices"
import ModalUpdateUser from "./ModalUpdateUser"
import ModalDeleteUser from "./ModalDeleteUser"
import TableUserPaginate from "./TableUserPaginate"

const ManageUser = (props) => {
    const LIMIT_USER = 6;
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [listUsers,setListUsers] = useState([])
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
    const [dataDelete, setDataDelete] = useState({})


    useEffect(()=> {
        // fetchListUsers()
        fetchListUsersWithPaginate(1)
    },[])

    const fetchListUsers = async() => {
        let res = await getAllUsers()
        if(res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const fetchListUsersWithPaginate = async(page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER)
        if(res.EC === 0) {
            setListUsers(res.DT.users)
        }
    }


    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user)
    }

    const resetUpdateData = ()=> {
        setDataUpdate({})
    }

    const handleClickBtnDelete = (user)=> {
        setShowModalDeleteUser(true)
        setDataDelete(user)
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
                    {/* <TableUser 
                    listUsers={listUsers}
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    handleClickBtnDelete = {handleClickBtnDelete}
                    /> */}
                    <TableUserPaginate
                    listUsers={listUsers}
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    handleClickBtnDelete = {handleClickBtnDelete}
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
            dataUpdate={dataUpdate}
            fetchListUsers={fetchListUsers}
            resetUpdateData={resetUpdateData}
            />
            <ModalDeleteUser 
            show={showModalDeleteUser}
            setShow={setShowModalDeleteUser}
            dataDelete = {dataDelete}
            fetchListUsers={fetchListUsers}
            />
            </div>
        </div>
    )
}

export default ManageUser