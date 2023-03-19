import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

const SubscribeScreen = () => {
  const [email, onChangeEmail] = useState("");

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let validateEmailFunction = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === true) {
      return email;
    }
  };
  return (
    <>
      <View style={pretty.container}>
        {/* Little Lemon Logo */}
        <Image
          source={require("../assets/little-lemon-logo-grey.png")}
          resizeMode="contain"
          style={pretty.logo}
        />
      </View>
      <Text style={pretty.bodyText}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <View style={pretty.inputContainer}>
        {/* <KeyboardAvoidingView> */}
        <TextInput
          style={pretty.input}
          placeholder="Type your email"
          value={email}
          onChangeText={onChangeEmail}
        />
        {/* </KeyboardAvoidingView> */}
      </View>
      <View style={pretty.buttonContainer}>
        {reg.test(email) === false ? (
          <Pressable
            style={pretty.buttonInvalid}
            onPress={() => {
              // navigation.navigate("Subscribe");
            }}
          >
            <Text style={pretty.buttonText}>Subscribe</Text>
          </Pressable>
        ) : (
          <Pressable
            style={pretty.button}
            onPress={() => {
              // navigation.navigate("Subscribe");
            }}
          >
            <Text style={pretty.buttonText}>Subscribe</Text>
          </Pressable>
        )}
      </View>
    </>
  );
};

const pretty = StyleSheet.create({
  container: {
    flex: 0.34,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    heigh: 100,
    width: 100,
  },
  bodyText: {
    flex: 0.1,
    fontSize: 15,
    maxWidth: 350,
    textAlign: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 0.1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2b9348",
    width: "89%",
    alignItems: "center",
    color: "#ggg",
    padding: 9,
    borderRadius: 10,
  },
  buttonInvalid: {
    backgroundColor: "#adb5bd",
    width: "89%",
    alignItems: "center",
    color: "#ced4da",
    padding: 9,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
  },
  inputContainer: {
    alignItems: "center",
  },
  input: {
    width: 340,
    borderWidth: 3,
    borderColor: "#adb5bd",
    color: "#333",
    padding: 5,
    borderRadius: 10,
  },
});
export default SubscribeScreen;
