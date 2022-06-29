import LottieView from 'lottie-react-native'; 
import React,{useEffect,useState,useRef} from 'react';
import { captureRef } from 'react-native-view-shot';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, View, Button, Pressable,PixelRatio, ViewStyle  } from 'react-native';
import { PicturePuzzle, PuzzlePieces } from 'react-native-picture-puzzle';
import {UNSPLASH_RANDOM_API,Random_pic_Api} from "@env"
import { useAuth } from './auth_context';
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

import { usePreventScreenCapture } from 'expo-screen-capture';
import AppLoading from 'expo-app-loading';
import * as ScreenCapture from 'expo-screen-capture';
import * as MediaLibrary from 'expo-media-library';
import ViewShot from "react-native-view-shot";
import {Share,Alert} from "react-native"
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher';
const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  
  },
  row: { flexDirection: 'row', marginTop: "5%",justifyContent: 'flex-end'},
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10.0,
  },
  Container__ : {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    display: "flex",
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  
  },
Text__ :{
  color: "white",
  fontSize: 20,
  lineHeight: 30,
  letterSpacing:1,
  width: "80%",
  fontFamily: "NotoSans-Medium",
  },
  Card: {
  width: "80%",
  height: "35%",
  backgroundColor: "#2a50ac",
  borderRadius: 10,
  
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginBottom: 100
  },
  Pressable : {
      width: "50%",
      height: 60,
      backgroundColor: "#2a50ac",
      borderRadius: 10,
      borderColor: "#00296b",
      borderWidth: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
  },
  Text : {
    color: "white",
    letterSpacing: 3,
    fontFamily: "NotoSans-SemiBold",
    fontSize: 20,
    shadowColor: "#e0fbfc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "80%",
    }
});

// function shuffle(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//   }
// }

