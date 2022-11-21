import BotonLink from "./BotonLink"
import {BsCart3} from 'react-icons/bs';
const Navbar = (props) => {
    return (
        <navbar className="navBar">
            <div className="navBarItem">
                <img src="../public/logo192.png" alt="ElLogo"/>
            </div>
            <div className="navBarItem navBarLinks">
                <ul>
                    <li><BotonLink name="GitHub" link="https://github.com/courfedra"/></li>
                    <li><BotonLink name="Facebook" link="#"/></li>
                    <li><BotonLink name="Instagram" link="#"/></li>
                    <li><BotonLink name="Linkedin" link="https://www.linkedin.com/in/franandres/"/></li>
                </ul>
            </div>
            <div className="navBarItem navBarCart">
                <BsCart3 style={{fontSize: '40px'}}/>
            </div>
        </navbar>
    )
}

export default Navbar