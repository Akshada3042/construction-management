import React from 'react'
import VideoCompo from '../videos/VideoCompo'

export default function Home() {
    return (
        <>
            <div className="container-fluid">
                {/* video start */}
                <div className="row mb-5 mt-3" >
                    <div>
                        <VideoCompo></VideoCompo>
                    </div>
                    {/* <img src={require('../images/COmmercial4.jpg')} alt="img" /> */}
                </div>
                {/* video end */}
                {/* Sector start */}
                <div className="row">
                    <div style={{ backgroundColor: "#002366", height: 400 }} className='mb-5'>
                        <div style={{ marginLeft: 50, height: 90 }}>
                            <h1>
                                <strong style={{ color: "white" }}>Sectors</strong>
                            </h1>
                        </div>
                        <div id="carouselExample" className="carousel" data-bs-ride="carousel"
                            data-bs-interval={6000}>
                            <div className="carousel-inner">
                                <div className="carousel-item active ">
                                    <div className="row">
                                        <div className="col-xl-5" style={{ marginLeft: 100 }}>
                                            <img
                                                src={require('../images/Commercial3.jpg')}
                                                className="d-block w-50 "
                                                alt="..."
                                                style={{ height: 270, width: "900%", marginLeft: 200 }}
                                            />
                                        </div>
                                        <div
                                            className="col-xl-5"
                                            style={{ color: "white", marginTop: 50, marginRight: 60 }}
                                        >
                                            <h1>Industrial</h1>
                                            <br />
                                            <h5>
                                                The main objects of Vedanand Constructions is to carry on the business of building promoters, land developers, builders, contractor & all types of construction embankments, irrigation canals, residential colonies, industrial shed & estate factories & other buildings.
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-xl-5" style={{ marginLeft: 100 }}>
                                        <img
                                            src={require('../images/Government2.jpg')}
                                            className="d-block w-50"
                                            alt="..."
                                            style={{ height: 270, width: "900%", marginLeft: 200 }}
                                        />
                                    </div>
                                    <div
                                        className="col-xl-5"
                                        style={{ color: "white", marginTop: 50, marginRight: 60 }}
                                    >
                                        <h1>Commersial</h1>
                                        <br />
                                        <h5>
                                            The main objects of Vedanand Constructions is to carry on the business of building promoters, land developers, builders, contractor & all types of construction such as residential colonies, apartments, twin bunglows.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-xl-5" style={{ marginLeft: 100 }}>
                                        <img
                                            src={require('../images/Resedential3.jpg')}
                                            className="d-block w-50"
                                            alt="..."
                                            style={{ height: 270, width: "900%", marginLeft: 200 }}
                                        />
                                    </div>
                                    <div
                                        className="col-xl-5"
                                        style={{ color: "white", marginTop: 50, marginRight: 60 }}
                                    >
                                        <h1>Residential</h1>
                                        <br />
                                        <h5>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                                            recusandae facilis quia, fuga consequatur a, id sunt repudiandae
                                            officiis fugit natus voluptates tenetur libero consectetur quod
                                            earum possimus. Inventore, dicta!
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                {/* sectore end */}
                {/* landmark start */}
                <div className="row">
                    <h2 style={{ marginBottom: "2%" }}>Landmark Projects</h2>
                    <div
                        style={{ margin: 10 }}
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval={4000}
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
                        <div className="row">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-4">
                                            <img
                                                src={require('../images/Infrastructure2.jpg')}
                                                className="d-block w-100 shadow-lg p-1"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-4">
                                            <img
                                                src={require('../images/Industry3.jpg')}
                                                className="d-block w-100 shadow-lg p-1"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-4">
                                            <img
                                                src={require('../images/Government4.jpg')}
                                                className="d-block w-100 shadow-lg p-1"
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
                                                className="d-block w-100 shadow-lg p-1"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-4">
                                            <img
                                                src={require('../images/Commercial2.jpg')}
                                                className="d-block w-100 shadow-lg p-1"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-4">
                                            <img
                                                src={require('../images/Commercial3.jpg')}
                                                className="d-block w-100 shadow-lg p-1"
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-4">
                                            <img
                                                src={require('../images/img2.jpg')}
                                                className="d-block w-100 shadow-lg p-1"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-4">
                                            <img
                                                src={require('../images/Resedential3.jpg')}
                                                className="d-block w-100 shadow-lg p-1"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-4">
                                            <img
                                                src={require('../images/Commercial3.jpg')}
                                                className="d-block w-100 shadow-lg p-1"
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
                {/* landmarks end */}
                {/* about start */}
                <div className="row mb-5" style={{ marginTop: 60, backgroundColor: "white" }}>
                    <div className="col-xl-5">
                        <img
                            style={{ width: 400, height: 400, marginLeft: 100 }}
                            src={require('../images/AboutImg.jpeg')}
                            className="image shadow-lg p-1"
                            alt=""
                        />
                    </div>
                    <div className="col-xl-6">
                        <div className="r2">
                            <h2>
                                <b>About Us</b>
                            </h2>
                            <br />
                            <p className='fs-5'>
                                With SCON on your side, Your projects are in safe &amp; capable hands!
                                SCON boasts a team of certified construction experts whose diverse
                                backgrounds in handling industrial, commercial, and institutional
                                projects ensure that all projects are managed and executed with utmost
                                professionalism, consistently surpassing our clients’ expectations
                                upon delivery.
                                <br />
                                <br /> Thus, we are known as the “One Stop Service Provider” for
                                CIVIL, PEB, HVAC &amp; MEP projects.{" "}
                            </p>

                        </div>
                    </div>
                </div>
                {/* about end */}

            </div>
        </>
    )
}
