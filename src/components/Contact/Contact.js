import "./Contact.scss";
import Map from "../Map/Map";
import { useTranslation } from "react-i18next";



const Contact = () => {
    const { t, i18n } = useTranslation();

    const location = {
        adress: 'Oil Food Technologies Ltd.',
        lat: 43.560662432404285,
        lng: 27.80585356967901
    };


    return (
        <div className="contact" id="contact">
            <div className="left">
                <Map location={location} zoomLevel={17} />
            </div>
            <div className="right">
                <h2>{t("contact_title")}</h2>
                <div className="top">
                    <div className="item">
                        <span>{t("contact_name_one")}</span>
                        <span>{t("contact_type")}</span>
                        <span>+359 123 123</span>
                        <span>arnaudov@gmail.com</span>
                    </div>
                    <div className="item">
                        <span>{t("contact_name_two")}</span>
                        <span>{t("contact_type")}</span>
                        <span>+359 123 123</span>
                        <span>arnaudov@gmail.com</span>
                    </div>
                </div>
                <div className="bottom">
                    <img src="assets/shake.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact;
