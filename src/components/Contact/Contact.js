import "./Contact.scss";
import Map from "../Map/Map";

const Contact = () => {
    const location = {
        adress: 'Boulevard 3 mart 54',
        lat: 43.56090363382541,
        lng: 27.80608123217932
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact with us</h2>
                <div className="top">
                    <div className="item">
                        <span>Alexander Arnaudov</span>
                        <span>Manager</span>
                        <span>+359 123 123</span>
                        <span>arnaudov@gmail.com</span>
                    </div>
                    <div className="item">
                        <span>Valeri Arnaudov</span>
                        <span>Manager</span>
                        <span>+359 123 123</span>
                        <span>arnaudov@gmail.com</span>
                    </div>
                </div>
                <div className="bottom">
                    <Map location={location} zoomLevel={15} />
                </div>

            </div>
        </div>
    )
}

export default Contact;
