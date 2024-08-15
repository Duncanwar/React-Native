import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permissions to access the camera");
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return <Screen />;
}
