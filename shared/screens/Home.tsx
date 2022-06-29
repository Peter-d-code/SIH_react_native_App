import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

export default function Home(){

    return(<><View>
        <Text>
 You are at Home Page
        </Text>
        </View></>)
}
interface ViewStyleType {
    Container : ViewStyle
}
const Style = StyleSheet.create<ViewStyleType>({
    Container: {
        width: "60%",
        height: "60%",
        backgroundColor: "#3a86ff",
        color: "white"
    }
})