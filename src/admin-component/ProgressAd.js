import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

export default function ProgressAd() {
  const phase = useRef();
  const mName = useRef();
  const quant = useRef();
  const mPrice = useRef();
  const sitename = useRef();
  const siteaddress = useRef();
  const sitestartdate = useRef();

  const percentage = useRef();
  const [pstatus, setPstatus] = useState('');
  var pid = sessionStorage.getItem('projectId');
  console.log(pid);
  const handleMaterialDetails = () => {

    axios.post(("http://localhost:8520/addMaterial"), {
      mName: mName.current.value,
      mPrice: mPrice.current.value,
      quantity: quant.current.value,
      projectId: { pId: pid }
    }).then(response => {
      console.log(response.data);
      alert("careerdetails added successfully");
      navigate("/addmaterial");
    }).catch(err => { alert("Error") });

  }

  const handleSiteDetails = () => {

    axios.post(("http://localhost:8520/addSiteDetails"), {
      siteName:sitename.current.value,
      siteLocation:siteaddress.current.value,
      date:sitestartdate.current.value,
      projectId: { pId: pid }

    }).then(response => {
      console.log(response.data);
      alert("careerdetails added successfully");
    }).catch(err => { alert("Error") });
  };
  const handlePhase = () => {
    let status;
    if (percentage.current.value > 0 && percentage.current.value < 100) {
      status = "Ongoing";
    } else if (percentage.current.value == 0) {
      status = "pending";
    } else {
      status = "completed";
    }
    setPstatus(status);

    axios.post("http://localhost:8520/addpsdetails", {
      pStageName: phase.current.value,
      percentage: percentage.current.value,
      status: status,
      projectId: { pId: pid }

    })
      .then(response => {
        console.log(response.data);
        alert("careerdetails added successfully");

      })
      .catch(err => {
        alert("Error");
      });
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Progress</h2>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-xl-8 shadow pt-1 ">
            <form>
              <div className="mb-3">
                <label className="form-label fs-4 fw-bold">
                  Details of Site
                </label>
                <br></br>
                <label className="form-label">
                  Name Of Construction
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameOfConstruction"
                  ref={sitename}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Address of Site
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addressOfSite"
                  ref={siteaddress}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Construction Started On
                </label>
                <div className='row shadow p-1' style={{ width: 250 }}>
                  <input type='date' className='form-control' ref={sitestartdate} />
                </div>
              </div>
              <br></br>
              <button type="button" onClick={handleSiteDetails} className="btn btn-success mt-3 mb-5 me-5">
                Site Details
              </button>
              <br></br>
              <br></br>
              <label className="form-label fs-4 fw-bold">
                Ongoing Phase
              </label>
              <br></br>
              <label className="form-label">
                Current Phase
              </label>
              <br></br>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  ref={phase}
                >
                  <option selected="">Choose...</option>
                  <option value={"Design"}>Design</option>
                  <option value={"Land & Foundation"}>Land & Foundation</option>
                  <option value={"Mechanical"}>Mechanical</option>
                  <option value={"Electrical"}>Electrical</option>
                  <option value={"Plumbing"}>Plumbing</option>
                  <option value={"Waterprofing"}>Waterprofing</option>
                  <option value={"Coloring"}>Coloring</option>
                  <option value={"Finishing"}>Finishing</option>
                </select>
              </div>
              <br></br>
              <label className="form-label ">
                Design of Current Phase
              </label>
              <br></br>
              <div className="input-group mb-3">
                <input type="file" className="form-control" id="inputGroupFile02" />
              </div>
              <br></br>
              <br></br>
              <label className="form-label">
                Select Percentage of Completion
              </label>
              <br></br>

              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  ref={percentage}
                >
                  <option selected="">Choose...</option>
                  <option value={0}>0%</option>
                  <option value={20}>20%</option>
                  <option value={40}>40%</option>
                  <option value={50}>50%</option>
                  <option value={60}>60%</option>
                  <option value={80}>80%</option>
                  <option value={100}>100%</option>
                </select>
              </div>

              <br></br>
              <button type="button" onClick={handlePhase} className="btn btn-success mt-3 mb-5 me-5">
                Add Phase Details
              </button>
              <br></br>
              {/* ------------------------------------------ =================================*/}
              <div className="row mb-5">
                <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Materials</h2>
              </div>
              <div className="row justify-content-center mb-5">

                <form>
                  <div className="mb-3">
                    <label className="form-label fs-4 fw-bold">
                      Details
                    </label>
                    <br></br>
                    <label className="form-label">
                      Material Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameOfConstruction"
                      ref={mName}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Material Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameOfOwner"
                      ref={mPrice}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Material quantity
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameOfOwner"
                      ref={quant}
                    />
                  </div>
                  <button type="submit" onClick={handleMaterialDetails} className="btn btn-success mt-3 mb-5 me-5">
                    Submit
                  </button>
                </form>


              </div>
              {/* =============================================================================================== */}
              <br></br>
              <label className="form-label fs-4 fw-bold">
                Working Team
              </label>
              <br></br>
              <br></br>
              {/* <label className="form-label">
                Select position
              </label> */}
              {/* <br></br>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect06"
                  aria-label="Example select with button addon"
                >
                  <option selected="">Choose...</option>
                  <option value={1}>Manager</option>
                  <option value={2}>Ass-Manager</option>
                  <option value={3}>Site Engineer</option>
                  <option value={4}>Architect</option>
                </select>
              </div>
              <br></br> */}
              <br></br>
              <label className="form-label">
                Select Employee
              </label>
              <br></br>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect07"
                  aria-label="Example select with button addon"
                >
                  <option selected="">Choose...</option>
                  <option value={1}>Abhijit</option>
                  <option value={2}>Akshada</option>
                  <option value={3}>Aditya</option>
                  <option value={4}>Amar</option>
                </select>
              </div>
              <br></br>
              <button type="button" className="btn btn-success mt-3 mb-5 me-5">
                Add
              </button>
              <br></br>

            </form>
          </div>
        </div>

      </div>
    </>
  )
}
