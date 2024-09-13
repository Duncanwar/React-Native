import { useState } from "react";
import { StyleSheet, TextInput, SafeAreaView, Text, View } from "react-native";

export default function HomeScreen() {
  const [input, setInput] = useState("");
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.text}> Task Manager App</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          onChangeText={setInput}
        />
        <Text>{input}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 50,
  },˜
  input: {
    flex: 1,
    backgroundColor: "black"
  },
  screen: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    transform: "uppercase",
    marginBottom: 10,
  },
});
