import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadingScreen from './screens/ReadingScreen';
import WrittingScreen from './screens/WrittingScreen';
import WelcomeScreen from './screens/WelcomeScreen';


export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Reading: {screen: ReadingScreen},
  Writing: {screen: WrittingScreen},
});

const switchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  TabNavigator: {screen: TabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
