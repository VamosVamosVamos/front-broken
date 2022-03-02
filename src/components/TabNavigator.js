import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Football from "./Football";
import HomePage from "./HomePage";
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
     
      <Tab.Screen name="Home" component={HomePage}  options={{
            headerShown: false,
          }} />
      
      <Tab.Screen name="Football" component={Football}  />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;