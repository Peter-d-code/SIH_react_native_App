import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewStyle} from 'react-native';
import Menu from "./Menu"
import Home from "./screens/Home"
import About from "./screens/About"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
export default function Mainscreen(){
  const Stack = createNativeStackNavigator();
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
return (<>
<View style = {styles.container}>
{/* <NavigationContainer>
     <Stack.Navigator initialRouteName='Menu'>
    <Stack.Screen name = "Menu" component= {Menu} />
    <Stack.Screen name = "Home" component= {Home} />
    <Stack.Screen name = "About" component= {About} />
    </Stack.Navigator> 
   </NavigationContainer> */}
   <Text style = {{color: "white", fontSize: 20, marginTop: "40%", fontFamily: "Inter_600SemiBold", letterSpacing: 1}}> Create An Account </Text>
   <View style = {{width: "95%", height: "60%", position: "absolute", top: "40%", backgroundColor: "#262626", borderTopLeftRadius: 10, borderTopRightRadius: 10}}>

</View>
    </View></>)
}
interface Props {
    container: ViewStyle
}
const styles = StyleSheet.create<Props>({
   container:{
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    // background: "linear-gradient(315deg, #000000 0%, #414141 74%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "white"

 
}
}
)