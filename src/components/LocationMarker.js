import { Icon } from "@iconify/react";
import fireIcon from "@iconify/icons-mdi/fire-alert";
import volcanIcon from "@iconify-icons/maki/volcano-15";
import icebergIcon from "@iconify-icons/openmoji/iceberg";
import earthquakeIcon from "@iconify-icons/wi/earthquake";
import stormIcon from "@iconify-icons/ion/thunderstorm-sharp";

const LocationMarker = ({ lat, lng, onClick, type }) => {
  const mark = (type) => {
    if (type === 8) {
      return <Icon icon={fireIcon} className="location-icon" />;
    } else if (type === 12) {
      return (
        <Icon
          icon={volcanIcon}
          style={{ color: "black" }}
          className="location-icon"
        />
      );
    } else if (type === 15) {
      return <Icon icon={icebergIcon} className="location-icon" />;
    } else if (type === 16) {
      return (
        <Icon
          icon={earthquakeIcon}
          style={{ color: "brown" }}
          className="location-icon"
        />
      );
    } else if (type === 10) {
      return (
        <Icon
          icon={stormIcon}
          style={{ color: "gray" }}
          className="location-icon"
        />
      );
    }
  };
  return (
    <div className="location-marker" onClick={onClick}>
      {mark(type)}
    </div>
  );
};

export default LocationMarker;
