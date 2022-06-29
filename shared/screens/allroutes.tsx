import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Login from "./Login_"
import Image_discription from "./Image_discription"
import Puzzle  from './Puzzle';
import Sign_in from "./Sign_in"
const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='Puzzle'  screenOptions={{
      headerShown: false}}>
 <Stack.Screen name = "Aactivity_two" component = {Image_discription} />
    <Stack.Screen name = "Puzzle" component= {Puzzle} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='login'  screenOptions={{
      headerShown: false}}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name = "Signup" component= {Sign_in} />
    </Stack.Navigator>
  );
};
export {AppStack, AuthStack}