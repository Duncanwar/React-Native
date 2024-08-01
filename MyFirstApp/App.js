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

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: "100%", height: 70 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    width: "50%",
    height: 70,
  },
});
