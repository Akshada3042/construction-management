import React from 'react'

export default function Job() {
    return (
        <>
            <div className="row mb-5">
                <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Careers</h2>
            </div>
            <div class="container ">
                <div class="row align-items-start">
                    <div class="col-xl-6">
                        <h2>Job Description</h2>
                        Job Title : Engineer
                        <br />
                        Role : Site Supervisor
                        <br />
                        Experience : 2 years
                        <br />
                        Qualification :  BE / B-Tech / M-Tech in Civil Engineering
                        Safety/M-Tech Industrial Safety



                    </div>
                    {/* Application form start */}
                    <div class="col-xl-6">
                        <>
                            <div className="container-fluid">

                                <div className="row mb-5">
                                    <div className="row shadow pt-1 ">
                                        <form>
                                            <div className="mb-3">
                                                <img src={require('../images/vc-logo-3.png')} alt="img" />
                                                <br></br>
                                                <br></br>
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="nameOfOwner"
                                                    />
                                                </div>
                                                <label className="form-label">
                                                    Job Title
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nameOfConstruction"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Contact Number
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nameOfOwner"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Experience
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="nameOfOwner"
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
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Resume
                                                </label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="fileUpload"
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-success mt-3 mb-5 me-5">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>
                    {/* Application form end */}

                </div>
            </div>
        </>
    )
}
