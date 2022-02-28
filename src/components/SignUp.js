import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { auth } from "../../firebase";
import Input from "./Input";

const SignIn = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { height } = useWindowDimensions();

  // const onSignIn = () => {
  //   console.warn("working");
  // };
  const handlesSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email.trim(), password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.root}>
      <Input
        placeholder="firstName"
        value={firstName}
        setValue={setFirstName}
      />
      <Input placeholder="lastName" value={lastName} setValue={setlastName} />
      <Input placeholder="email" value={email} setValue={setEmail} />
      <Input
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <Input placeholder="address" value={address} setValue={setAddress} />
      <Input
        placeholder="dateOfBirth"
        value={dateOfBirth}
        setValue={setdateOfBirth}
      />
      <Input
        style={styles.num}
        placeholder="phoneNumber"
        keyboardType="numeric"
        value={phoneNumber}
        setValue={setPhoneNumber}
      />

      <Pressable onPress={handlesSignUp} style={styles.container}>
        <Text style={styles.text}>Sign up </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 180,
  },
  container: {
    backgroundColor: "#3B71F3",
    width: "700%",
    padding: 13,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});
export default SignIn;
