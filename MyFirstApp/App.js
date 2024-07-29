import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [text, setText] = useState("Music is good to the soul");
let x;
x.toString()
  return (
    <View style={styles.container}>
      <Text>{text} Hello!kjfkjdkjajdsjk
      </Text>
      <StatusBar style="auto" />
      <Button
        title="Change"
        onPress={() => {
          setText("I love to sing");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});
