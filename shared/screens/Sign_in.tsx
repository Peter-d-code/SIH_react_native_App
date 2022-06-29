import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewStyle, Image, ImageBackground, TextInput, KeyboardAvoidingView, Platform, Keyboard, ScrollView, Button, Pressable,} from 'react-native';
import {Dimensions} from 'react-native';
import {useState, useEffect, useContext} from "react"
import Menu from "../Menu"
import Home from "./Home"
import About from "./About"
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTimePicker from '@react-native-community/datetimepicker';
import LottieView from 'lottie-react-native'; 
import { getUniqueId, getManufacturer } from 'react-native-device-info';
import DeviceInfo from 'react-native-device-info';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from './auth_context';
import {authService} from "./authService"
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {useFonts,Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    
} from "@expo-google-fonts/inter"
import {AuthContext} from "./auth_context"
import AppLoading from 'expo-app-loading';
export default function Sign_in(props){
  const Navigator = useNavigation();
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] =  useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    'NotoSans-SemiBold' : require("../../assets/fonts/NotoSans-SemiBold.ttf"),
    'NotoSans-ExtraBold' : require("../../assets/fonts/NotoSans-ExtraBold.ttf"),
    'Lato-Bold': require("../../assets/fonts/Lato-Bold.ttf"),
    'Lato-Regular': require("../../assets/fonts/Lato-Regular.ttf"),
  });
  // const Image = {uri: "../../assets/illustration/business-3d-man-lying-with-laptop.png"};
  const [didKeyboardShow, setKeyboardShow ] = useState(false);
const [windowWidth, setWindowwidth] = useState(Dimensions.get('window').width)
const [windowHeight, setWindowheight] = useState(Dimensions.get('window').height)
const [Username, setUsername] = useState("")

// const [context, setContext] = useContext(AuthContext)
console.log(useAuth())
  useEffect(()=>{
    const subscription =   Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
     const subscription_ = Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
 
    return ()=>{
      subscription.remove()
      subscription_.remove()
  };
},[]);

const Date_Variable:Date = new Date()
const [date, setDate] = useState(Date_Variable);
const [mode, setMode] = useState('date');
const [show, setShow] = useState(false);
const [IsEmpty_fields, setBoolean] = useState(false);
const [password, setPassword] = useState('')
const onChange = (event:any, selectedDate:any) => {
  const currentDate = selectedDate;
  setShow(false);
  setDate(currentDate);
};
// if((Username.length <=0 && date.toLocaleDateString().length <=0) || (Username.length <=0 || date.toLocaleDateString().length <=0))
// setBoolean(true)
// console.log(date.toString())
const auth_ =useAuth()
const showMode = (currentMode:any) => {
  setShow(true);
  setMode(currentMode);
};

const showDatepicker = () => {
  showMode('date');
};

const showTimepicker = () => {
  showMode('time');
};
  const _keyboardDidShow = () => {
    setKeyboardShow(true) 
    setWindowheight(Dimensions.get('screen').height)
  }
  const _keyboardDidHide = () => {
    setKeyboardShow(false)
    setWindowheight(Dimensions.get('screen').height)
 }
// const Deviceid = DeviceInfo.getAndroidId().then((android=>console.log(android)));
 if (!fontsLoaded) {
  return <AppLoading />;
}
console.log(300/windowHeight*100);
if(auth_.boolean_ === true){
  return (
    <View style = {styles.Container__}>
      <View style = {styles.Card}>
  <Text style = {styles.Text}>User_name Is Already Exis, Try again with Diffrent Username </Text>
  </View>
  <Pressable style = {styles.Pressable}><Text style = {[styles.Text, {width: "auto"}] as ViewStyle} onPress =  {()=>auth_.Error_handling_(false)}>Back</Text></Pressable>
  </View>
  )
  }
