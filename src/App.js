import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Football";
import DrawerNavigation from "./components/DrawerNavigation"
import HomePage from "./components/HomePage";
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { MainStackNavigator } from "./components/StackNavigator";
import BottomTabNavigator from './components/TabNavigator' 
// import stadiums from "./data";
import DrawerNavigator from "./components/DrawerNavigation";
// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const  App = () => {
  return (
    <NavigationContainer>
   <BottomTabNavigator/>
   {/* <DrawerNavigator/> */}
   
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
  category: {
    fontSize: 25,
    bottom: 85,
    right: 10,
    color: "#0C4488",
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

//
      // <Stack.Navigator>
      //   <Stack.Screen name="HomePage" component={HomePage} />
      //   <Stack.Screen name="SignUp" component={SignIn} />
      //   <Stack.Screen name="Login" component={Login} />
      //   <Stack.Screen name="Home" component={Home} />
      //    <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} /> */}
      //   </Stack.Navigator>
      //   <Drawer.Navigator initialRouteName="Home">
      //     <Drawer.Screen name="Home" component={HomePage} />
      //     <Drawer.Screen name="Login" component={Login} />
      //   </Drawer.Navigator> 