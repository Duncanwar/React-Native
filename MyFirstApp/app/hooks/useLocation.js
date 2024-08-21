import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    console.log(granted, "grants");
    if (!granted) return;

    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    setLocation({ latitude, longitude });
    console.log({ latitude, longitude });
  };
  useEffect(() => {
    getLocation();
  }, []);
};
