import React from 'react'

export default function Industrial() {
    return (
        <>
            <div className="cantainer-fluid">
                {/*img-start*/}
                <div className="row" style={{ marginBottom: 20 }}>
                    <div className="col-xl-12">
                        <div>
                            <h1>Industrial</h1>
                        </div>
                        <img src={require('../images/Industry1.jpg')} style={{ width: "100%" }} alt="" />

                    </div>
                </div>
                {/*img-end*/}
                {/*overview-start*/}
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <b><u><p className='mb-4 fs-2'>Overview</p></u></b>
                        <p className='fs-4'>
                            Industry construction, or industrial construction, is one of the four
                            main types of construction projects. It refers to the building of
                            structures that are going to be used for the industrial branch of
                            manufacturing hence the name.
                            <br />
                            <br />
                            Some examples of these types of buildings include manufacturing
                            facilities, heavy industrial buildings and power plants. Industrial
                            construction also includes repairing, renovating, and generally
                            improving pre-existing buildings. It does not only refer to constructing
                            them from the ground up.
                        </p>
                    </div>
                </div>
                {/*overview-end*/}
                {/*highlights-start*/}
                <div className="row justify-content-center">
                    <div className="col-xl-10">

                        <b><u><p className='mb-4 fs-2'>Key highlights</p></u></b>
                        <br />
                        <div className="row fs-4">
                            <div className="col-xl-6">
                                <ul>
                                    <li>factories</li>
                                    <li>manufacturing plants</li>
                                </ul>
                            </div>
                            <div className="col-xl-6">
                                <ul>
                                    <li>power plants</li>
                                    <li>farmhouses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*highlights-end*/}

                {/*highlights-end*/}
                {/*key projects-start*/}
                <div className="container" style={{ marginTop: "1%", marginBottom: "1%" }}>
                    <div className="row" style={{ margin: 20 }}>
                        <h2 style={{ marginBottom: "2%" }}>Key Projects</h2>
                        <div
                            style={{ margin: 10 }}
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-bs-ride="carousel"
                            data-bs-interval={2000}
                        >
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={0}
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={2}
                                    aria-label="Slide 3"
                                />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Industry2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Industry2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Industry2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Industry2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Industry2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Industry2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>{" "}
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Industry2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Industry2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Industry2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*key projects-end*/}
                    </div>
                </div>
            </div>

        </>
    )
}
