import axios from 'axios';
import React, { useRef } from 'react'

export default function DesignAd() {

  var projectId = sessionStorage.getItem('projectId');
  console.log(projectId);
  const layout = useRef();
  const imagefile = useRef();
  const registerHandle = () => {
    const formData = new FormData();
    formData.append('category', layout.current.value);
    formData.append('projectId.pId', projectId);
    formData.append('img', imagefile.current.files[0]);


    axios.post("http://localhost:8520/addImage", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => {
        console.log(res.data);
        alert("data inserted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Design</h2>
        </div>
        <div className="row justify-content-center mb-5">

          <div className="col-xl-8 shadow pt-1 ">

            <br></br>
            <label className="form-label fs-4 fw-bold center">
              Designs
            </label>
            <form>
              <div className="mb-3">

                <label className="form-label fs-5 ">
                  Select Layout
                </label>
                <div className="input-group mb-5">
                  <select
                    className="form-select"
                    id="inputGroupSelect04"
                    ref={layout}
                    aria-label="Example select with button addon"
                  >
                    <option selected="">Choose...</option>
                    <option value={"siteplan"}>Site Plan</option>
                    <option value={"layout"}>3D layout</option>
                    <option value={"interior"}>Interior</option>
                    <option value={"Elevation"}>Elevation</option>
                    <option value={"SiteImages"}>Site Images</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fs-5">
                  Layouts
                </label>
                <br></br>
                <div className="input-group mb-3">
                  <input type="file" className="form-control" id="inputGroupFile02" ref={imagefile} />
                  <label className="input-group-text" htmlFor="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>
              <br></br>
              <button type="submit" className="btn btn-success mt-3 mb-5 me-5" onClick={registerHandle}>
                Submit
              </button>

            </form>
          </div>
        </div>

      </div>
    </>
  )
}
