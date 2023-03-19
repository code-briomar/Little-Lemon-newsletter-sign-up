import * as React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <>
      <View style={pretty.container}>
        {/* Little Lemon Logo */}
        <Image
          source={require("../assets/little-lemon-logo.png")}
          resizeMode="contain"
          style={pretty.logo}
        />
      </View>
      <Text style={pretty.bodyText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <View style={pretty.buttonContainer}>
        <Pressable
          style={pretty.button}
          onPress={() => {
            navigation.navigate("Subscribe");
          }}
        >
          <Text style={pretty.buttonText}>Newsletter</Text>
        </Pressable>
      </View>
    </>
  );
};

const pretty = StyleSheet.create({
  container: {
    flex: 0.5,
    marginTop: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    heigh: 100,
    width: 100,
  },
  bodyText: {
    flex: 0.1,
    fontWeight: "bold",
    fontSize: 15,
    maxWidth: 200,
    textAlign: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2b9348",
    width: "85%",
    alignItems: "center",
    color: "#ggg",
    padding: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
  },
});
export default WelcomeScreen;
