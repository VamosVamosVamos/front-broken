import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./components/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
function login() {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}

function SignUp() {
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  );
}

function Homee() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SignUp" component={SignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
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
});
