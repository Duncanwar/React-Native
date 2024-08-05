import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
  View,
} from "react-native";
import { useDimensions } from "react-native-hooks";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const dimensions = useDimensions();
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100" : "30%",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    width: "50%",
    height: 30,
  },
});
