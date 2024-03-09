import React, { useEffect, useState } from 'react'
import '../component-css/career.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
export default function Career() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8520/getall").then((response) => {
            console.log(response.data);
            setJobs(response.data);
        }).catch((error) => { console.log(error); });
    }, []);


    return (
        <>
            <div className="container-fluid">
                {/*img-start*/}
                <div className="row mt-4" style={{ marginBottom: 20 }}>
                    <div>
                        <img src={require('../images/career.jpg')} style={{ width: "100%" }} alt="" />
                    </div>
                </div>
                {/*img-end*/}
                {/*life-at-company-start*/}
                <div className="row justify-content-center" >
                    <div className="col-xl-10">
                        <b><u><p className='mb-4 fs-2'>Life At Vedanand Constructions</p></u></b>
                        <p style={{ textIndent: 40 }} className='fs-4 mb-5'>
                            At Vedanand Construction, we are always striving to build skilled and
                            competent teams that keep us ahead in business. We have built teams that
                            trust one another, focus on common goals, and work towards achieving
                            them. Thus we hire people who are team players and clear thinkers with
                            an ability to simplify problems.
                            <br />
                            <br />
                            A challenging atmosphere and work-profile which promises amazing growth opportunities and experience.
                            The chance to work with one of the most dynamic team in the field of constructions.
                            A project completed, a new and prestigious project bagged, the company’s annual day; VC does not miss a single opportunity to put a smile on its member’s face.
                        </p>
                        {/*life-at-company-end*/}
                        <div className="row titlehead mb-4">
                            <h3><b>What Are We Looking For?</b></h3>
                        </div>

                        {/*table-start*/}
                        <div className="row mb-5">
                            <table className="table table-striped table-hover border border-solid shadow p-3">
                                <thead className='border border-secondary'>
                                    <tr >
                                        <th scope="col">JOB ID</th>
                                        <th scope="col">JOB TITLE</th>
                                        <th scope="col">LOCATION</th>
                                        <th scope="col">EXPRIENCE</th>
                                        <th scope="col">ROLE</th>
                                        <th scope="col">POSITIONS</th>
                                        <th scope="col">APPLY</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        jobs.map((job) => {
                                            console.log(job);
                                            return (

                                                <tr>
                                                    <td>{job.jobId}</td>
                                                    <td>{job.title}</td>
                                                    <td>{job.location}</td>
                                                    <td>{job.experience}</td>
                                                    <td>{job.role}</td>
                                                    <td>{job.position}</td>
                                                    <td><Link class="link-opacity-100" to="/job">Click Here</Link></td>
                                                </tr>
                                            )
                                        })


                                    }


                                </tbody>
                            </table>
                        </div>
                        {/*table-end*/}
                    </div>
                </div>
            </div>

        </>
    )
}
