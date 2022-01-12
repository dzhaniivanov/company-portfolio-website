import { Icon } from '@iconify/react'
import "../Map/Map.css";

const LocationPin = ({ text }) => {
    return (
        <div className="pin">
            <Icon icon="carbon:location-filled" className="pin-icon" />;
            <p className="pin-text">{text}</p>
        </div>
    )
}

export default LocationPin
