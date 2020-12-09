import React from 'react';
import { Text, View, TouchableOpacity,TextInput,Image,StyleSheet } from 'react-native';

import { color } from 'react-native-reanimated';

export default class ReadingScreen extends React.Component {
    constructor(){
      super();
      this.state = {
       
      }
    }

   

    render() {    
     
        return(
          <View style={styles.container}>
           
          </View>
        );
      }
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'dark blue'
    },
   
  });