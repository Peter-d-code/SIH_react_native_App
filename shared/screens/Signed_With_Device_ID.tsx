import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewStyle, Image, ImageBackground, TextInput, KeyboardAvoidingView, Platform, Keyboard, ScrollView, Button, Pressable, Touchable,} from 'react-native';
import {Dimensions, } from 'react-native';
import {useState, useEffect} from "react"
import { NavigationContainer,useNavigation,useRoute } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeviceInfo from 'react-native-device-info';
// import Expo from "expo"
import DateTimePicker from '@react-native-community/datetimepicker';
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
import AppLoading from 'expo-app-loading';
// import { ST } from 'next/dist/shared/lib/utils';
interface Signed {
    Username?: string
}
// const route = useRoute()
export default function Signed(props:any){
    const[ID, setID]  = useState(' ')
    const [Counter, setCounter] = useState(1)
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
        'NotoSans-Medium': require("../../assets/fonts/NotoSans-Medium.ttf"),
        'Lato-Bold': require("../../assets/fonts/Lato-Bold.ttf"),
        'Lato-Regular': require("../../assets/fonts/Lato-Regular.ttf"),
    
        
      });
      const Navigator = useNavigation();
      if (!fontsLoaded) {
        return <AppLoading />;
      }


const ID_fun = async()=>{
    setCounter(3)
  const ID = await  fetch('http://192.168.1.3:8001/ID_Key')
  const ID_JSON = await ID.json()
  console.log(ID_JSON.Key)
 await setID(ID_JSON.Key)

}
if(Counter < 2 )
ID_fun();
if(ID.length> 0){
    const Post_Method = {
        Method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: {Key: {ID}}
    }
return (<>
<View style = {Styles.Container}>
    <View style = {Styles.Card}>
<Text style = {Styles.Text}>You are Signed with Username {props.route.params.Username} with Device ID {ID}</Text>
</View>
<Pressable style = {Styles.Pressable}><Text style = {[Styles.Text, {width: "auto"}] as ViewStyle} onPress =  {()=>Navigator.navigate('Puzzle')}>Let's GO</Text></Pressable>
</View>

</>)
}
}
interface Style_interface {
    Container : ViewStyle
    Text: ViewStyle
    Card: ViewStyle
    Pressable: ViewStyle

}
const Styles = StyleSheet.create<Style_interface>({
Container : {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    display: "flex",
    flex:1,
    alignItems: "center",
    justifyContent: "center"

},
Text :{
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
})