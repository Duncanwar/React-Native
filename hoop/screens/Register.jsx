import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as Font from "expo-font"
import AppLoadding from "expo-app-loading"
import MaterialCommunityIcons from "react-native-vector-icons"
import { renderInputText } from "../components/form";


const loadFonts = async()=>{
  await Font.loadAsync({
    // 'Ciutadella': require('./assets/fonts/ciutadella.tff'),
  });
}

export default function Register({navigation}) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(()=>{
    loadFonts().then(()=> setFontsLoaded(true));
  }, [])
  // if(!fontsLoaded){
  //   return <AppLoadding />;
  // }
  return (
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
        Let's start!!
      </Text>
      <StatusBar style="auto" />
      <View style={styles.form}>
        {renderInputText([styles.btnField, styles.email],"Email","rgba(45, 45, 45, 0.5)")}
        <TextInput
          style={[styles.btnField, styles.password]}
          placeholder="Password"
          placeholderTextColor="rgba(45, 45, 45, 0.5)"
          />
        <TextInput
          style={[styles.btnField, styles.password]}
          placeholder="Password Authentication"
          placeholderTextColor="rgba(45, 45, 45, 0.5)"
        />
        <TextInput
          style={[styles.btnField, styles.password]}
          placeholder="Phone Number"
          placeholderTextColor="rgba(45, 45, 45, 0.5)"
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130F26",
    justifyContent: "flex-end",
  },
  form: {
    marginTop:80,
    backgroundColor: "#F4F4FA",
    height: "80%",
    width: "100%",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingTop: 50,
    alignItems: "center",
  },
  btnField: {
    height: 60,
    width: 311,
    paddingLeft: 20,
    borderRadius: 15,
  },
  email: {
    backgroundColor: "#ffffff",
  },
  password: {
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
  button:{
    alignItems:'center',
    justifyContent: 'center',
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
