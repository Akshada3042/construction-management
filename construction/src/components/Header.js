import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [isUser, setisUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = Cookies.get('authenticated') === 'true';
    const user = Cookies.get('isUser') === 'true';
    const admin = Cookies.get('isAdmin') === 'true';
    setAuthenticated(auth);
    setisAdmin(admin);
    setisUser(user);
    console.log(user);
    console.log(admin);
  }, []);

  const handleLogout = () => {
    Cookies.remove('authenticated');
    Cookies.remove('isUser');
    Cookies.remove('isAdmin');
    setAuthenticated(false);
    setisAdmin(false);
    setisUser(false);
    // navigate("/");
    window.location.reload();
  }

  return (
    <>
      <div className='header-container-fluid'
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <div className="row" style={{ backgroundImage: " linear-gradient(to top, #30cfd0 0%, #330867 100%)" }}>
          <div className="col-2  mb-3" style={{ paddingLeft: 120, paddingTop: 10 }}>
            <img src={require('../images/vc-logo-1.png')} alt="img" />
          </div>
          <div className="col-10" style={{ paddingLeft: "25%" }}>
            <nav className="navbar navbar-expand-lg offset-md-3   text-center  mb-3">
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                <ul className="navbar-nav position-absolute top-0 end-0 mt-3 me-5">
                  {authenticated && isUser ? (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/progress">
                          Progress
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/design">
                          Design
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/accounts">
                          Accounts
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/doc">
                          Documents
                        </Link>
                      </li>
                    </>
                  ) : (
                    authenticated && isAdmin ? (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link text-white" to="/first">
                            Projects
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link text-white" to="/employeead">
                            Employees
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link text-white" to="/careerad">
                            Career
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item active">
                          <Link className="nav-link text-white" to="/">
                            Home
                            <span className="sr-only" />
                          </Link>
                        </li>
                        &nbsp; &nbsp; &nbsp;
                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle text-white"
                            to="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Sector
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item " to="commercial">
                                Commercial
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="residential">
                                Recidential
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="industrial">
                                Industrial
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="government">
                                Government
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="infrastructure">
                                Infrastructure
                              </Link>
                            </li>
                          </ul>
                        </li>
                        &nbsp; &nbsp; &nbsp;
                        <li className="nav-item">
                          <Link className="nav-link text-white" to="/about">
                            About
                          </Link>
                        </li>
                        &nbsp; &nbsp; &nbsp;
                        <li className="nav-item active">
                          <Link className="nav-link text-white" to="/project">
                            Projects
                          </Link>
                        </li>
                        &nbsp; &nbsp; &nbsp;
                        <li className="nav-item">
                          <Link className="nav-link text-white" to="/career">
                            Career
                          </Link>
                        </li>

                      </>)
                  )
                  }
                  < form >
                    {authenticated ? (
                      <button type="button" onClick={handleLogout} class="btn btn-outline-primary text-white me-md-2">Logout</button>
                    ) : (
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/login">
                          Login
                        </Link>
                      </li>
                    )}
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </div >
      </div >

    </>
  )
}
