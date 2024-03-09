import React from 'react'

export default function Government() {
    return (
        <>
            <div className="cantainer">
                {/*img-start*/}
                <div className="row" style={{ marginBottom: 20 }}>
                    <div>
                        <div>
                            <h1>Government</h1>
                        </div>
                        <img src={require('../images/Government3.jpg')} style={{ width: "100%" }} alt="" />

                    </div>
                </div>
                {/*img-end*/}
                {/*overview-start*/}
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <b><u><p className='mb-4 fs-2'>Overview</p></u></b>
                        <p className='fs-4'>
                            Government buildings means all buildings, structures, streets,
                            sidewalks, walkways, and access thereto, which are used by the public or
                            in which persons with disabilities or elderly persons may be employed,
                            that are constructed, leased, or renovated in whole or in part by use of
                            state, county, or municipal funds or the funds of any political
                            subdivisions of the state, and, to the extent not required otherwise by
                            federal law or regulations and not beyond the power of the state to
                            regulate, all buildings and structures used by the public which are
                            constructed or renovated in whole or in part by use of federal funds.
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
                                    <li>Parliament Building </li>
                                    <li> Assembly </li>
                                </ul>
                            </div>
                            <div className="col-xl-6">
                                <ul>
                                    <li>Raj Bhavan</li>
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
                                                        src={require('../images/Government2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Government4.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Government2.jpg')}
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
                                                        src={require('../images/Government2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Government2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Government2.jpg')}
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
                                                        src={require('../images/Government2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Government2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Government2.jpg')}
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
