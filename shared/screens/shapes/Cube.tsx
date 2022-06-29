import react, { useEffect, useState } from "react"
import { StyleSheet, Text, View, ViewStyle, Image, ImageBackground, TextInput, KeyboardAvoidingView, Platform, Keyboard, ScrollView, Button, Pressable, ImageStyle,} from 'react-native';
import BlackMatte from "../../../assets/shapes/Cube/BlackMatte.svg"
import ColorBlueGlossy from "../../../assets/shapes/Cube/Color=Blue-Glossy.svg"
import ColorGreenGlossy from "../../../assets/shapes/Cube/Color=Green-Glossy.svg"
import ColorIridescent from "../../../assets/shapes/Cube/Color=Iridescent.svg"
import ColorOrangeGlossy from "../../../assets/shapes/Cube/Color=Orange-Glossy.svg"
import ColorPurpleGlossy from "../../../assets/shapes/Cube/Color=Purple-Glossy.svg"
import ColorYellowGlossy from "../../../assets/shapes/Cube/Color=Yellow-Glossy.svg"

export default function Cube(){
    const Cube = {
        BlackMatte: ()=><ColorBlueGlossy width={"60%"} height = {"60%"}/>,
        ColorGreenGlossy: ()=> <ColorGreenGlossy width={"60%"} height = {"60%"}/>,
        ColorIridescent: ()=><ColorIridescent width={"60%"} height = {"60%"}/>,
        ColorOrangeGlossy: ()=><ColorOrangeGlossy width={"60%"} height = {"60%"}/>,
        ColorPurpleGlossy: ()=> <ColorPurpleGlossy width={"60%"} height = {"60%"}/>,
        ColorYellowGlossy: ()=> <ColorYellowGlossy width={"60%"} height = {"60%"}/>
    }
    const [Rand, setRand] = useState(1);
    const Arr = ["","BlackMatte", "ColorGreenGlossy", "ColorIridescent", "ColorOrangeGlossy", "ColorPurpleGlossy", "ColorYellowGlossy"]
    const rand= ()=>{
        setRand(Math.floor(Math.random()*(Arr.length-1)+1))}

//    (():ReturnType<typeof setInterval>=>setInterval(rand,3000))()
useEffect(()=>{
  const Interval =   setInterval(rand, 3000);
  return ()=>clearInterval(Interval)
}, [])
    return(<>
  {Cube[Arr[Rand]]()}
  
    </>)
}