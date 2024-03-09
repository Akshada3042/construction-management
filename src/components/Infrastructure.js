import React from 'react'

export default function Infrastructure() {
    return (
        <>
            <div className="cantainer">
                {/*img-start*/}
                <div className="row" style={{ marginBottom: 20 }}>
                    <div className="col-xl-12">
                        <div>
                            <h1>Infrastructure</h1>
                        </div>
                        <img src={require('../images/Infrastructure4.jpg')} style={{ width: "100%" }} alt="" />

                    </div>
                </div>
                {/*img-end*/}
                {/*overview-start*/}
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <b><u><p className='mb-4 fs-2'>Overview</p></u></b>
                        <p className='fs-4'>
                            As one of the leading infrastructure companies in India, we are fully
                            aware of the challenges and requirements of this sector. We tackle all
                            aspects of the infrastructure projects including engineering,
                            construction, project management and contracting. We understand that
                            when it comes to building solid and unique projects governments and
                            companies want a highly trustworthy and reliable partner who is capable
                            of offering exceptional construction designing &amp; development
                            services.
                            <br />
                            <br />
                            Our team of highly experienced, qualified and knowledgeable engineers
                            focuses on understanding the specific requirements of the clients and
                            deliver projects exactly as per their requirements. We ind11ulge in a
                            great deal of brainstorming to come up with fresh, innovative and
                            exciting ideas for the infrastructure sector.
                            <br />
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
                                    <li>Bridges</li>
                                    <li>Tunnels</li>
                                </ul>
                            </div>
                            <div className="col-xl-6">
                                <ul>
                                    <li>Highway</li>
                                    <li>Roads</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
                                                        src={require('../images/Infrastructure2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Infrastructure2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Infrastructure2.jpg')}
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
                                                        src={require('../images/Infrastructure2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Infrastructure2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Infrastructure2.jpg')}
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
                                                        src={require('../images/Infrastructure2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Infrastructure2.jpg')}
                                                        className="d-block w-100"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <img
                                                        src={require('../images/Infrastructure2.jpg')}
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
