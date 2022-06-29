import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
export default function Menu(){
    const Navigator = useNavigation();
const onPress = (Route:any)=>{
    const Navigator = useNavigation();
   Navigator.navigate(Route)
}
let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
return(<><View style = {Style.Container}>
    <TouchableOpacity style = {Style.Button} onPress ={()=>Navigator.navigate("Home")}>
        <Text style  = {{fontSize: 25, fontFamily: "Inter_600SemiBold", color: "white"}}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {Style.Button} onPress ={()=>Navigator.navigate("About")}>
        <Text style  = {{fontSize: 25, fontFamily: "Inter_600SemiBold", color: "white"}}>About</Text>
    </TouchableOpacity>
    </View></>)
}
interface ViewStyleType {
    Container : ViewStyle,
    Button: ViewStyle
}
const Style = StyleSheet.create<ViewStyleType>({
    Container: {
        fontFamily: "Inter_100Thin",
        width: "60%",
        height: "60%",
        backgroundColor: "#3a86ff",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    Button: {
        fontFamily: "Inter_100Thin",
        width: "50%",
        height: "15%",
        backgroundColor: "#3a86ff",
        color: "white",
        fontSize: 60
    }
}
)