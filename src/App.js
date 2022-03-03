import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./components/SignUp";
import Login from "./components/Login";
import HomePage from "./screens/HomePage";
import { createDrawerNavigator } from '@react-navigation/drawer';

import  StackNavigator  from "./components/StackNavigator";
import BottomTabNavigator from './components/TabNavigator' 
import DrawerNavigator from "./components/DrawerNavigation";

const Drawer = createDrawerNavigator();

const  App = () => {
  return (
    <NavigationContainer>
    {/* <BottomTabNavigator/> */}

    <DrawerNavigator/>
    
   </NavigationContainer>
 

    
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "73%",
  },

  sign: {
    left: 270,
    bottom: 45,
    fontSize: 17,
    color: "#0C4488",
  },
  log: {
    left: 335,
    bottom: 65,
    fontSize: 17,
    color: "#0C4488",
  },
});
