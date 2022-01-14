import GoogleMapReact from 'google-map-react'
import './Map.css'
import LocationPin from '../LocationPin/LocationPin'

const   Map = ({ location, zoomLevel }) => {
    return (
        <div className='map'>
            <h2 className="map-h2">Where to find our manufacture</h2>
            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCLsZlkbcopaiVoLAfe_jURf_hCEDHUds4' }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.adress}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Map
