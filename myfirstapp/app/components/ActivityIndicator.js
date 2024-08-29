import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay={true}
        loop={true}
        source={require("../assets/animations/loader.json")}
        style={styles.lottie}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 400,
    height: 400,
  },
});

export default ActivityIndicator;
