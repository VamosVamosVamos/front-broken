import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import 'react-native-gesture-handler';

export default class SettingBar extends Component {
  render() {
    return (
      <MenuContext style={styles.container}>
        <View>
          <Menu>
            <MenuTrigger>
              <AntDesign name="downcircle" size={24} color="black" />
            </MenuTrigger>

            <MenuOptions>
              <MenuOption>
                <Text onPress={() => this.props.navigation.navigate("Login")}>
                  Login
                </Text>
              </MenuOption>
              <MenuOption>
                <Text onPress={() => this.props.navigation.navigate("SignUp")}>
                  SignUp
                </Text>
              </MenuOption>
              <MenuOption>
                <Text>Night Mode</Text>
              </MenuOption>
              <MenuOption>
                <Text>Log Out</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </MenuContext>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingTop: 10,
    paddingLeft: 370,
  },
  place: {
    paddingTop: 90,
  },
});
