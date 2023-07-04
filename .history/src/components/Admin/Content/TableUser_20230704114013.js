import { useState } from "react"
import { useState } from "react"
const TableUser = (props) =>{

    const [listUsers,setListUsers] = useState([{
        "id": 17,
        "username": "eric",
        "email": "adsuhfsdfdsf",
        "role": "USER"
    },{
        "id": 18,
        "username": "",
        "email": "adsuhfsdfdsf",
        "role": "USER"
    }])
    return (
        <>
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
            <th scope="col">No</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Handle</th>
            </tr>Role
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table>
        </>
    )
}

export default TableUser