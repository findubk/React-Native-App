import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Navigator from "./Routes/drawer";


const getFonts=()=>Font.loadAsync({
  'nunito-regular':require('./assets/Fonts/Nunito-Regular.ttf'),
  'nunito-Bold':require('./assets/Fonts/Nunito-Bold.ttf')
})


export default function App() {
  const [fontsLoadded, setfontsLoadded] = useState(false)

  if(fontsLoadded){
    return (
      <Navigator></Navigator>
        //<Home></Home>
    );}
    else{
        return(
             <AppLoading
             startAsync={getFonts}
            onFinish={()=>setfontsLoadded(true)}
            onError={console.warn}
            />
           
        )
    }
}


