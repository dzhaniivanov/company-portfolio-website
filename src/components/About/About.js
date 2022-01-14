import "./About.scss";
import { useTranslation } from "react-i18next";


const About = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="about" id="about">
            <div className="left">
                <img src="/img/logo.png" alt="" />
            </div>
            <div className="right">
                <h3>{t("title_about")}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quos laudantium quae blanditiis! Quidem saepe dignissimos provident placeat obcaecati facilis distinctio aspernatur ducimus cupiditate ipsa adipisci labore non libero voluptates perspiciatis, numquam quam doloremque magnam voluptatem eius, repellat totam voluptate! Quae totam fugiat, repellat neque nemo ab voluptas velit ipsum aliquam molestiae iste. Distinctio unde rem laudantium vero. Fugiat, eum. Architecto qui ipsam voluptate hic perspiciatis? Id voluptate deleniti deserunt, molestiae nisi eos qui unde voluptas beatae minima sequi facilis accusantium cupiditate. Perferendis quo molestias soluta maxime quia. Tempora quo nam vitae quibusdam doloremque eum, magnam non dolores? Nam, animi!</p>
            </div>
        </div>
    )
}

export default About;
