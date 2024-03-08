import React from 'react'

export default function Commercial() {
    return (
        <>
            <div className="container-fluid">
                {/*img-start*/}
                <div className="row" style={{ marginBottom: 20 }}>
                    <div>
                        <div>
                            <h1>Commercial</h1>
                        </div>
                        <img src={require('../images/COmmercial4.jpg')} style={{ width: "100%" }} alt="" />

                    </div>
                </div>
                {/*img-end*/}
                {/*overview-start*/}
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <b><u><p className='mb-4 fs-2'>Overview</p></u></b>
                        <p className='fs-4'>
                            Our approach to commercial real estate website design and development is
                            a detailed process ensuring that all the appropriate materials are
                            collected and timelines are met. The website development process is
                            important for building the website your business needs and for
                            identifying the key service offerings you want to highlight. We only
                            build custom-coded web designs so you’ll never get one of the cookie
                            cutter layouts that the competition is using.
                            <br />
                            <br />
                            A commercial property is defined as a building, structures and
                            improvements located on a parcel of commercial real estate intended to
                            generate a profit. Touring different properties and considering their
                            use can help prepare you to accurately price and develop a general
                            procedure for your commercial property inspections.
                            <br />
                            <br />
                            When it comes to railways and metros, we excel in executing complex
                            projects that involve the construction of stations, tunnels, track
                            works, MEP systems, electrification, substations, and signalling. We
                            have a proven track record of success in these areas.
                            <br />
                            <br />
                            Additionally, we offer comprehensive EPC (Engineering, Procurement, and
                            Construction) solutions for highways, expressways, bridges, and tunnels.
                            Our strategic approach ensures that we align with market opportunities
                            and prioritize high-value projects with esteemed clients, ultimately
                            driving sustainable and profitable growth.
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
                                    <li>Office Buildings</li>
                                    <li>Retail</li>
                                </ul>
                            </div>
                            <div className="col-xl-6">
                                <ul>
                                    <li>Restaurants</li>
                                    <li>Warehouses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*highlights-end*/}

                {/*highlights-end*/}
                {/*key projects-start*/}
                <div className="container" style={{ marginTop: "2%" }}>
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
                                                        src={require('../images/Commercial1.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Commercial1.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Commercial1.jpg')}
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
                                                        src={require('../images/Commercial1.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Commercial1.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Commercial1.jpg')}
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
                                                        src={require('../images/Commercial1.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Commercial1.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Commercial1.jpg')}
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
