import {View,Text,Pressable,ImageBackground,TextInput,KeyboardAvoidingView,Dimensions,Keyboard,StyleSheet, ViewStyle} from "react-native"
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import {useFonts} from "@expo-google-fonts/inter"
import AppLoading from 'expo-app-loading';
import { useAuth } from "./auth_context";
export default function Login(){

    let [fontsLoaded] =  useFonts({
        'NotoSans-SemiBold' : require("../../assets/fonts/NotoSans-SemiBold.ttf"),
        'NotoSans-ExtraBold' : require("../../assets/fonts/NotoSans-ExtraBold.ttf"),
        'Lato-Bold': require("../../assets/fonts/Lato-Bold.ttf"),
        'Lato-Regular': require("../../assets/fonts/Lato-Regular.ttf"),
    })
    const [didKeyboardShow, setKeyboardShow ] = useState(false);
    // const [boolean_, setBoolean] = useState(false)
    const [windowWidth, setWindowwidth] = useState(Dimensions.get('window').width)
const [windowHeight, setWindowheight] = useState(Dimensions.get('window').height)
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
    const _keyboardDidShow = () => {
        setKeyboardShow(true) 
        setWindowheight(Dimensions.get('screen').height)
      }
      const _keyboardDidHide = () => {
        setKeyboardShow(false)
        setWindowheight(Dimensions.get('screen').height)
     }

const {login} = useAuth()
const {boolean_} =  useAuth()
const {Error_handling_} = useAuth()
const Navigator = useNavigation()
  useEffect(()=>{
    const subscription =   Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
     const subscription_ = Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
 
    return ()=>{
      subscription.remove()
      subscription_.remove()
  };
},[]);


    if (!fontsLoaded) {
        return <AppLoading />;
      }
      console.log(boolean_)
      const Error_handling = ()=>{
        return(
        <View style = {styles.Container__}>
        <View style = {styles.Card}>
    <Text style = {styles.Text}>{username.length <=0 || password.length <=0 ? "Give User Account Detains, Empty Fields Can Not Be Acceptable" :  "Check Given Details,  Given Details not Exist "}</Text>
    </View>
    <Pressable style = {styles.Pressable}><Text style = {[styles.Text, {width: "auto"}] as ViewStyle}>Back</Text></Pressable>
    </View>
        );
    }
  if(boolean_===true) 
  return(
  <View style = {styles.Container__}>
  <View style = {styles.Card}>
<Text style = {styles.Text}>{username.length <=0 || password.length <=0 ? "Give User Account Detains, Empty Fields Can Not Be Acceptable" :  "Check Given Details,  Given Details not Exist "}</Text>
</View>
<Pressable style = {styles.Pressable}><Text style = {[styles.Text, {width: "auto"}] as ViewStyle}onPress = {()=>Error_handling_(false)}>Back</Text></Pressable>
</View>
  )
else{
return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
<View style = {{width: "100%", height: "100%", backgroundColor: "black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}> 
<View style = {{width: "100%", height:didKeyboardShow? "45%": "45%", backgroundColor: "transparent", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", paddingTop: "5%"}}>
<Text style={{width: "80%", backgroundColor: "transparent", marginTop: didKeyboardShow?"20%": "15%", fontSize: 34, textAlign: "center",letterSpacing: 2, color: "white", fontFamily: "Lato-Bold", borderBottomColor: "#2a50ac", borderBottomWidth: 4, paddingBottom: "3%"}}> Login</Text>
{didKeyboardShow ?null : <ImageBackground source=   {require("../../assets/icons/login.png")} resizeMode = "cover" style = {{width: "70%", height: "80%", marginTop: "0%",marginLeft: "25%"}}></ImageBackground>}
</View>
<View style = {{width: "100%", height: "55%", backgroundColor: "transparent",  display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", paddingTop: "0%"}}><Text style = {{width: "80%", color: "white", fontSize: 20, marginBottom: "2%", marginTop: didKeyboardShow ? "-10%": "0%"}}>Enter Your Username</Text>
<TextInput style = {{width: "80%", height: didKeyboardShow ? "20%":"15%", backgroundColor: "transparent", borderRadius:10, marginTop: didKeyboardShow ?  "2%": "0%",borderWidth: 2, borderColor: "#2a50ac",color: "white", fontFamily: "Lato-Regular", paddingRight: "10%",paddingLeft: "3%", padding: "3%", paddingTop: "2%", paddingBottom:"2%" }} onChangeText = {(username) => setUsername(username.toString())}></TextInput>
<Text style = {{width: "80%", color: "white", marginTop: "8%",fontSize: 20, marginBottom: "2%"}}>Enter Your Password</Text>
<TextInput style = {{width: "80%", height: didKeyboardShow ? "20%":"15%", backgroundColor: "transparent", borderRadius:10, marginTop: "0%",borderWidth: 2, borderColor: "#2a50ac", color: "white", fontFamily: "Lato-Regular", paddingRight: "10%", paddingLeft: "3%", padding: "3%", paddingTop: "2%", paddingBottom:"2%"}} onChangeText = {(password)=> setPassword(password.toString())} secureTextEntry = {true}></TextInput>
<Pressable style = {{width: "40%", height: didKeyboardShow ? "20%":"15%",marginTop: didKeyboardShow ?  "5%":"10%", borderRadius: 10, display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", backgroundColor: "#2a50ac",marginBottom: "5%" }} onPress = {()=>username.length <=0 || password.length <=0 || username.length <=0 && password.length <=0 ?  Error_handling_(true):  login(username, password)}>
    <Text style={{ fontSize: 23, color: "white",fontFamily: "Lato-Regular",letterSpacing: 1,}}>Log in</Text>
</Pressable>
{didKeyboardShow ? null :<Pressable onPress={()=>Navigator.navigate("Signup")} >
    <Text style={{ fontSize: 20,fontFamily: "Lato-Regular",letterSpacing: 1,color: "#2a50ac",  borderBottomWidth: 2, paddingBottom: "3%", borderBottomColor: "#2a50ac"}}>Create An Account</Text>
</Pressable>
}
</View>
</View>
</KeyboardAvoidingView>
);
}
}
 const styles = StyleSheet.create({
    container:{
     width: "100%",
     backgroundColor: "#000000",
     // background: "linear-gradient(315deg, #000000 0%, #414141 74%)",
     
     display: "flex",
     alignItems: "center",
     justifyContent: "flex-start",
     color: "white",
 flex: 1
  
 },
 Button : {
   width: "50%",
   borderRadius: 10,
   height: 54,
   backgroundColor: "#2a50ac",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   marginTop: "5%",
   color: "white",
 
 
 },
 Text : {
 color: "white",
 letterSpacing: 3,
 fontFamily: "NotoSans-SemiBold",
 fontSize: 20,
 shadowColor: "#e0fbfc",
 shadowOffset: {
     width: 0,
     height: 2,
 },
 shadowOpacity: 0.25,
 shadowRadius: 3.84,
 elevation: 5,
 },
 Container__ : {
   width: "100%",
   height: "100%",
   backgroundColor: "#000000",
   display: "flex",
   flex:1,
   alignItems: "center",
   justifyContent: "center"
 
 },
 Text__ :{
   color: "white",
   fontSize: 20,
   lineHeight: 30,
   letterSpacing:1,
   width: "80%",
   fontFamily: "NotoSans-Medium",
   },
   Card: {
   width: "80%",
   height: "35%",
   backgroundColor: "#2a50ac",
   borderRadius: 10,
   
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   textAlign: "center",
   },
   Pressable: {
       width: "50%",
       height: 60,
       backgroundColor: "#2a50ac",
       borderRadius: 10,
       borderColor: "#00296b",
       borderWidth: 2,
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       marginTop: 40
   }
})