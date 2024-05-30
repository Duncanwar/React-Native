import ConfirmForgotPassword from "./screens/ConfirmForgotPassword";
import Register from "./screens/Register";
import LoginWithEmail from "./screens/LoginWithEmail";
import LoginWithNumberPhone from "./screens/LoginWithNumberPhone";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

 const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen
        name="Register"
        component={Register}
        options={{title: "Register"}}
        />
        <Stack.Screen name="Login" component={LoginWithEmail} />
      </Stack.Navigator>
    </NavigationContainer>
    {/* <ConfirmForgotPassword /> */}
    {/* <Register /> */}
    {/* <LoginWithEmail /> */}
    {/* <LoginWithNumberPhone /> */}
    </>
  )
}