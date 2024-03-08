import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CareerAd() {
    const [jobs, setJobs] = useState([]);

    const navigate = useNavigate();
    const title = useRef();
    const location = useRef();
    const experience = useRef();
    const role = useRef();
    const position = useRef();

    const handleCareerDetails = () => {
        axios.post(("http://localhost:8520/addJob"), {
            title: title.current.value,
            location: location.current.value,
            experience: experience.current.value,
            role: role.current.value,
            position: position.current.value
        }).then(response => {
            console.log(response.data);
            console.log(response.data);
            alert("careerdetails added successfully");
            navigate("/careers-ad");
        }).catch(err => { alert("Error") });
       
    }

    useEffect(() => {
        axios.get("http://localhost:8520/getall").then((response) => {
            console.log(response.data);
            setJobs(response.data);
        }).catch((error) => { console.log(error); });
    }, [])
    return (
        <div className="container-fluid">
            <div className="row mb-5">
                <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Careers</h2>
            </div>
            <div className="row justify-content-center mb-5">
                <div className="col-xl-8 shadow pt-1 ">
                    <form>
                        <div className="mb-3">
                            <label className="form-label fs-4 fw-bold">
                                Details
                            </label>
                            <br></br>
                            <label className="form-label">
                                Job Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfConstruction"
                                ref={title}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Job Location
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfOwner"
                                ref={location}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Experience
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfOwner"
                                ref={experience}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Job Role
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfOwner"
                                ref={role}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Positions
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfOwner"
                                ref={position}
                            />
                        </div>
                        <button type="submit" onClick={handleCareerDetails} className="btn btn-success mt-3 mb-5 me-5">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-9 mb-5">

                    <table className="table table-striped table-hover border border-solid shadow p-3">
                        <thead className='border border-secondary'>
                            <tr >
                                <th scope="col">JOB ID</th>
                                <th scope="col">JOB TITLE</th>
                                <th scope="col">LOCATION</th>
                                <th scope="col">EXPRIENCE</th>
                                <th scope="col">ROLE</th>
                                <th scope="col">POSITIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobs.map((job) => {
                                    return (
                                        <tr>
                                            <td>{job.jobId}</td>
                                            <td>{job.title}</td>
                                            <td>{job.location}</td>
                                            <td>{job.experience}</td>
                                            <td>{job.role}</td>
                                            <td>{job.position}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
