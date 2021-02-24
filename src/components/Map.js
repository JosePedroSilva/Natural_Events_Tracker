import { useState } from "react";

import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.id !== "EONET_354") {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          type={ev.categories[0].id}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 49,
    lng: 10,
  },
  zoom: 5,
};

export default Map;
