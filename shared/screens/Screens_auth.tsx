import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {AppStack, AuthStack,} from "./allroutes"
import {NavigationContainer} from '@react-navigation/native';
export default function Auth_request(){


    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='login' screenOptions={{
       headerShown: false
     }}>
   {auth_Data ? AppStack : AuthStack}
      </Stack.Navigator> 
      </NavigationContainer>
    )
}