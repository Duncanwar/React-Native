import { ImageBackground, StyleSheet, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View>
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={styles.backgroundImage}
      ></ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
