import React from "react";
import { Dimensions, StyleSheet, ViewToken } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
type ListItemProps = {
  viewableItems: SharedValue<ViewToken[]>;
  item?: { id: number };
};
const ListItem: React.FC<ListItemProps> = React.memo(
  ({ item, viewableItems }) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter((token: ViewToken) => token.isViewable)
          .find((viewableItem: ViewToken) => viewableItem.item.id === item?.id)
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
    }, [viewableItems, item]);

    return (
      <Animated.View
        style={[
          rStyle,
          {
            height: 80,
            width: Dimensions.get("window").width * 0.9,
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 10,
            backgroundColor: "#78CAD2",
          },
        ]}></Animated.View>
    );
  }
);

export default ListItem;

const styles = StyleSheet.create({});
