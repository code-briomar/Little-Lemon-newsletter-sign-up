import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TextInput,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
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
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "padding"}
        >
          <TextInput
            style={pretty.input}
            placeholder="Type your email"
            value={email}
            onChangeText={onChangeEmail}
            keyboardType="email-address"
          />
        </KeyboardAvoidingView>
      </View>
      <View style={pretty.buttonContainer}>
        {reg.test(email) === false ? (
          <Pressable style={pretty.buttonInvalid}>
            <Text style={pretty.buttonText}>Subscribe</Text>
          </Pressable>
        ) : (
          <Pressable
            style={pretty.button}
            onPress={() => {
              Alert.alert("Thanks for subscribing, stay tuned!");
            }}
            onPressOut={Keyboard.dismiss}
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
    flex: 0.2,
    fontSize: 15,
    maxWidth: 350,
    textAlign: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 0.12,
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
