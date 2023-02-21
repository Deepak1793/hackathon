

import { borderLeft, color } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// import "./Header.css"


export default function Header() {
    const navigate = useNavigate();
    const user_info = JSON.parse(localStorage.getItem('user_info'))
    console.log(user_info)

    function logout() {
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('user_info');
        // localStorage.clear()
        navigate("/register")
    }


    return (
        <div className='container'>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: "#012169" }} aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <img id="Google" src="logo1.jpg" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item" style={{ marginLeft: "1rem" }}>
                                <Link className="nav-link fw-bold" to="/"><strong>Individual</strong> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/CustomizedAccordions" ><strong>Business</strong></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/image"><strong>About</strong></Link>
                            </li>

                            {/* <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/image"><strong>Partner</strong></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/image"><strong>business Resource Centre</strong></Link>
                            </li> */}


                            {
                                localStorage.getItem('user_info') ?
                                    <>


                                        <li className="nav-item">
                                            {/* <Link className="nav-link fw-bold" to="https://www.paypal.com/in/webapps/mpp/paypal-safety-and-security" target="_blank"><strong>Useful Info</strong></Link> */}
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link fw-bold" href="" rel="noreferrer">
                                                <div class="dropdown">

                                                    <Link className="nav-link fw-bold " style={{ marginTop: "-7.5px" }} data-bs-toggle="dropdown" to="/">Shop with PayPal </Link>


                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="https://www.apollopharmacy.in/medicine-delivery-policy" target="_blank">Purchase Medicine</a></li>
                                                        <li><a class="dropdown-item" href="https://www.makemytrip.com/railways/" target="_blank">Book Train Ticket</a></li>
                                                        <li><a class="dropdown-item" href="https://www.swiggy.com/" target="_blank">Order Food</a></li>

                                                        <li><a class="dropdown-item" href="https://www.forex.com/en/markets/forex/" target="_blank">Forex</a></li>


                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold btn btn-secondary" to="/login" style={{ marginLeft: "53rem", marginRight: "10px", color: "white" }}> Login</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold btn btn-secondary" to="/register" style={{ color: "white" }}>Register</Link>
                                        </li>



                                    </>
                            }


                        </ul>
                        {localStorage.getItem('user_info') ?
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Welcome -  {user_info}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/" onClick={logout}>Logout</a></li>
                                </ul>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
