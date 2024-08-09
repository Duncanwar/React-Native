import { Text, TextInput } from "react-native";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import colors from "./app/config/colors";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
