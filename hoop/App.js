import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Ciutadella",
          color: "white",
          height:80,
          left:32,
          fontWeight:400,
          fontSize:32,
          lineHeight:38.4
        }}
      >
        Glad to see you!!
      </Text>
      <StatusBar style="auto" />
      <View style={styles.form}>
        <TextInput style={[styles.btnField,styles.email]} placeholder="Email" />
        <TextInput style={[styles.btnField,styles.password]} placeholder="Password" />
        <Text>Forgot password? Retrieve</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2e99",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#f4f4f4",
    height: "80%",
    width: "100%",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingTop: 50,
    alignItems: "center",
  },
  btnField:{
    height:60,
    width: 311,
    paddingLeft:20,
    borderRadius:15
  },
  email:{
    backgroundColor:"#ffffff",
  },
  password:{
    marginTop:20,
    backgroundColor:"#ffffff",
  }
});
