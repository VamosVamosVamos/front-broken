import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator ,SignUpStackNavigator} from "./StackNavigator";
import Football from "./Football";
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
     
      <Tab.Screen name="SignUp" component={SignUpStackNavigator} />
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Football" component={Football}/>
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;