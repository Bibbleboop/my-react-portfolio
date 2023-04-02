import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header>
            <h3>{props.title}</h3>
            <nav>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header;