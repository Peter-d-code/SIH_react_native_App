import React, { Component } from 'react'
import {View,Text} from "react-native"
import Drawing from './Paint/Drawning_canva'
import Canvas from 'react-native-canvas';
import SignatureScreen from "./Paint/Drawning_canva"
export default class Quickdraw extends Component {
  state = {}
  render() 
  {
    // function Component() {
    //  const  handleCanvas = (canvas) => {
    //     const ctx = canvas.getContext('2d');
    //     ctx.fillStyle = 'purple';
    //     ctx.fillRect(0, 0, 100, 100);
    //   }
    //     return (
    //       <Canvas ref={handleCanvas}/> 
    //     )
    //   }

      return(
    <View style= {{width: "100%", height: "100%", backgroundColor: "#000000"}}>
     <View style={{width: "90%", height: "60%", backgroundColor: "white", marginLeft: "5%", marginTop: "15%", borderRadius: 10}}>
<SignatureScreen />
     </View>
    
     <View style={{width: "76%", height: "10%", backgroundColor: "#adb5bd", marginLeft: "12%", marginTop: "auto", borderRadius: 20, bottom: "4.5%"}}></View>
    </View>
    )
  }
}