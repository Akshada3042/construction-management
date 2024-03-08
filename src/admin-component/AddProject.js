import React from 'react'

export default function AddProject() {
    return (
        <div className="container-fluid">
            <div className="row">
                <h1 className='fs-1 fw-bold mt-3 mb-5 shadow pt-3 lh-base'>ADD NEW PROJECT</h1>
            </div>

            <div className="row justify-content-center mb-5">
                <div className="col-xl-8 shadow pt-1 ">
                    <form>
                        <div className="mb-3">

                            <br></br>
                            <label className="form-label fs-5 fw-bold">
                                Name of Construction
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfConstruction"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 fw-bold">
                                Name Of Owner
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfOwner"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 fw-bold">
                                Address of Site
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfOwner"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 fw-bold">
                                Construction Started On
                            </label>
                            <br />
                            <input type="date" id="DOB" name="DOB" />

                        </div>
                        <button type="submit" className="btn btn-success mt-3 mb-5 me-5">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}