import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Sign_in from "./shared/screens/Sign_in"
import Menu from "./shared/Menu"
import Home from "./shared/screens/Home"
import About from "./shared/screens/About"
import Signed from "./shared/screens/Signed_With_Device_ID"
import Authenticaton_ from "./shared/screens/Authenticaton_"
import { NavigationContainer } from '@react-navigation/native'
import Image_discription from "./shared/screens/Image_discription"
import Puzzle from "./shared/screens/Puzzle"
import Quickdraw from "./shared/screens/Quickdraw"
import Login from "./shared/screens/Login_"
import {AppStack, AuthStack} from "./shared/screens/allroutes"
import {Router} from "./shared/screens/routes_validator"
import {AuthProvider} from "./shared/screens/auth_context"
// import Activity_one from "./shared/screens/Activity_one"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
interface RootStackParamList {
  Menu: undefined,
  Home: undefined,
  About: undefined
}
type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
};
    
type AuthData = {
  token: string;
  email: string;
  name: string;
};

export default function App() {


  const Stack = createNativeStackNavigator();
  return (
    <>
    <AuthProvider>
      <Router />
    </AuthProvider>
   </>
  );
}