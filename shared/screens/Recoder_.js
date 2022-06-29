import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Pressable, StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
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
import * as Sharing from 'expo-sharing';
import LottieView from 'lottie-react-native'; 
export default function Recording() {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");

  async function startRecording() {
    // let [fontsLoaded] =  useFonts({
    //   Inter_100Thin,
    //   Inter_200ExtraLight,
    //   Inter_300Light,
    //   Inter_400Regular,
    //   Inter_500Medium,
    //   Inter_600SemiBold,
    //   Inter_700Bold,
    //   Inter_800ExtraBold,
    //   Inter_900Black,
    //   'NotoSans-SemiBold' : require("../../assets/fonts/NotoSans-SemiBold.ttf"),
    //   'NotoSans-ExtraBold' : require("../../assets/fonts/NotoSans-ExtraBold.ttf"),
    //   'Lato-Bold': require("../../assets/fonts/Lato-Bold.ttf"),
    //   'Lato-Regular': require("../../assets/fonts/Lato-Regular.ttf"),
    // });
    // if (!fontsLoaded) {
    //   return <AppLoading />;
    // }
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
          <Button style={[styles.button, {marginRight: "-10%"}]} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
          <Button style={[styles.button, {marginRight: "-5%"}]} onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></Button>
        </View>
      );
    });
  }
  const Pause_icon = require("../../assets/icons/Pause.png")
  const Play_icon = require("../../assets/icons/Play.png")
// const Pause = ()=> <Image source = {Pause_icon} style ={{width: "10%", height: "10%"}}/>
// const Play = ()=> <Image source = {Play_icon} style ={{width: "10%", height: "10%"}}/>
  return (
    <View style={styles.container}>

      <Text>{message}</Text>
      {/* <Pressable onPress ={recording ? stopRecording : startRecording} style = {{backgroundColor: "blue",width: "30%", height: "20%"}}>
      <Image source = {recording ? Play_icon : Pause_icon} style ={{width: "100%", height: "100%"}}/>
      </Pressable> */}
      {/* <View style = {{width: "50%", backgroundColor: "#2a50ac", height: "25%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 6,}}> */}
      <Pressable onPress={recording ? stopRecording : startRecording} style={{width: '100%', height: '100%', backgroundColor: "transparent", display: "flex", justifyContent: "space-around", alignItems: "center",overflow: "visible"}}>
        {/* <Text style = {{fontSize: 16}}>{recording ? <Image source = {Pause_icon} /> : <Image source = {Play_icon} style ={{width: "10%", height: "10%", display: 'flex'}}/>}
        </Text> */}
         <Image source={recording  ? Play_icon : Pause_icon} style={{width: '22%', height: recording ? "40%" : "30%",overflow: "visible", marginTop: "6%"}} />
         {getRecordingLines()}
       </Pressable>

        
    
      <StatusBar style="auto" />
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#2A2A64',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"

  },
  row: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%",
    backgroundColor: "transparent",
    paddingRight: "5%"
    
  },
  fill: {
   color: "white",
    margin: 16,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.7,
    borderBottomColor: "#2a50ac",
    borderBottomWidth: 4,
    paddingBottom: 10,
  },
  button: {
    margin: 16,
    paddingLeft: 50
  }
});
