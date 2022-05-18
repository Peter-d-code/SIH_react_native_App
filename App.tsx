import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mainscreen from "./shared/Mainscreen"
import Menu from "./shared/Menu"
import Home from "./shared/screens/Home"
import About from "./shared/screens/About"
import Authenticaton_ from "./shared/screens/Authenticaton_"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
interface RootStackParamList {
  Menu: undefined,
  Home: undefined,
  About: undefined
}

export default function App() {
  return (
    <>
   <Mainscreen />
   </>
  );
}