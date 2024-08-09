import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <ListItem title="My Title" ImageComponent={<Icon name="email" />} />
      </Screen>
    </GestureHandlerRootView>
  );
}
