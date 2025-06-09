import React from "react";
import { Image, StyleSheet, View } from "react-native";
import HomePage from "../index";
const BD_IMG =
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: BD_IMG }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={50}
      />
      <HomePage />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
