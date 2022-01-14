import "./Topbar.scss";
import i18n from "../../i18n";






const Topbar = ({ menuOpen, setMenuOpen }) => {
    const changeLanguage = (ln) => {
        return () => {
            i18n.changeLanguage(ln)
        }
    }

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        oil food technologies.
                    </a>
                    <div>
                        <button onClick={changeLanguage("en")}>en</button>
                        <button onClick={changeLanguage("bg")}>bg</button>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
