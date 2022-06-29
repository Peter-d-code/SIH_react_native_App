import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewStyle,TextInput,Button } from 'react-native';

export default function Authenticaton_(){
    return(<><View style = {{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "10%",
        height: "60%",
        backgroundColor: "red"
    }}>
    <Button title= "Login" /> 
    <Button title= "Signup" /> 
        </View></>)
}