import React, { useState , useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory,useParams,Link} from 'react-router-dom'
const EditUser = () => {
    const {id} = useParams()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile_no, setMobileNo] = useState(0)
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)

    useEffect(() => {
        if(user != null){
            let {name,email,mobile_no} = user
            setName(name)
            setEmail(email)
            setMobileNo(mobile_no)
        }
        dispatch({
            type : 'GET_USER',
            payload : {id}
        })
    } ,[user,dispatch,id])

    const updateUsers = e => {
        e.preventDefault()
        dispatch({
            type : 'UPDATE_USER',
            payload : Object.assign(user,{name,email,mobile_no})
        })
        history.push('/')
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-6 m-auto">
                    <div className="card p-3 shadow">
                        <h2>Edit Users</h2>
                        <form onSubmit={e => updateUsers(e)} >
                            <div className="form-group">
                                <label htmlFor="name">Name : </label>
                                <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email : </label>
                                <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobile_no">Mobile No. : </label>
                                <input type="number" name="mobile_no" id="mobile_no" value={mobile_no} onChange={e => setMobileNo(e.target.value)} className="form-control"/>
                            </div>
                            <div className="btn-group text-right">
                                <input type="submit" value="Edit User" className="btn btn-warning"/>
                                <Link to="/" className="btn btn-info">back</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser