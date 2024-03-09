import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Accounts() {
  const navigate = useNavigate();
  useEffect((e) => {
    if (Cookies.get('authenticated') == null) {
      navigate("/login")
    }
  });
  return (
    <div>
      <div className="container-fluid">
        {/* image start */}
        <div className="row mt-3 mb-3">

          <div className="row">
            <h1 className='fs-1 fw-bold mt-3 mb-5 shadow pt-3 lh-base'>ACCOUNTS</h1>
          </div>
          <div>
            <img src={require('../images/Accounting1.jpg')} style={{ width: "100%" }} alt='...' />
          </div>
        </div>
        {/* image end */}

        {/* client table start */}
        <h4>
          <b>
            <u>Billing Details</u>
          </b>
        </h4>
        <br />
        <div className="row mb-5 margin-bottom:auto">
          <table className="table table-bordered">
            <thead className="border border-secondary">
              <tr>
                <th scope="col">Project Stages</th>
                <th scope="col">Amount/Bills</th>
                <th scope="col">Satus</th>
                <th scope="col">Bill Receipt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Deposit</td>
                <td>10,000</td>
                <td>Paid</td>
                <td>
                  <button className="btn btn-primary" type="submit">
                    Download Receipt
                  </button>
                </td>
              </tr>
              <tr>
                <td>The slab or base stage</td>
                <td>20,000</td>
                <td>Unpaid</td>
                <td>
                  <button className="btn btn-primary" type="submit">
                    Download Receipt
                  </button>
                </td>
              </tr>
              <tr>
                <td>Frame stage</td>
                <td>30,000</td>
                <td>Unpaid</td>
                <td>
                  <button className="btn btn-primary" type="submit">
                    Download Receipt
                  </button>
                </td>
              </tr>
              <tr>
                <td>Lockup Stage</td>
                <td>20,000</td>
                <td>Unpaid</td>
                <td>
                  <button className="btn btn-primary" type="submit">
                    Download Receipt
                  </button>
                </td>
              </tr>
              <tr>
                <td>Fixing Stage</td>
                <td>80,000</td>
                <td>Unpaid</td>
                <td>
                  <button className="btn btn-primary" type="submit">
                    Download Receipt
                  </button>
                </td>
              </tr>
              <tr>
                <td>Practical complitaion stage</td>
                <td>50,000</td>
                <td>Unpaid</td>
                <td>
                  <button className="btn btn-primary" type="submit">
                    Download Receipt
                  </button>
                </td>
              </tr>
              <tr>
                <td>Goods and Service Tax (GST)</td>
                <td>10,000</td>
                <td>Unpaid</td>
                <td>
                  <button className="btn btn-primary" type="submit">
                    Download Receipt
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* client table end */}

        <>
          {/* material table start */}
          <h4>
            <b>
              <u>Material Details</u>
            </b>
          </h4>
          <br />
          <div className="row mb-5 margin-bottom:auto">
            <table className="table table-bordered">
              <thead className="border border">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Material Name</th>
                  <th scope="col">Cost</th>
                  <th scope="col">Qantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Cement</td>
                  <td>10,000</td>
                  <td>15</td>
                  <td>15,00,000</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Bricks</td>
                  <td>10,000</td>
                  <td>15</td>
                  <td>15,00,000</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Tiles</td>
                  <td>10,000</td>
                  <td>15</td>
                  <td>15,00,000</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Agregates</td>
                  <td>10,000</td>
                  <td>15</td>
                  <td>15,00,000</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Sand</td>
                  <td>10,000</td>
                  <td>15</td>
                  <td>15,00,000</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>Rebar</td>
                  <td>10,000</td>
                  <td>15</td>
                  <td>15,00,000</td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>Steel</td>
                  <td>10,000</td>
                  <td>15</td>
                  <td>15,00,000</td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td>Wood</td>
                  <td>10,000</td>
                  <td>15</td>
                  <td>15,00,000</td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td>Glass</td>
                  <td>10,000</td>
                  <td>15</td>
                  <td>15,00,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* material table end */}
        </>


        {/* Installments start */}
        <div className="row mb-5 mt-3">
          <h3>
            <u>
              <b>Installment based on Progress</b>
            </u>
          </h3>
          <div className="mb-5 margin-bottom:auto">
            <h5>
              <b>1. Foundation</b>
            </h5>
            &nbsp; &nbsp; &nbsp; The portion of the building below the ground level
            which is in direct contact with the ground to transmit the loads of the
            building to the ground is called as foundation or substructure.
            <br />
            &nbsp; &nbsp; &nbsp; The foundation is the most critical part of any
            structure and most of the failures are probably due to faulty foundations
            rather than any other cause. Hence, it is highly essential to secure good
            foundations to maintain the stability of the structure. The primary
            function of the foundation is to transmit the anticipated loads safely to
            the soil below.
            <h6>
              <b>&nbsp; &nbsp; &nbsp; Cost : 10,000</b>
            </h6>
            <br />
            <h5>
              <b>2. Plinth beam </b>
            </h5>
            &nbsp; &nbsp; &nbsp; The Reinforced cement concrete beam shortly named as
            RCC beam constructed in the plinth which is used to transfer the load of
            building uniformly, on the foundation is called as plinth beam. It also
            prevents any crack formation on the wall because of the improper
            settlement and behavior of the soil on which the building is constructed.
            Its thickness is usually 150 mm and the width is equal to the wall
            thickness 300 mm in the plinth.
            <br />
            <h6>
              <b>&nbsp; &nbsp; &nbsp; Cost : 10,000</b>
            </h6>
            <br />
            <h5>
              <b>3. Basement</b>
            </h5>
            &nbsp; &nbsp; &nbsp; Basement is the lower storey of a building which is
            partly or fully below the ground level. In an office building or a
            residential building, basement is used for vehicle parking or for storage
            of goods.
            <br />
            <h6>
              <b>&nbsp; &nbsp; &nbsp; Cost : 10,000</b>
            </h6>
            <br />
            <h5>
              <b>4. Wall</b>
            </h5>
            &nbsp; &nbsp; &nbsp; The portion of the super structure which carries the
            load of the roof is called as the wall. The primary function of wall is to
            enclose or divide the space. A load-bearing wall in the super-structure
            should be strong enough to take up the loads safely due to its own weight,
            super imposed loads and lateral pressure such as wind.
            <br />
            &nbsp; &nbsp; &nbsp; It should be stable against overturning by lateral
            forces and buckling caused by excessive slenderness. The wall is built in
            brick masonry and commonly has a thickness of about 230 mm.
            <h6>
              <b>&nbsp; &nbsp; &nbsp; Cost : 10,000</b>
            </h6>
            <br />
            <h5>
              <b>5. Flooring</b>
            </h5>
            &nbsp; &nbsp; &nbsp; The horizontal surface at the plinth level in a
            building is called as flooring. The main function of a floor is a to
            provide support for occupants, furniture and equipment of a building and
            the function of providing different floors is to divide the building into
            different levels for the purpose of creating more accommodation within the
            limited space.
            <br />
            <h6>
              <b>&nbsp; &nbsp; &nbsp; Cost : 10,000</b>
            </h6>
            <br />
            <h5>
              <b>6. Roofs</b>
            </h5>
            &nbsp; &nbsp; &nbsp; A roof is the uppermost part of a building whose main
            function is to enclose the space and protect the same from the effects of
            weather elements such as rain, sun, wind, heat, snow etc.
            <br />
            <h6>
              <b>&nbsp; &nbsp; &nbsp; Cost : 10,000</b>
            </h6>
            <br />
            <h5>
              <b>7. Ceiling</b>
            </h5>
            &nbsp; &nbsp; &nbsp; The bottom surface of roof slab, seen inside a room
            is called as ceiling. The normal height of ceiling for residential
            buildings measured from floor in a room, to have the facilities of a
            ceiling fan etc. is 3000 mm. This height may be reduced for the buildings
            that are to be air-conditioned.
            <br />
            <h6>
              <b>&nbsp; &nbsp; &nbsp; Cost : 10,000</b>
            </h6>
            <br />
            <h5>
              <b>8. Colouring </b>
            </h5>
            &nbsp; &nbsp; &nbsp; Choosing the perfect colour for house or wall colour
            scheme for your home is not just difficult but equally taxing. As experts
            say, the wall colour should match or bring out the personality of not just
            the house but its residents, as well. <br />
            <h6>
              <b>&nbsp; &nbsp; &nbsp; Cost : 10,000</b>
            </h6>
          </div>
        </div>
        {/* Installments end*/}
        {/* line chart start */}
        <linechart width="{500}" height="{300}" data="{data}">
          <xaxis datakey="name">
            <yaxis>
              <cartesiangrid stroke="#eee" strokedasharray="5 5">
                <line type="monotone" datakey="uv" stroke="#8884d8">
                  <line type="monotone" datakey="pv" stroke="#82ca9d"></line>
                </line>
              </cartesiangrid>
            </yaxis>
          </xaxis>
        </linechart>
        {/* line chart end */}

      </div>
    </div>
  )
}
