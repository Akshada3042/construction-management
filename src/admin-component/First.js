
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function First() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8520/getAllProjects").then((response) => {
            console.log(response.data);
            setProjects(response.data);
        }).catch((error) => { console.log(error); });
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="row mb-5">
                        <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Projects</h2>
                    </div>
                </div>
                <div className="row  mb-5">
                    <div className="row">
                        <div className="col-xl-2">
                            <Link to="/progress-ad">
                                <button type="button" className="btn btn-outline-primary">Add Project</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <table className="table table-bordered mb-5" style={{ fontSize: '20px', margin: 'auto', textAlign: 'center' }}>
                        <tbody>
                            <tr className="table-primary">
                                <th scope="col" style={{ width: 170 }}>Project ID</th>
                                <th scope="col" style={{ width: 250 }}>Project Name</th>
                                <th scope="col" style={{ width: 200 }}>Project Satus</th>
                                <th scope="col" style={{ width: 200 }}>Update</th>
                                <th scope="col" style={{ width: 200 }}>Current Phase</th>
                                <th scope="col">Progress</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                projects.map((project) => (
                                    <tr key={project.pId}>
                                        <th scope="row">{project.pId}</th>
                                        <td>{project.pName}</td>
                                        <td>Completed</td>
                                        <td>
                                            <div className="dropdown">
                                                <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Select
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" onClick={()=>{sessionStorage.setItem("projectId",project.pId)}}>
                                                    <li><Link className="dropdown-item" to="/progress-ad">Progress</Link></li>
                                                    <li><Link className="dropdown-item" to="/design-ad">Design</Link></li>
                                                    <li><Link className="dropdown-item" to="/accounts-ad">Accounts</Link></li>
                                                    <li><Link className="dropdown-item" to="/document-ad">Documents</Link></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                Current phase
                                            </div>
                                        </td>
                                        <td>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                    role="progressbar"
                                                    style={{ width: "50%" }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }



                        </tbody>

                    </table>

                </div>
            </div>
        </>
    )
}
