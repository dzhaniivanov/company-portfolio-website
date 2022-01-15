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
                    <div className="languageWrapper">
                        <button onClick={changeLanguage("en")}>
                            <img src="/img/uk.png" alt="" style={{width:"100%",height:"24px",objectFit:"cover",borderRadius:"50%",display:"flex"}} />
                        </button>
                        <button onClick={changeLanguage("bg")}>
                        <img src="/img/bg.jpg" alt="" style={{width:"100%",height:"24px",objectFit:"cover",borderRadius:"50%",display:"flex"}} />
                        </button>
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
