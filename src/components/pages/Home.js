import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
const Home = () => {
    const {users} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const deleteUser = (id) =>{
        dispatch({
            type : "DELETE_USER",
            payload : {id}
        })
    }
    return (
        <div className="container mt-3">
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user,index) => {
                        const {id,name,email,mobile_no} = user
                        index++
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{mobile_no}</td>
                                <td>
                                    <div className="btn-group btn-group-sm border-rounded">
                                        <Link to={`user/edit/${id}`} className="btn btn-sm btn-warning">edit</Link>
                                        <button onClick={e => deleteUser(id)} className="btn btn-danger">delete</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home