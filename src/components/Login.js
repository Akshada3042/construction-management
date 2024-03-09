import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useRef, useState } from 'react'
import { Await, Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();

    const mail = useRef();
    const pass = useRef();
    const [role, setRole] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();
        sessionStorage.setItem('mailkey',mail.current.value);
        console.log(mail.current.value, pass.current.value);
        const response = await axios.post("http://localhost:8520/login", {
            email: mail.current.value,
            password: pass.current.value

        });
        console.log(response.data);
        setRole(response.data);

        console.log(role);
        if (response.data === 'ADMIN') {
            Cookies.set('authenticated', true);
            Cookies.set('isAdmin', true);
            navigate("/first");
            window.location.reload();
        }
        else if (response.data === 'CLIENT') {
            Cookies.set('authenticated', true);
            Cookies.set('isUser', true);
            navigate("/progress");
            window.location.reload();
        }
        else {
            console.log("not authenticated");
        }
    }
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card shadow pt-1">
                            <div className="card-header">
                                <h2 className="text-center">Login Form</h2>
                            </div>
                            <div className="card-body">
                                <form >
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email:
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"

                                            ref={mail}
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3" style={{ alignItems: "center" }}>
                                        <label htmlFor="password" className="form-label">
                                            Password:
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"

                                            ref={pass}
                                            required=""
                                        />
                                    </div>

                                    <br></br>
                                    <div className="row">
                                        <div className="col-xl-6 ">
                                            <button type='submit' className="btn btn-primary" onClick={handleSubmit} >
                                                Login
                                            </button>
                                            <br></br>
                                            <br></br>
                                            <Link className="link-opacity-100" to="#">Forget Password</Link>
                                        </div>
                                        <div className="col-xl-6">
                                            <br></br>
                                            <label htmlFor="email" className="form-label">
                                                If You Are New!!
                                            </label>
                                            <br></br>
                                            <Link class="link-opacity-100" to="/signup">Sign Up Here</Link>

                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    )
}