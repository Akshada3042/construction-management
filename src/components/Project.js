import React from 'react'

export default function Project() {
    return (
        <>
            <div className="cantainer">
                {/*img-start*/}
                <div className="row" style={{ marginBottom: 5 }}>
                    <div>
                        <img src={require('../images/OurProject.jpg')} style={{ width: "100%" }} alt="" />
                    </div>
                </div>
                {/*img-end*/}
                {/*project start*/}
                <h1 style={{ textAlign: "center" }}><b>Projects</b></h1>
                <div className="row mb-5 mt-5">
                    <div className="col-xl-10" style={{ marginLeft: "38%" }}>
                        <button type="button" className="btn btn-primary btn-lg">
                            Ongoing Project
                        </button>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <button type="button" className="btn btn-primary btn-lg">
                            Completed Project
                        </button>
                    </div>
                </div>
                {/*projects-end*/}

               
            </div>

        </>
    )
}
