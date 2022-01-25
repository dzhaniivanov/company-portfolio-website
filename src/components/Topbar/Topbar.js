import "./Topbar.scss";
import Link from '@mui/material/Link';
import SelectLanguages from "../SelectLanguages/SelectLanguages"

const Topbar = ({ menuOpen, setMenuOpen }) => {


    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <Link href="#intro" color="inherit" underline="none" variant="h4">
                        oil food technologies.
                    </Link>
                </div>
                <div className="right">
                    <div className="languageWrapper">
                        <SelectLanguages />
                    </div>
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
