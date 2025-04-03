import React from "react";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid px-5 ">
                <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="container-fluid ">
                            <div className="navbar-nav d-flex justify-content-end ">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                <a className="nav-link text-light-emphasis" href="#">About</a>
                                <a className="nav-link text-light-emphasis" href="#">Services</a>
                                <a className="nav-link text-light-emphasis" href="#">Contact</a>
                            </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}