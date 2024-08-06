import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          //ios shadows
          shadowColor: "grey",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          // android shadows
          elevation: 50,
        }}
      ></View>
    </View>
  );
}
