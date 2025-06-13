import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type ListItemProps = {
  viewableItems: SharedValue<ViewToken[]>;
  item?: {
    key: string;
    image: string;
    name: string;
    jobTitle: string;
    email: string;
  };
};

const ListItem: React.FC<ListItemProps> = React.memo(
  ({ item, viewableItems }) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter((token: ViewToken) => token.isViewable)
          .find(
            (viewableItem: ViewToken) => viewableItem.item.key === item?.key
          )
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0.1),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.8, {
              duration: 300,
            }),
          },
        ],
      };
    }, []);

    if (!item) return null;

    return (
      <Animated.View style={[styles.card, rStyle]}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.jobTitle}>{item.jobTitle}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </Animated.View>
    );
  }
);

export default ListItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    width: Dimensions.get("window").width * 0.9,
    alignSelf: "center",
    marginTop: 18,
    borderRadius: 16,
    backgroundColor: "white",
    padding: 18,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    color: "#1A1A1A",
    fontFamily: "PoppinsMedium",
  },
  jobTitle: {
    fontSize: 14,

    color: "#6B6B6B",
    opacity: 0.7,
    fontFamily: "PoppinsRegular",
  },
  email: {
    fontSize: 13,
    color: "#3478F6",
    fontFamily: "PoppinsMedium",
  },
});
