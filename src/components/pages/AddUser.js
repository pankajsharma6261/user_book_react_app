import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {generate} from 'shortid'
import {useHistory} from 'react-router-dom'
const AddUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile_no, setMobileNo] = useState(0)
    const id = generate()
    const history = useHistory()
    const dispatch = useDispatch()
    const submitForm = (e) => {
        e.preventDefault()
        dispatch({
            type : 'ADD_USER',
            payload : {id,name,email,mobile_no}
        })
        history.push('/')
        
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-6 m-auto">
                    <div className="card p-3 shadow">
                        <h2>Add Users</h2>
                        <form onSubmit={submitForm}>
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
                            <div className="text-right">
                                <input type="submit" value="Save User" className="btn btn-success"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser