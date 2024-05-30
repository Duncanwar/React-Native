import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function Register({navigation}) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <SafeAreaView >

    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          left: 32,
          fontWeight: 400,
          fontSize: 32,
          lineHeight: 38.4,
        }}
      >
        Create Account
      </Text>
      <StatusBar style="auto" />
      <View style={styles.form}>
        <TextInput
        label="Email"
        textColor="white"
        autoComplete="email"
        theme={{colors:{primary:"#FFD130"}}}
        placeholderTextColor="color"
        right={<TextInput.Icon icon="email" color="#ffd130" />}
        style={{
          marginTop: 10,
          backgroundColor: "#26282C",
        }}
        />
         <TextInput
        label="Password"
        textColor="white"
        autoComplete="email"
        theme={{colors:{primary:"#FFD130"}}}
        placeholderTextColor="color"
        right={<TextInput.Icon icon="eye" color="#ffd130" />}
        style={{
          marginTop: 10,
          backgroundColor: "#26282C",
        }}
        />
        <TextInput
        label="Confirm Password"
        textColor="white"
        autoComplete="password"
        theme={{colors:{primary:"#FFD130"}}}
        placeholderTextColor="color"
        right={<TextInput.Icon icon="eye" color="#ffd130" />}
        style={{
          marginTop: 10,
          backgroundColor: "#26282C",
        }}
        />
        <Pressable style={styles.button}>
          <Text style={styles.text}>Register</Text>
        </Pressable>
        <Text style={{
          paddingTop: 20,
          color:"rgba(45, 45, 45, 0.5)",
        }}>
          <Text>Have an account?</Text>
           <Text style={{
             color:"red"
            }}
           onPress={()=> {
             navigation.navigate('Login')}}
           > Sign In</Text>
          </Text>
      </View>
    </View>
             </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent:"center",
    padding: 15,
    backgroundColor:"#26282C"
  },
  btnField: {
    color: "white",
  },
  email: {
    color: "white",
  },
  password: {
    marginTop: 20,
  },
  button:{
    // alignItems:'center',
    // justifyContent: 'center',
    paddingVertical:12,
    paddingHorizontal:32,
    borderRadius: 15,
    elevation:3,
    backgroundColor:'#130F26',
    height: 60,
    width: 311,
    marginTop: 110,
  },
  text:{
    fontSize:16,
    lineHeight:21,
    fontWeight:'bold',
    letterSpacing:0.25,
    color:'white',
  }
});
