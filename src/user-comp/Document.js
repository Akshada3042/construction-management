import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Document() {
  const navigate = useNavigate();
  useEffect((e) => {
    if (Cookies.get('authenticated') == null) {
      navigate("/login")
    }
  });
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="row mt-5 shadow pt-1">
            <h1><b>Documentation</b></h1>
          </div>
          <div className="col-xl-8 ">
            <div className="row mt-5 " style={{ marginLeft: '30px', marginRight: '30px' }}>
              <table className="table table-striped table-bordered shadow pt-1" >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Doc Name</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>7/12</td>
                    <td>
                      <Link>click here</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Approved PLan</td>
                    <td>
                      <Link>click here</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Estimate</td>
                    <td>
                      <Link>click here</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Contract</td>
                    <td>
                      <Link>click here</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
