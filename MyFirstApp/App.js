import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={100} />
    </Screen>
  );
}
