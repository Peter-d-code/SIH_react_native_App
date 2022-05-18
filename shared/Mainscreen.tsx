import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewStyle} from 'react-native';
import Menu from "./Menu"
import Home from "./screens/Home"
import About from "./screens/About"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Mainscreen(){
  const Stack = createNativeStackNavigator();
return (<>
<View style = {styles.container}>
<NavigationContainer>
     <Stack.Navigator initialRouteName='Menu'>
    <Stack.Screen name = "Menu" component= {Menu} />
    <Stack.Screen name = "Home" component= {Home} />
    <Stack.Screen name = "About" component= {About} />
    </Stack.Navigator> 
   </NavigationContainer>
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
 
}
}
)