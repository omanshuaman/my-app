import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const TabBarButton = (props) => {
  const { isFocused, label, routeName, color, tabIcons } = props;
  const [currentRoute, setCurrentRoute] = useState(routeName);

  useEffect(() => {
    setCurrentRoute(routeName);
  }, [routeName]);

  const icons = {
    index: (props) => (
      <Image
        source={tabIcons.index}
        tintColor="white"
        resizeMode="contain"
        style={styles.icon}
      />
    ),
    explore: (props) => (
      <Image
        source={tabIcons.explore}
        tintColor="white"
        resizeMode="contain"
        style={styles.icon}
      />
    ),
  };
  const backgroundColor = useSharedValue("rgba(0,0,0,0)");

  useEffect(() => {
    backgroundColor.value = withSpring(
      isFocused ? "#323232" : "rgba(0,0,0,0)",
      {
        duration: 0,
      }
    );
  }, [backgroundColor, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value,
    };
  });

  return (
    <Pressable {...props} style={styles.container}>
      <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
        {icons[currentRoute]({
          color,
        })}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
  },
  iconContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  icon: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabBarButton;
