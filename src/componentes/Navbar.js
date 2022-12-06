import BotonLink from "./BotonLink"
import LogoNavbar from "./LogoNavbar"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <navbar className="navbar navbar-expand-lg navBar">
            <div className="container-fluid">
                <a className="navbar-brand navBarLogo" href="#">
                    <LogoNavbar/>
                </a>
                <div className="collapse navbar-collapse navBarLinks" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <BotonLink name="Arboles" link="#"/>
                        </li>
                        <li className="nav-item">
                            <BotonLink name="Accesorios" link="#"/>
                        </li>
                        <li className="nav-item">
                            <BotonLink name="Pesebre" link="#"/>
                        </li>
                    </ul>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navBarCart">
                    <CartWidget/>
                </div>
            </div>
        </navbar>
    )
}

export default Navbar
