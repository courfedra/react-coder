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
                    <li><BotonLink name="GitHub" link="https://github.com/courfedra"/></li>
                    <li><BotonLink name="Facebook" link="#"/></li>
                    <li><BotonLink name="Linkedin" link="https://www.linkedin.com/in/franandres/"/></li>
                </ul>
            </div>
            <div className="navBarCart">
                <CartWidget/>
            </div>
        </navbar>
    )
}

export default Navbar