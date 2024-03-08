import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Design() {

  const [img, setImg] = useState([]);
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
    axios.get('http://localhost:8520/getImageByCat/' + e.target.value,
      { responseType: 'arraybuffer' })
      .then(response => {
        console.log(response.data);
        console.log(typeof response.data)
        const blobimg = new Blob([response.data], { type: 'image/jpg' });
        console.log(typeof blobimg);
        const imgURL = URL.createObjectURL(blobimg);
        setImg(imgURL);
        return () => URL.revokeObjectURL(imgURL);
      }).catch((err) => {
        console.log(err);
      })
  }
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="mb-3">

            <label className="form-label fs-1 fw-bold ">
              Select Layout
            </label>
            <div className="input-group mb-2" style={{ width: '200px' }}>
              <select
                className="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                value={value}
                onChange={handleChange}
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
          <div className="row mt-5 mb-5" >
          <div className="col-xl-8">
  {(() => {
    console.log("img:", img);
    console.log("Default image path:", require('../images/default.png'));
    if (img != null) {
      return (
        <img
          src={img}
          alt=""
          width="700"
          height="500"
          className='shadow pt-1'
        />
      );
    } else{
      console.log("Default image path:", require('../images/default.png'));
      return (
        <img
          src={require('../images/default.png')}
          alt="Default Image"
          width="700"
          height="500"
          className='shadow pt-1'
        />
      );
    }
  })()}
</div>

            <div className="col-xl-4">

              <div className="row fs-1 fw-bold " style={{ display: 'flex', justifyContent: 'center', textTransform: 'uppercase' }}>{value}</div>
              <div className="row mt-5 fs-3">

                {value === "siteplan" ? (
                  <p>It includes the building footprint, property boundaries, access roads, parking areas, landscaping, and any other relevant features.
                    Site plans help visualize how the building fits into its environment and how it interacts with surrounding structures and landscape elements.
                  </p>
                ) : value === "layout" ? (
                  <p>Unlike traditional flat floor plans, a 3D layout adds depth and realism, allowing you to see how the rooms and features will look in three dimensions. It's like taking a virtual tour of your future home or office. </p>
                ) : value === "interior" ? (
                  <p>An architecture design top view is a bird's-eye perspective of a building or space. It provides a clear and simplified overview of the design, helping to understand the spatial arrangement and flow of the area. without needing to visualize it from ground level.
                  </p>
                ) : value === "Elevation" ? (
                  <p>The elevation of a house refers to a drawing or diagram that shows the exterior view of the building from various angles.
                    Elevation drawings provide a clear representation of how the house will look from the outside, helping to visualize its overall appearance and design.
                  </p>
                ) :
                  (
                    <p>No Layout Selected</p>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Design