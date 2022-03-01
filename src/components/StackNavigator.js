import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Football";
// import SignUp from "./SignUp"; 
import Login from "./Login";
import HomePage from "./HomePage";
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomePage} />
      {/* <Stack.Screen name="Login" component={Login} /> */}
    </Stack.Navigator>
  );
};
const SignUpStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
export  { MainStackNavigator ,SignUpStackNavigator};