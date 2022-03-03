import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./components/SignUp";
import Login from "./components/Login";
<<<<<<< HEAD
import HomePage from "./screens/HomePage";
import { createDrawerNavigator } from '@react-navigation/drawer';

import  StackNavigator  from "./components/StackNavigator";
import BottomTabNavigator from './components/TabNavigator' 
import DrawerNavigator from "./components/DrawerNavigation";

const Drawer = createDrawerNavigator();
=======
import Home from "./components/Home";
import SettingBar from "./components/SettingBar";
import stadiums from "./data";
>>>>>>> f23b56befc40cea075da48553cdc1b1ae77e5839

const  App = () => {
  return (
    <NavigationContainer>
<<<<<<< HEAD
    {/* <BottomTabNavigator/> */}

    <DrawerNavigator/>
    
   </NavigationContainer>
 

    
=======
      <Stack.Navigator>
        {/* <Stack.Screen name="HomePage" component={HomePage} /> */}
        <Stack.Screen name="SettingBar" component={SettingBar} />
        <Stack.Screen name="SignUp" component={SignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
>>>>>>> f23b56befc40cea075da48553cdc1b1ae77e5839
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
