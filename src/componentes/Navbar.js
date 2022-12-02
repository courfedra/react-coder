import BotonLink from "./BotonLink"
import LogoNavbar from "./LogoNavbar"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <navbar className="navBar">
            <div className="navBarLogo">
                <LogoNavbar/>
            </div>
            <div className="navBarLinks">
                <ul>
                    <li><BotonLink name="Arboles" link="#"/></li>
                    <li><BotonLink name="Guirnaldas" link="#"/></li>
                    <li><BotonLink name="Luces" link="#"/></li>
                    <li><BotonLink name="Estrellas" link="#"/></li>
                    <li><BotonLink name="Pesebre" link="#"/></li>
                </ul>
            </div>
            <div className="navBarCart">
                <CartWidget/>
            </div>
        </navbar>
    )
}

export default Navbar