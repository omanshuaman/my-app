import React from "react";
import { FlatList, StyleSheet, View, ViewToken } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import ListItem from "../components/ListItem";

const data = new Array(50).fill(0).map((_, index) => ({
  id: index,
}));
const HomePage = () => {
  const viewableItems = useSharedValue<ViewToken[]>([]);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          // console.log("Visible items:", JSON.stringify(viewableItems, null, 2));
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => (
          <ListItem item={item} viewableItems={viewableItems} />
        )}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 60,
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});
