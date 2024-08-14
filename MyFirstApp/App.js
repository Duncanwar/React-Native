import { GestureHandlerRootView } from "react-native-gesture-handler";
import MessageScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <GestureHandlerRootView>
      <MessageScreen />
    </GestureHandlerRootView>
  );
}
