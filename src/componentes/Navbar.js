import BotonLink from "./BotonLink"
import LogoNavbar from "./LogoNavbar"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <navbar class="navbar navbar-expand-lg navBar">
            <div class="container-fluid">
                <a class="navbar-brand navBarLogo" href="#">
                    <LogoNavbar/>
                </a>
                <div class="collapse navbar-collapse navBarLinks" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <BotonLink name="Arboles" link="#"/>
                        </li>
                        <li class="nav-item">
                            <BotonLink name="Accesorios" link="#"/>
                        </li>
                        <li class="nav-item">
                            <BotonLink name="Pesebre" link="#"/>
                        </li>
                    </ul>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="navBarCart">
                    <CartWidget/>
                </div>
            </div>
        </navbar>
    )
}

export default Navbar