export default function Puzzle() {
  const Auth = useAuth()
  const [Status, setStatus] = useState()
  const status  =  async()=>{
   const status =  await MediaLibrary.requestPermissionsAsync();
   setStatus(Status)
  }
  const [image, setImage] = useState(null);
  const [logout, setLogout] = useState(false)
  status()
  if ( Status=== 'granted') {
   ScreenCapture.addScreenshotListener(() => {
     alert('Thanks for screenshotting my beautiful app ');
   });
 }
 const _activate = async () => {
   await ScreenCapture.preventScreenCaptureAsync();
 };
 const _deactivate = async () => {
   await ScreenCapture.allowScreenCaptureAsync();
 };
 const shuffle = (array)=> {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
 const targetPixelCount = 1080; 
   const [counter, setCounter] = useState(0)
     const [Push, setPush] = useState(2)
     const [randomImage, setRandomImage] = useState('')
     const [exceed, setLimit] = useState(false)
   const originalPieces = React.useMemo<PuzzlePieces>(() => (
     [...Array(16)].map((_, i) => i)
   ), []);
   const ref = useRef()
   const shuffledPieces = React.useMemo<PuzzlePieces>(() => {
     const p = [...originalPieces];
     shuffle(p);
     return p;
   }, [originalPieces]);
   const [hidden, setHidden] = React.useState<number | null>(0);
   const [pieces, setPieces] = React.useState<PuzzlePieces>(shuffledPieces);
   const [source, setSource] = useState({uri: 'https://images.unsplash.com/photo-1655068867332-83374a86990c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzQxNDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTYwNjI3MTA&ixlib=rb-1.2.1&q=80'})
   const renderLoading = React.useCallback((): JSX.Element => (
     <View style={[StyleSheet.absoluteFill, styles.center]}>
       <ActivityIndicator />
     </View>
   ), []);
   const Random_pic =  async ()=> {
     setCounter(counter+1)
     try{
       const link = await fetch(UNSPLASH_RANDOM_API).then(res=>res.json())
       const {full} =  link.urls
       console.log(full)
       setSource({uri: full.toString()})
     }
       catch(Err){
           setLimit(true)
           console.log(Err)
       }
   }
   if(counter < 2)
   Random_pic();
   const onChange = React.useCallback((nextPieces: PuzzlePieces, nextHidden: number | null): void => {
     setPieces([...nextPieces]);
     setHidden(nextHidden);
   }, [setPieces, setHidden]);
   const solve = React.useCallback(() => {
     setPieces(originalPieces);
     setHidden(null);
   }, [setPieces, originalPieces]);
   const retry = React.useCallback(() => {
     setPieces(shuffledPieces);
     setHidden(0);
   }, [setPieces, shuffledPieces]);ViewShot__

   const ViewShot__= useRef();


 
 const _take_Screenshot = async ()=>{
   const targetPixelCount = 1080; 
   const pixelRatio = PixelRatio.get(); 
   const pixels = targetPixelCount / pixelRatio;
   alert("Image is saved in database")
   const Image_uri = await ViewShot__.current.capture()
 await FileSystem.uploadAsync('http://192.168.1.5:8001/image', Image_uri, {
      httpMethod: 'POST',
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      fieldName: 'demo_image',
      parameters : {
        Username: Auth.authData?.Username as string
      }
   
})

}


const Navigator =  useNavigation()
if(logout === true)
return(
<View style = {styles.Container__}>
<View style = {styles.Card}>
<Text style = {[styles.Text, {width: "90%"}]}>We appreciate to have valueable Time of Yours  </Text>
</View>
<Pressable style = {styles.Pressable}><Text style = {[styles.Text, {width: "auto"}] as ViewStyle} onPress =  {()=>{Auth.signOut()}}>Logout</Text></Pressable>
<Pressable style={{borderColor: "transparent"}}><Text style={{width: "100%", color: "white", fontSize: 24, marginTop: "2%", borderBottomColor: "#2A50AC", borderBottomWidth: 4, paddingBottom: 5}}onPress =  {()=>setLogout(!logout)}>Back</Text></Pressable>
</View>
)
else
 return (
    <View style={[styles.container, styles.center, ]}>
      <Pressable style = {{width: "100%", height: "10%", backgroundColor: "transparent", position: "absolute", top: "5%"}} onPress = {()=>setLogout(!logout)}><LottieView source={require( '../../assets/icons/menu.json')} autoPlay loop style={{height: "100%", width: "30%"}}/></Pressable>
      <View style = {{width : "100%", height: "10%", backgroundColor: "transparent", marginTop: "0%", marginBottom: "5%", display : "flex", justifyContent :"space-between", alignItems: "center", flexDirection: "row"}}>     
      <Pressable style = {{width: "20%", backgroundColor: "transparent", height: "100%",display : "flex", justifyContent :"space-between", alignItems: "center", flexDirection: "row", marginLeft:"4%"}}  onPress = {_take_Screenshot}>
     <LottieView source={require("../../assets/icons/camera__.json")}  style={{width: "100%", height: "100%"}} autoPlay loop />
     </Pressable>
      <Text style={{color: 'black', fontSize: 18,letterSpacing: 1.5,  fontFamily: "Lato-Bold", backgroundColor: "transparent", marginLejft: "5%"}}>
         PICTURE PUZZLE
       </Text> 
       <Pressable style={{backgroundColor: "transparent" , transform: [{rotateY: "180deg"}]}}   onPress = {()=>Navigator.navigate("Aactivity_two")}>
       <LottieView source = {require("../../assets/icons/Back.json")} style={{width: "90%", height: "90%",marginLeft: "0%"}} autoPlay loop />
         </Pressable> 
       </View>
       <ViewShot ref={ViewShot__} options={{format: "jpg", quality: 1.0 , result : "tmpfile"}}>
       <PicturePuzzle
       style={styles.shadow}
       renderLoading={renderLoading}
       pieces={pieces}
       hidden={hidden}
       onChange={onChange}
       size={290}
       source={source}
     />
       <View style = {{backgroundColor: "blue", height: "10%", width: "10%"}}></View> 
</ViewShot>
     <View>
       <View style={styles.row}>
       </View>
     </View>
     <View  style = {{display: "flex", flexDirection: 'row', width: "70%", backgroundColor: "transparent", height: "10%", justifyContent: "space-around", alignItems: "center",marginTop: "-20%" }} >
         < Pressable onPress={retry}>
                <Text style={{color: 'blue', marginRight: 5, width: "100%" ,fontSize: 20, fontFamily:"NotoSans-SemiBold"}}>
                  Retry
                </Text>
              </Pressable>
              <Pressable onPress={solve}>
                <Text style={{color: 'blue', backgroundColor: "transparent", fontSize: 20,fontFamily:"NotoSans-SemiBold"}}>
                  Solve
                </Text>
              </Pressable>
              </View>
              <Pressable style = {{width: "40%", height: "9%", justifyContent: "center", alignItems: "center", position: "absolute", bottom: "5%", borderRadius: 10,   backgroundColor: "#2a50ac" }} onPress = {Random_pic}><Text style = {{color: "white",fontSize: 24}}>Next</Text></Pressable>

    </View>
  );
  }

  //  <Pressable style = {{width: "100%", backgroundColor: "transparent", position: "absolute", height: "5%", top: "10%", left: "5%"}}  >
  //     {/* <ViewShot ref={ref} options={{ fileName: "fileone" ,format: "jpg", quality: 0.9 }}> */}
  //       <Pressable onPress = {Capture_Screen}>
  //     <LottieView source={require("../../assets/icons/camera__.json")}  style={{width: "100%", height: "100%"}} autoPlay loop />
  //     </Pressable>
  //   {/* </ViewShot> */}

  //   </Pressable> 
    
