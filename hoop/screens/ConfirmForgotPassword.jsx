import React from 'react'
import { Image, StyleSheet, Text, View,Pressable, SafeAreaView } from 'react-native'
import Svg, {Circle, SvgUri} from 'react-native-svg'
import svgImg from '../img/Asset3.1.svg'

const ConfirmForgotPassword = () => {
  return (
    <SafeAreaView style={{flex:1}}>

    <View style={styles.container}>
    <View style={styles.div}> 
    {/* <SvgUri height="100%" width="100%" uri={svgImg}/> */}
   
            {/* <Image style={{width: 100, height: 100, alignSelf:"center",position:'absolute',alignSelf:'center',marginBottom:'auto',marginTop:100}} source={img} /> */}
   
        </View>
        <Text style={styles.email}>Check your Email </Text>
        <Text>We have sent a password recover {"\n"} instructions to your email</Text>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Open email app</Text>
        </Pressable>
        <Text>Skipp I'll confirm later</Text>
        <Text style={{
            paddingTop: 20,
            color:"rgba(45, 45, 45, 0.5)",
            flex:1
        }}>
          <Text >Didn’t receive the email? Check your spam filter,{"\n"}or </Text>
           <Text style={{
               color:"red",
               margin:30, 
               paddingLeft:30,
               paddingRight:30
            }}>try another email address</Text>
          </Text>
    </View>
            </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F4F4FA",
        alignItems: "center",
    },
    div:{
        marginTop:10,
        backgroundColor:"rgba(45, 45, 45, 0.1)",
        borderRadius:150,
        width:200,
        height:200
    },
    image:{
        height:10,
        width:10,
        alignS: 'center',
        
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
      },
      email:{
        paddingTop:70,
        fontSize:28,
        fontWeight:'bold',
        color:"#2D2D2D"
      }
})

export default ConfirmForgotPassword

