import React from 'react';
import { Text, View, ImageBackground,Image } from 'react-native';

export default class WelcomeScreen extends React.Component {
    render() {
      return (
        <ImageBackground source={require("../assets/mainbg.jpg")} style={{ alignItems: 'center', width:"100%", height:"100%" }}>
            <View style={{ alignItems: 'center'}}>
              
                <Text style={{fontSize:20, marginTop: 30, color: "orange", fontWeight:"bold"}}>Welcome</Text>
            </View>
         
          
        </ImageBackground>
      );
    }
  }