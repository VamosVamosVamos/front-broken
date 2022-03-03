import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../../firebase";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

<<<<<<< HEAD:src/components/Event.js
const Event = () => {
  return (
    <View>
      <Text> YOU ARE IN Event </Text>
=======
const Home = () => {
  const navigation = useNavigation();

  const handlesSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <Text>Email :{auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handlesSignOut} style={styles.button}>
        <Text style={styles.buttonText}> Sign out </Text>
      </TouchableOpacity>
>>>>>>> f23b56befc40cea075da48553cdc1b1ae77e5839:src/components/Home.js
    </View>
  );
};

<<<<<<< HEAD:src/components/Event.js
export default Event;
=======
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
});
>>>>>>> f23b56befc40cea075da48553cdc1b1ae77e5839:src/components/Home.js
