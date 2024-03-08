import React from 'react'

export default function AccountsAd() {
  return (
    <>
      <div className="shadow p-3 mb-5 bg-white rounded">
        <h2>
          <b>Accounting Form</b>
        </h2>
      </div>
      <div className="container mt-5">
        <div className="row mb-5  justify-content-center">
          <div className="col-md-6 ">
            <div className="card shadow pt-1">
              <div className="card-body">
                <form>
                  <br />
                  <div>
                    <h4>
                      <b>Billing</b>
                    </h4>
                  </div>
                  <label htmlFor="projstage" className="form-label">
                    Project Stages
                  </label>
                  <div classname="input-group mb-3">
                    <select
                      classname="form-select"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                    >
                      <option selected="">Choose...</option>
                      <option value="{1}">The Deposit</option>
                      <option value="{2}">The slab or base stage</option>
                      <option value="{3}">Frame stage</option>
                      <option value="{4}">Lockup Stage</option>
                      <option value="{5}">Fixing Stage</option>
                      <option value="{6}">Practical complitaion stage</option>
                      <option value="{7}">Goods and Service Tax (GST)</option>
                    </select>
                  </div>
                  <br />
                  <div className="mb-3" style={{ alignItems: "center" }}>
                    <label htmlFor="tcost" className="form-label">
                      Total Cost
                    </label>
                    <input
                      type="tcost"
                      className="form-control"
                      id="tcost"
                      name="tcost"
                      required=""
                    />
                  </div>
                  <br />
                  <div className="mb-3" style={{ alignItems: "center" }}>
                    <label htmlFor="Billing" className="form-label">
                      Bill Receipt
                    </label>
                    <br />
                    <label htmlFor="pdfFile">Choose a PDF file:</label>
                    <input type="file" name="pdfFile" id="pdfFile" accept=".pdf" required="" />
                    <br />
                    <br />
                    <input type="submit" Value="Upload PDF" />
                  </div>

                  <div>
                    <h4>
                      <b>Installment based on Progress</b>
                    </h4>
                  </div>
                  <label htmlFor="progstage" className="form-label">
                    Progress Stages
                  </label>
                  <div classname="input-group mb-3">
                    <select
                      classname="form-select"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                    >
                      <option selected="">Choose...</option>
                      <option value="{1}">Foundation</option>
                      <option value="{2}">Plinth beam</option>
                      <option value="{3}">Basement</option>
                      <option value="{4}">Wall</option>
                      <option value="{5}">Flooring</option>
                      <option value="{6}">Roofs</option>
                      <option value="{7}">Ceiling</option>
                      <option value="{8}">Colouring</option>
                    </select>
                  </div>
                  <br />
                  <div className="mb-3" style={{ alignItems: "center" }}>
                    <label htmlFor="icost" className="form-label">
                      Cost
                    </label>
                    <input
                      type="icost"
                      className="form-control"
                      id="icost"
                      name="icost"
                      required=""
                    />
                  </div>
                  <button type="submit" className="btn btn-success me-5">
                    Submit
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
