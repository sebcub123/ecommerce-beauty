import React from "react";
import CartWidget from "../CartWidget/index";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#"><img src="https://res.cloudinary.com/dml2fdgug/image/upload/v1671589157/react/logo_jm4zon.png" style={{ height: 150, width: 150 }} alt="Navbar" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Contacto</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}
export default NavBar