if(auth_.boolean_ === false){
return (<>

{/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}> */}
<View style = {didKeyboardShow ? [styles.container, {height: windowHeight}] as ViewStyle : [styles.container, {height: "100%"}] as ViewStyle}>

{/* <View style = {styles.container}> */}
{/* <NavigationContainer>
     <Stack.Navigator initialRouteName='Menu'>
    <Stack.Screen name = "Menu" component= {Menu} />
    <Stack.Screen name = "Home" component= {Home} />
    <Stack.Screen name = "About" component= {About} />
    </Stack.Navigator> 
   </NavigationContainer> */}
    <View style = {{width: "95%", height: didKeyboardShow ?windowHeight/2-100 :windowHeight/2-50, position: "absolute", top: "0%", borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: "transparent", display: "flex",alignItems: "center", justifyContent: "center"}}>
    
      <ImageBackground source={require("../../assets/illustration/business-3d-man-lying-with-laptop.png")} resizeMode = "center" style = {{minHeight: "auto",minWidth: "auto",width: "90%", height: "80%", transform: [{rotate: "20deg"}],position: "relative", top: "20%",left: "5%"}}/>
      <Text style = {{color: "white", fontSize: 34, fontFamily: "NotoSans-ExtraBold", letterSpacing: 3, position: "relative", top: "-30%",left: "5%"}}> WELCOME </Text>
</View>
  
{/* <KeyboardAwareScrollView   onKeyboardWillShow={(frames: Object) => {
    console.log('Keyboard event', frames)
  }}> */}

   <View style = {{width: "95%", height: didKeyboardShow ? "30%": "70%" , backgroundColor: "transparent", borderTopLeftRadius: 10, borderTopRightRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: didKeyboardShow ? "60%":"40%",}}>
   <KeyboardAwareScrollView scrollEnabled={true}
enableAutomaticScroll={true}  style = {{width: "98%", height: "98%",display: "flex",backgroundColor: "transparent"}}>
           {/* <KeyboardAwareScrollView scrollEnabled={true}
enableAutomaticScroll={true}> */}
        <View  style = {{width: "98%", height: "98%", backgroundColor: "transparent",display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection:  "column",}}>
       
          <Text style={{width: "66%", fontSize: 20,fontFamily: "Lato-Bold", color: "white", marginTop: "20%", marginBottom: "2%"}}>Enter Your Name</Text><TextInput style = {{width: "62%", height: 50,backgroundColor: "#000814", borderRadius: 10, padding: 10, color: "white", paddingRight: "10%", borderColor: "#2a50ac", borderWidth: 2,marginLeft: "-6%"}} onChangeText = {Username=>setUsername(Username)}></TextInput>
       <Text style={{width: "66%", fontSize: 20,fontFamily: "Lato-Bold", color: "white", marginTop: "8%", marginBottom: "2%"}}>Enter You'r DOB</Text>
    <TextInput style = {{width: "62%", height: 50,maxHeight: "20%",backgroundColor: "#000814", borderRadius: 10, padding: 10, borderWidth: 2, borderColor: "#2a50ac", color: "white", fontFamily: "Lato-Regular", paddingRight: "10%", marginLeft: "-6%"}} onPressIn = {()=>showDatepicker()} value= {show?"":date.toDateString()}></TextInput>
    <Text style={{width: "66%", fontSize: 20,fontFamily: "Lato-Bold", color: "white", marginTop: "8%", marginBottom: "2%"}}>Enter You'r Password</Text>
    <TextInput style = {{width: "62%", height: 50,maxHeight: "20%",backgroundColor: "#000814", borderRadius: 10, padding: 10, borderWidth: 2, borderColor: "#2a50ac", color: "white", fontFamily: "Lato-Regular", paddingRight: "10%", marginLeft: "-6%"}}  secureTextEntry={true} onChangeText = {password => setPassword(password)} ></TextInput>

<Pressable style = {didKeyboardShow? styles.Button : [styles.Button, {}] as ViewStyle }><Text style = {styles.Text} onPress = {()=>{
  if((Username.length <=0 && date.toLocaleDateString().length <=0) || (Username.length <=0 || date.toLocaleDateString().length <=0))
  setBoolean(true)
  else
  auth_.signIn(Username, date.toString(), password)
  // Navigator.navigate("Submit", {
  // Username: Username})
  
  }}>Submit</Text></Pressable>

    {/* </ScrollView> */}
    {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    
       </View>
     
       </KeyboardAwareScrollView>
   
</View>


    </View>

   </>)
}

}
interface Props {
    container: ViewStyle
    Button: ViewStyle
    Text: ViewStyle,
    Container__: ViewStyle,
    Text__: ViewStyle,
    Card: ViewStyle,
    Pressable: ViewStyle
}
export const styles = StyleSheet.create<Props>({
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
  marginBottom: 100
  },
  Pressable : {
      width: "50%",
      height: 60,
      backgroundColor: "#2a50ac",
      borderRadius: 10,
      borderColor: "#00296b",
      borderWidth: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
  }
}
)

