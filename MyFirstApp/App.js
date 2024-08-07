import { View } from "react-native";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return <ViewImageScreen />;
}
// <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
{
  /* <Card
      title="Red jacket for sale"
      subTitle="$100"
      image={require("./app/assets/jacket.jpg")}
    />
  </View> */
}
