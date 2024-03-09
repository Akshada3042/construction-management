import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function EmployeesAd() {
    const navigate = useNavigate();
    const eName = useRef();
    const ePosition = useRef();
    const eAddress = useRef();
    const eContact = useRef();
    const [employees, setEmployees] = useState([]);


    const handleEmployeeDetails = () => {

        axios.post(("http://localhost:8520/addEmployee"), {
            eName: eName.current.value,
            ePosition: ePosition.current.value,
            eAddress: eAddress.current.value,
            eContact: eContact.current.value,
        }).then(response => {
            console.log(response.data);
            alert("Employee details added successfully");
        }).catch(err => { alert("Error") });
        navigate("/employeead");
    }


    useEffect(() => {
        axios.get("http://localhost:8520/getallEmployee").then((response) => {
            console.log(response.data);
            setEmployees(response.data);
        }).catch(() => {
            console.log('Error');
        });
    }, []);
    return (
        <div className="container-fluid">
            <div className="row mb-5">
                <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Employees</h2>
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
                                Employee Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfConstruction"
                                ref={eName}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Employee Position
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfOwner"
                                ref={ePosition}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Employee Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfOwner"
                                ref={eAddress}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Employee Contact
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfOwner"
                                ref={eContact}
                            />
                        </div>
                        <button type="submit" onClick={handleEmployeeDetails} className="btn btn-success mt-3 mb-5 me-5">
                            Submit
                        </button>
                    </form>
                    <div className="row mb-5">
                        <table className="table table-striped table-hover border border-solid shadow p-3">
                            <thead className='border border-secondary'>
                                <tr >
                                    <th scope="col">EMPLOYEE ID</th>
                                    <th scope="col">EMPLOYEE NAME</th>
                                    <th scope="col">EMPLOYEE POSITION</th>
                                    <th scope="col">EMPLOYEE ADDRESS</th>
                                    <th scope="col">EMPLOYEE CONTACT</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    employees.map((employee) => {
                                        return (
                                            <tr>
                                                <td>{employee.empId}</td>
                                                <td>{employee.eName}</td>
                                                <td>{employee.ePosition}</td>
                                                <td>{employee.eAddress}</td>
                                                <td>{employee.eContact}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}