import { StyleSheet, Text, View, ViewStyle, Image, ImageBackground, TextInput, KeyboardAvoidingView, Platform, Keyboard, ScrollView, Button, Pressable, FlatList,} from 'react-native';
import {styles} from "./Sign_in"
import {useState, useEffect} from "react"
import {UNSPLASH_RANDOM_API,Random_pic_Api} from "@env"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native'; 
import {Buffer} from "buffer"
import { counter } from '@fortawesome/fontawesome-svg-core';
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
import { Audio } from 'three';
import Recording from "./Recoder_";
import { useAuth } from './auth_context';

// import reactStringReplace as Replace from 'react-string-replace';

export default function Image_discription(){
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

    const Random = ():string=>Math.floor(Math.random()*((233-1)+1)).toString()
    // console.log(`../../assets/Images/0${Random()}.jpg`)
    const Auth = useAuth()
    const [counter, setCounter] = useState(0)
    const [Push, setPush] = useState(2)
    const [length, setLength] = useState(0)
    const [randomImage, setRandomImage] = useState('https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80')
    const [isAudio, setAudio]= useState(false)
    const[isWrite, setWriter] = useState(false)
    const [exceed, setLimit] = useState(false)
    const [data, setData] = useState([{title: "", id:"1"}] as Array<any>)
    const Navigator = useNavigation();
    const [inputData, setinputData] = useState([{URL: "", Point: []}])
     const Random_pic =  async ()=> {
      setCounter(counter+1)
      try{
        const link = await fetch(UNSPLASH_RANDOM_API).then(res=>res.json())
        const {full} = link.urls
        setRandomImage(full.toString())
      }
        catch(Err){
          console.log(Err)
            setLimit(true)
        }
if(exceed === false)
console.log("yes")
        // const {full} = link.urls
        // setRandomImage(full.toString())
      
  

    }
    if(counter < 2 && exceed === false)
    Random_pic();
    const Data:any = [{title:"", id: '1'}]
    const Push_ = ()=>
    {
const obj_data_fun = (args:any)=> {
  setPush(Push+1)
 const obj_data = [...data, { title: "",
  id: args.toString(),
}]
setData(obj_data)
console.log(data)

// return obj_data
}
     
      obj_data_fun(Push)
    }
    const onPress_ = (item:any)=>{
return item
    }
    const[id,setId] = useState(0)
    const data_settlemt = (param)=>{
     data.forEach(e=>e.id ===id ? e.title = param: null)
    }

    const _renderItem = ({item}) => 
    {
     return (
       <KeyboardAvoidingView behavior =  "padding">
      <Pressable onPress={onPress_} style={Styles.Pressable}>
        
 <TextInput style = {Styles.Text_input} defaultValue={item.title} multiline={true} onFocus = {()=>{
  setId(item.id)
   item.id === (Push-1).toString() ?   Push_() : null
 }} onChangeText= {(e_)=>data_settlemt(e_)} 
 
 /> 
      </Pressable>
      </KeyboardAvoidingView>
      )
 }
 const [logout, setLogout] = useState(false)
const Ramdom_picture_ = ()=>{
  if(isAudio === true && logout === false)
    return (<>
     <View style = {[Styles.Divbox, {backgroundColor: "transparent", marginTop: "60%", width: "96%"} as ViewStyle]}>
     <Pressable style = {{backgroundColor: "transparent", height: "26%", width: "auto", top: "-10%",left: "40%"}} onPress = {()=>{
    setAudio(false)
    setWriter(false)
  }}><LottieView source = {require("../../assets/icons/Back.json")} style={{width: "90%", height: "90%",marginLeft: "0%"}} autoPlay loop/>
</Pressable>
<Recording />
</View>
      
    </>)
       if(isWrite === true && logout === false)
       return (<>
       <View style = {{width: "100%", backgroundColor: "transparent", height: "12%",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 10}}>
      <Text style = {{ width: "100%",textAlign: "center",color: "white" ,fontSize: 24,fontFamily: "Lato-Bold",
letterSpacing: 1}}>
    Express yourself 
  </Text>
  <Pressable style = {{backgroundColor: "transparent", marginLeft: -40, height: "100%", width: "10%"}} onPress = {()=>{
    setAudio(false)
    setWriter(false)
  }}><LottieView source = {require("../../assets/icons/Back.json")} style={{width: "90%", height: "90%",marginLeft: "0%"}} autoPlay loop/>
</Pressable>
  </View>
  <View style = {{width: "40%", height: 6, backgroundColor: "#2a50ac", marginTop: 4}}>

  </View>
  <FlatList data = {data}
  renderItem = {_renderItem}
  keyExtractor = {(items)=>items.id} style = {Styles.FlatList}/>
       </>)
       if(exceed === true)
         return (<>
<View style = {Styles.Divbox} >
  <Text>LIMIT EXCEED </Text>
</View>
</>)

       else {
        return(<>
             {/* <Pressable style={{backgroundColor: "transparent", position: "absolute",top: "5%",width: "30%", height: "auto",display: "flex", justifyContent: "center" , alignItems: "center",right: "5%"}}><Text style={{fontSize: 16, color: "white", fontFamily: 'Lato-Bold', borderBottomColor: "#2a50ac", borderBottomWidth: 2, paddingBottom: 10,}} onPress =  {()=>Navigator.navigate("Aactivity_two")} onPress = {()=>Navigator.navigate('Quickdraw')}>Next Activity</Text></Pressable> */}
             <Pressable style = {{width: "50%", height: "20%", backgroundColor: "transprent", marginLeft: "-50%", padding: 0}}  onPress = {()=>setLogout(!logout)}><LottieView source={require( '../../assets/icons/menu.json')} autoPlay loop style={{height: "100%", width: "30%"}}/></Pressable>
          <Image source = {{uri: randomImage}} resizeMode="cover" style = {Styles.Image}/>
         
         </>)
       }
}

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
        return(<>
    <View style = {styles.container}>
    <View style = {Styles.Divbox}>
    {/* <Image source = {{uri: randomImage}} resizeMode="cover" style = {Styles.Image}/> */}
    <View   style = {{backgroundColor: "transparent", height: "100%", width: "100%", justifyContent: "flex-start", alignItems: "center",marginTop: 0}}>

<Ramdom_picture_ />
  {/* <TextInput style = {Styles.Text_input} multiline={true}/> */}
 
</View>
    </View>
    
    <View style = {Styles.Divbox_two}>
 
        <View style = {{backgroundColor: "transparent", height: "60%", width: "90%", flexDirection: "row", borderRadius: 10, justifyContent: "space-around", alignItems: "center",overflow: "visible" }}>
{/* <Image source = {require("../../assets/icons/MIC.png")} resizeMode = 'cover' style = {{width: 100, height: 100}} /> */}

<View style = {{width: "0%", height: "90%", backgroundColor: "red"}}>
<Pressable style = {{backgroundColor: "red", width: "100%"}} onPress = {()=>{
  if(isWrite){
  setWriter(false)
  setAudio(true)
  }
else
setAudio(true)
}
  }>
<LottieView source = {require("../../assets/icons/65263-mic-animation.json")} style={{width: "90%", height: "90%",marginLeft: "-50%"}}  autoPlay loop/>
</Pressable>
</View>
<View style = {{width: "0%", height: "90%", backgroundColor: "transparent"}}>
  <Pressable style = {{backgroundColor: "red", width: "100%"}} onPress =  {()=>{
  if(isAudio){
    setAudio(false)
    setWriter(true)
  }
  else
  setWriter(true)
}}>
<LottieView source = {require("../../assets/icons/67210-writing-blue-bg.json")} style={{width: "90%", height: "90%",marginLeft: "-50%"}} autoPlay loop/>
</Pressable>
</View>



    </View>
    </View>

<Pressable style = {{width: "40%", height: "7%", justifyContent: "center", alignItems: "center", position: "absolute", bottom: "5%", borderRadius: 10,   backgroundColor: "#2a50ac" }} onPress = {Random_pic}><Text style = {{color: "white",fontSize: 24}} onPress = {()=> isWrite ? Auth.input_fieds(data, Auth.authData?.Username): Random_pic()}> { isWrite ? 'Submit':'Next'} </Text></Pressable>

    </View>
    </>
)
}
// interface Styles {
//     Divbox : ImageBackground,
//     Divbox_two: ViewStyle,
//     Image: ViewStyle,
//     Todotext: ViewStyle,
//     Text_input: ViewStyle,
//     FlatList: FlatList,
// }
const Styles = StyleSheet.create({
Divbox: {
    width: "90%",
    height: "50%",
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor:  "transparent",
    marginTop: "12%",
    borderRadius: 10,
},
Divbox_two: {
    width: "97%",
    height: "25%",
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor:  "transparent",
    marginTop: "15%",
    borderRadius: 10,
},
Image: {
  width: "100%",
  height: "100%",
  borderRadius: 10,
  marginTop: "1%"
},

Todotext: {
fontSize: 24,
color: "white",
fontFamily: "Lato-Bold",
letterSpacing: 1
},
Text_input: {
width: "90%",
height: 70,
backgroundColor: "#000814ed",
marginTop: "15%",
borderRadius: 10,
borderColor: "#2a50ac",
borderWidth: 2,
color: "white",
fontFamily: "Lato-Regular",
paddingLeft: 15,
paddingRight: 15,
fontSize: 20,
paddingTop: 10,
paddingBottom: 10,

},
FlatList: {
  width: "90%",
  height: 60,
  backgroundColor:  "transparent",

},
Pressable : {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
},
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
  Pressable_ : {
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
