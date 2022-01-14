import "./Intro.scss";
import { useTranslation } from "react-i18next";



const Intro = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="img/logo.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Oil Food Technologies</h2>
                    <h1>{t("location")}</h1>
                    <h3>Processing of oil filter components</h3>
                </div>
                <a href="#about">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro;
