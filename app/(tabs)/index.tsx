import { faker } from "@faker-js/faker";
import React from "react";
import { FlatList, Image, StyleSheet, View, ViewToken } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import ListItem from "../components/ListItem";

const DATA = [...Array(50).keys()].map((_, i) => {
  return {
    key: faker.string.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.arrayElement([
      "women",
      "men",
    ])}/${faker.number.int({ min: 1, max: 99 })}.jpg`,
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    email: faker.internet.email(),
  };
});
const HomePage = () => {
  const viewableItems = useSharedValue<ViewToken[]>([]);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/background.jpg")}
        style={[StyleSheet.absoluteFillObject, { opacity: 0.8 }]}
        blurRadius={100}
      />
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          // console.log("Visible items:", JSON.stringify(viewableItems, null, 2));
          viewableItems.value = vItems;
        }}
        contentContainerStyle={{
          marginTop: 55,
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
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});
