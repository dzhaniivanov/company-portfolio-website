import "./Menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul >
                <li className="listItem" onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)} >
                    <a href="#about">About Us</a>
                </li>
                <li onClick={() => setMenuOpen(false)} >
                    <a href="#gallery">Gallery</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
