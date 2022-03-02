import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Football from "./Football";
import LogOut from "./LogOut";
import Basketball from "./Basketball";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="VAMOS" component={TabNavigator} />
      <Drawer.Screen name="Football" component={Football}  />
      <Drawer.Screen name="Basketball" component={Basketball} />
      <Drawer.Screen name="LogOut" component={LogOut} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;