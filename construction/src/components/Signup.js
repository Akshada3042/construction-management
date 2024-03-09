import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate();
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const contact = useRef();
    const user_role = useRef();
    const projectid=useRef();
 
    const handleRegister = () => {

        if (!name.current.value || !email.current.value || !password.current.value || !contact.current.value || !user_role.current.value) {
            alert("Please fill in all fields.");
            return;
        }
        console.log(user_role);
        axios.post(("http://localhost:8520/adduser"), {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            contact: contact.current.value,
            userRole: user_role.current.value,
            projectId:{pId:projectid.current.value}
        }).then(response => {
            console.log(response.data);
            alert("user added successfully");
        }).catch(err => { alert("Error") });
        navigate("/login");
    }
    return (
        <>
            <div className="container mt-5 " style={{ marginBottom: 100 }}>
                <div className="row justify-content-center">
                    <div className="col-md-5 shadow pt-1">
                        <h1 className="mt-5 mb-4">Registration Form</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullName" ref={name} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" ref={email} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" ref={password} required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contact</label>
                                <input type="number" className="form-control" id="password" ref={contact} required />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Project Id</label>
                                <input type="number" className="form-control" id="password" ref={projectid} required />
                            </div>

                            <div classname="input-group mb-3">
                                <label htmlFor="password" className="form-label">
                                    User Type
                                </label>
                                <br></br>
                                <select
                                    classname="form-select"
                                    id="inputGroupSelect04"
                                    aria-label="Example select with button addon"
                                    ref={user_role}
                                    required
                                >
                                    <option selected="">Choose...</option>
                                    <option value="CLIENT">Client</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </div>
                            <br></br>
                            <button type="submit" onClick={handleRegister} className="btn btn-primary mb-3">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
