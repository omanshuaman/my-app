import React from "react";
import { StyleSheet, View } from "react-native";

const MyOrders = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box2]} />
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  box: {
    width: 130,
    height: 130,
    borderRadius: 30,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  box2: {
    backgroundColor: "#FCA5A5",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//   },
//   boxRow: {
//     flexDirection: "row",
//     marginVertical: 8,
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderRadius: 20,
//     marginHorizontal: 10,
//     // shadow for iOS
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     // elevation for Android
//     elevation: 4,
//   },
//   box1: {
//     backgroundColor: "#6EE7B7", // teal/green
//   },
//   box2: {
//     backgroundColor: "#FCA5A5", // soft red
//   },
//   box3: {
//     backgroundColor: "#93C5FD", // blue
//   },
//   box4: {
//     backgroundColor: "#FCD34D", // yellow
//   },
// });
