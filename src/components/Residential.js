import React from 'react'

export default function Residential() {
  return (
    <>
      <div className="cantainer">
        {/*img-start*/}
        <div className="row" style={{ marginBottom: 5 }}>
          <div>
            <div>
              <h1>Residential</h1>
            </div>
            <img src={require('../images/Residential1.jpg')} style={{ width: "100%" }} alt="" />

          </div>
        </div>
        {/*img-end*/}
        {/*overview-start*/}
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <b><u><p className='mb-4 fs-2'>Overview</p></u></b>
            <p className='fs-4'>
              Residential construction is different than commercial construction,
              because these buildings are used for people to live in instead of
              working in. While many people think that single family homes are
              residential construction, the category also includes multi-family homes,
              apartments, condominiums, and even mobile homes.
              <br />
              <br />
              For each residential construction project, a piece of land is purchased,
              cleared, and graded. The drainage and other features are added and then
              the construction of the building takes place. Once the home is finished,
              a person moves in and the contractor moves on to their next project.
              <br />
              <br />
              This type of construction is quite lucrative right now, which means that
              contractors need to keep everything moving forward or they risk losing
              out on future projects. They need to continuously look for new land,
              always keep a list of qualified workers on hand, know where they can
              find materials at competitive prices, and have enough money to cover all
              their costs until each home is finished.
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
                  <li>Apartments</li>
                  <li>TownHouse</li>
                </ul>
              </div>
              <div className="col-xl-6">
                <ul>
                  <li>Lodging</li>
                  <li>Duplex</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*highlights-end*/}

        {/*key projects-start*/}
        <div className="container">
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
                            src={require('../images/Resedential3.jpg')}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="col-4">
                          <img
                            src={require('../images/Resedential3.jpg')}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="col-4">
                          <img
                            src={require('../images/Resedential3.jpg')}
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
                            src={require('../images/Resedential3.jpg')}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="col-4">
                          <img
                            src={require('../images/Resedential3.jpg')}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="col-4">
                          <img
                            src={require('../images/Resedential3.jpg')}
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
                            src={require('../images/Resedential3.jpg')}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="col-4">
                          <img
                            src={require('../images/Resedential3.jpg')}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="col-4">
                          <img
                            src={require('../images/Resedential3.jpg')}
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
