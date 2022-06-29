import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewStyle, Image, ImageBackground, TextInput, KeyboardAvoidingView, Platform, Keyboard, ScrollView, Button, Pressable, ImageStyle,} from 'react-native';
import {Dimensions} from 'react-native';
import {useState, useEffect} from "react"
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getUniqueId, getManufacturer } from 'react-native-device-info';
import DeviceInfo from 'react-native-device-info';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { v4 as uuidv4 } from 'uuid';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {useFonts,Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    
    
} from "@expo-google-fonts/inter";
import FloatingShvitiExperience from "../ThreeD/Svgloader"
import Expo from "expo"
import {Scene, Mesh, MeshBasicMaterial, PerspectiveCamera} from "three"
import ExpoTHREE, {Renderer} from 'expo-three';
import { ExpoWebGLRenderingContext , GLView} from 'expo-gl';
import SVG from "../../assets/shapes/Circle/BlackMatte.svg"
import SvgUri from 'react-native-svg'
import AppLoading from 'expo-app-loading';
import Circle from './shapes/Circle';
import Cube from "./shapes/Cube"
import Cone from "./shapes/Cone"
import Cylinder from './shapes/Cylinder';
import PILL from './shapes/Pill';
import Ring from './shapes/Ring';
import { GLView_ } from './Three';
export default function Activity_one(){
    let [fontsLoaded] =  useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
        'NotoSans-SemiBold' : require("../../assets/fonts/NotoSans-SemiBold.ttf"),
        'NotoSans-ExtraBold' : require("../../assets/fonts/NotoSans-ExtraBold.ttf"),
        'Lato-Bold': require("../../assets/fonts/Lato-Bold.ttf"),
        'Lato-Regular': require("../../assets/fonts/Lato-Regular.ttf"),
      });
      const SVG_paths = {
         svg: "../../assets/shapes",
         Circle: "/Circle/",
         Cone: "/Cone/",
         Cube: "/Cube/",
         Cyliner: "/Cylinder/",
         Pill: "/Pill/" ,
        Names: {
            Circle :["Color=Black-Matte.svg", "Color=Blue-Glossy.svg", "Color=Green-Glossy.svg", "Color=Iridescent.svg", "Color=Orange-Glossy.svg", "Color=Purple-Glossy.svg", "Color=White-Glossy.svg", "Color=White-Matte.svg", "Color=Yellow-Glossy.svg"],
            Cone: [],
            Cube: [],
            Cyliner: [],
            Pill: [],

        }
      }
      const Shapes = {
        Circle: Circle()
      }
    //   console.log(SVG_paths.svg+SVG_paths.Circle+SVG_paths.Names.Circle[1])
    return (<>
    <View style = {Styles.View}>
<View style = {[Styles.View, {height: "55%", backgroundColor: "red", justifyContent: "center"} as ViewStyle]}>
{/* <Text style = {Styles.Text}>Welcome To Activity Zone</Text>
{Ring()} */}
</View>
<View style = {[Styles.View, {height: "40%", backgroundColor: "blue"} as ViewStyle]}>    <FloatingShvitiExperience /></View>
    </View>

    </>)
}
interface Styles {
    View: ViewStyle,
    Text: ViewStyle,
    Image: ImageStyle
}
const Styles = StyleSheet.create<Styles>({
    View : {
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    Text: {
        fontFamily: "NotoSans-SemiBold",
        color: "white",
      
    },
    Image:{
        width: "90%",
        height: "98%"
    }
    
})



// onContextCreate = async ({
//     gl,
//     canvas,
//     width,
//     height,
//     scale: pixelRatio,
//   }) => {
//     this.renderer = new ExpoTHREE.Renderer({ gl, pixelRatio, width, height });
//     this.renderer.setClearColor(0xffffff)
//     this.scene = new THREE.Scene();
//     this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     this.camera.position.z = 5;
//     const geometry = new THREE.BoxGeometry(1, 1, 1);

//     const material = new THREE.MeshPhongMaterial({
//       color: 0xff0000,
//     });
    
//     this.cube = new THREE.Mesh(geometry, material);
//     this.scene.add(this.cube);

//     this.scene.add(new THREE.AmbientLight(0x404040));

//     const light = new THREE.DirectionalLight(0xffffff, 0.5);
//     light.position.set(3, 3, 3);
//     this.scene.add(light);
//   };

//   onRender = delta => {
//     this.cube.rotation.x += 3.5 * delta;
//     this.cube.rotation.y += 2 * delta;
//     this.renderer.render(this.scene, this.camera);
//   };

