import React, { useEffect, useState } from 'react'
import VideoConstruct from '../videos/VideoConstruct'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const data = [
  { name: 'Design', value: 50 },
  { name: 'Land & Foundatation', value: 40 },
  { name: 'Mechanical', value: 15 },
  { name: 'Electrical', value: 20 },
  { name: 'Plumbing', value: 25 },
  { name: 'Waterprofing', value: 10 },
  { name: 'Coloring', value: 20 },
  { name: 'Finishing', value: 8 },
];

var email = sessionStorage.getItem('mailkey');

export default function Progress() {
  const [materials, setMaterials] = useState([]);
  const [siteDetails, setiteDetails] = useState([]);
  const [pid, setpid] = useState('');
  const navigate = useNavigate();
  useEffect((e) => {
    if (Cookies.get('authenticated') == null) {
      navigate("/login")
    }

    axios.post("http://localhost:8520/getProjectId/" + email).then((response) => {
      console.log(response.data);
      setpid(response.data);


      axios.get("http://localhost:8520/getSiteDetails/" + response.data).then((response) => {
        console.log(response.data);
        setiteDetails(response.data);
        
      }).catch(() => {
        console.log('Error');
      });


      axios.get("http://localhost:8520/getMaterial/" + response.data).then((response) => {
        console.log(response.data);
        setMaterials(response.data);
        console.log(materials);
      }).catch(() => {
        console.log('Error');
      });

    }).catch(() => {
      console.log('Error');
    });
    console.log(pid);

  }, []);
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <h1 className='fs-1 fw-bold mt-3 mb-5 shadow pt-3 lh-base'>DESIGN</h1>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <VideoConstruct></VideoConstruct>
          </div>
          <div className="col-xl-4 mt-5">
            <div className="row mt-5">
              <h2 className='fs-1 fw-bold'>{siteDetails.siteName}</h2>
              <hr></hr>
            </div>
            <div className="row mt-3">
              <h2>{siteDetails.siteLocation}</h2>
            </div>
            <div className="row mt-3 justify-content-center">
              <h2 className=''>{siteDetails.date}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row mt-5">
            <h2 className='fs-1 fw-bold shadow pt-3 lh-base'>Ongoing Phase</h2>
          </div>
          <div className="row mt-5">
            <div className="col-xl-4">
              <div className="row mt-5">
                <h2 className='fs-1 fw-bold ' style={{ marginLeft: '30px' }}>Design</h2>
                <hr className='mt-5'></hr>
              </div>
              <div className="row fs-2 mt-5" style={{ marginLeft: '30px' }}>
                Design considerations for construction projects involve various aspects ranging from architectural design to structural engineering, materials selection, and environmental sustainability
              </div>
            </div>
            <div className="col-xl-8">
              <img src={require('../images/2d_model.jpg')} alt="img" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row mt-5">
            <h2 className='fs-1 fw-bold shadow pt-3 mb-5 lh-base'>PHASES</h2>
          </div>
          <div className="col-xl-6">
            <h2>Estimated Time Required</h2>
            <div className="row mt-5">
              <PieChart width={800} height={600}>
                <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={data}
                  cx="50%"
                  cy="50%"
                  fontSize={"30px"}
                  outerRadius={250}
                  fill="#002366"
                  label
                />
                <Tooltip />
              </PieChart>
            </div>
          </div>
          <div className="col-xl-6">
            <table class="table table-bordered" style={{ fontSize: '20px', margin: 'auto', textAlign: 'center' }}>
              <thead>
                <tr class="table-primary" >
                  <th scope="col"></th>
                  <th scope="col">Phase Type</th>
                  <th scope="col">Percentage(%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>

                  <td>Design</td>
                  <td>50</td>
                </tr>
                <tr>
                  <th scope="row">2</th>

                  <td>Land & Foundatation</td>
                  <td>40</td>
                </tr>
                <tr>
                  <th scope="row">3</th>

                  <td>Mechanical</td>
                  <td>15</td>
                </tr>
                <tr>
                  <th scope="row">4</th>

                  <td>Electrical</td>
                  <td>20</td>
                </tr>
                <tr>
                  <th scope="row">5</th>

                  <td>Plumbing</td>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">6</th>

                  <td>Waterprofing</td>
                  <td>10</td>
                </tr>
                <tr>
                  <th scope="row">7</th>

                  <td>Coloring</td>
                  <td>20</td>
                </tr>
                <tr>
                  <th scope="row">8</th>

                  <td>Finishing</td>
                  <td>8</td>

                </tr>
              </tbody>
              <tfoot>
                <td></td>
                <td></td>
                <td>100%</td>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="row mb-5">
          <div className="row mb-5">
            <h2 className='fs-1 fw-bold shadow pt-3 mb-5'>PROGRESS OF PHASES</h2>
          </div>
          <div className="row">
            <table className="table table-bordered" style={{ fontSize: '20px', margin: 'auto', textAlign: 'center' }}>
              <tbody>
                <tr className="table-primary">
                  <th scope="col" />
                  <th scope="col">Phase Type</th>
                  <th>Status</th>
                  <th scope="col">Percentage(%)</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Design</td>
                  <td>Completed</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "100%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Land &amp; Foundatation</td>
                  <td>Completed</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"

                      style={{ width: "100%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mechanical</td>
                  <td>Ongoing</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"

                      style={{ width: "75%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Electrical</td>
                  <td>Ongoing</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "50%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Plumbing</td>
                  <td>Ongoing</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"

                      style={{ width: "20%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Waterprofing</td>
                  <td>Pending</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"

                      style={{ width: "20%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Coloring</td>
                  <td>Pending</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"

                      style={{ width: "5%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Finishing</td>
                  <td>Pending</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "5%" }}
                    />
                  </div>
                  </td>
                </tr>
              </tbody>

            </table>

          </div>
        </div>
        <div className="row">
          <div className="row mb-5">
            <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Material Details</h2>
          </div>


          <div className="row mb-5">
            <table className="table table-striped table-hover border border-solid shadow p-3">
              <thead className='border border-secondary'>
                <tr >
                  <th scope="col">MATERIAL ID</th>
                  <th scope="col">MATERIAL NAME</th>
                  <th scope="col">MATERIAL PRICE</th>
                  <th scope="col">QUANTITY</th>
                </tr>
              </thead>
              <tbody>

                {
                  materials.map((material) => {
                    return (
                      <tr>
                        <td>{material.mId}</td>
                        <td>{material.mName}</td>
                        <td>{material.mPrice}</td>
                        <td>{material.quantity}</td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>


        </div>
        <div className="row">
          <div className="row mb-5">
            <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Working Team</h2>
          </div>
          <div className="row mb-5">
            <table class="table table-bordered" style={{ fontSize: '20px', margin: 'auto', textAlign: 'center' }}>
              <thead>
                <tr class="table-primary" >
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Position</th>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Akshada Kale</td>
                  <td>Manager</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <th scope="row">2</th>

                  <td>Amar Sing</td>
                  <td>Ass Manager</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <th scope="row">3</th>

                  <td>Abhijit Khote</td>
                  <td>Site Engineer</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <th scope="row">4</th>

                  <td>Aditya Niphade</td>
                  <td>Site Enginner</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <th scope="row">5</th>

                  <td>Ashish Raj</td>
                  <td>Architect</td>
                  <td>9876543210</td>
                </tr>

              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  )
}
