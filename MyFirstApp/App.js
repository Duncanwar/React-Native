import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { Button } from "react-native";

export default function App() {
  const netInfo = useNetInfo();
  return <Button title="Button" disabled={!netInfo.isInternetReachable} />;
}
