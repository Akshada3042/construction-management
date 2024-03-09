import React from 'react'

export default function DocumentAd() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Documents</h2>
        </div>
        <div className="row" style={{ marginLeft: '30px', marginRight: '30px'}}>
          <table className="table table-bordered shadow pt-1 mb-5" >
            <thead className='table-primary'>
              <tr>
                <th>ID</th>
                <th>Doc Name</th>
                <th>File</th>
                <th>Replace</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>7/12</td>

                <td>  <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="fileUpload"
                  />
                </div></td>
                <td><button type="button" class="btn btn-outline-secondary">Update</button></td>
                <td><button type="button" class="btn btn-outline-danger">Delete</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Approved PLan</td>

                <td>  <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="fileUpload"
                  />
                </div></td>
                <td><button type="button" class="btn btn-outline-secondary">Update</button></td>
                <td><button type="button" class="btn btn-outline-danger">Delete</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Estimate</td>

                <td>  <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="fileUpload"
                  />
                </div></td>
                <td><button type="button" class="btn btn-outline-secondary">Update</button></td>
                <td><button type="button" class="btn btn-outline-danger">Delete</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Contract</td>

                <td>  <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="fileUpload"
                  />
                </div></td>
                <td><button type="button" class="btn btn-outline-secondary">Update</button></td>
                <td><button type="button" class="btn btn-outline-danger">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
