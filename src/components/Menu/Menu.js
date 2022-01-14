import "./Menu.scss";
import { useTranslation } from "react-i18next";


const Menu = ({ menuOpen, setMenuOpen }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul >
                <li className="listItem" onClick={() => setMenuOpen(false)}>
                    <a href="#intro">{t("home")}</a>
                </li>
                <li onClick={() => setMenuOpen(false)} >
                    <a href="#about">{t("about")}</a>
                </li>
                <li onClick={() => setMenuOpen(false)} >
                    <a href="#gallery">{t("gallery")}</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">{t("contact")}</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
