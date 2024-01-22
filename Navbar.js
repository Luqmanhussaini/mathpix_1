import React from 'react'


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg   fixed-top bg-co bg-body-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <img id='this' src="https://play-lh.googleusercontent.com/-HA5y1fFjL6nTGYhJNo3KRidO_loSQQHT9XoitCUNT2HI86UCjODYWObRb66wBN2bQ" alt="" />
                            </li>
                            <li className="nav-item">

                                <div class="dropdown">
                                    <button class=" fs-6 btn dropdown-toggle" data-bs-toggle="" aria-expanded="false">
                                        Products
                                    </button>

                                </div>
                            </li>

                            <li className="nav-item">

                                <div class="dropdown">
                                    <button class=" fs-6 btn dropdown-toggle" data-bs-toggle="" aria-expanded="false">
                                        Use Cases
                                    </button>
                                </div>
                            </li>
                            <li className="nav-item">

                                <div class="dropdown">
                                    <button class=" fs-6 btn dropdown-toggle" data-bs-toggle="" aria-expanded="false">
                                        Downloads
                                    </button>

                                </div>
                            </li>
                            <li className="nav-item">

                                <div class="dropdown">
                                    <button class=" fs-6 btn dropdown-toggle" data-bs-toggle="" aria-expanded="false">
                                        Features
                                    </button>

                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active fs-6"   href="/">Pricing</a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link active fs-6" aria-current="page" href="/">Docs</a>
                            </li>


                            <li className="nav-item">
                                <div class="dropdown">
                                    <button class=" fs-6 btn dropdown-toggle" data-bs-toggle="" aria-expanded="ture">
                                        Company
                                    </button>
                                    

                                </div>
                            </li>
                        </ul>
                        <form class="d-flex" role="search" id="login" >
                            <button id="loginside" class=" fs-6 fw-bolder btn btn-primary" type="submit">Log In</button>
                        </form>
                    </div>
                </div>
            <hr />
            </nav>
        </>
    )
}
