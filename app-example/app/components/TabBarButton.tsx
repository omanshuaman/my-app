import React, { useEffect } from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
type TabBarButtonProps = {
  key: string;
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  color: string;

  label: string;
};
const TabBarButton: React.FC<TabBarButtonProps> = (props) => {
  const { isFocused, label, routeName, color } = props;
  const icons: { [key: string]: () => React.ReactNode } = {
    index: () => (
      <Image
        source={require("@/assets/icons/home.png")}
        tintColor={color}
        resizeMode="contain"
        style={styles.icon}
      />
    ),
    orders: () => (
      <Image
        source={require("@/assets/icons/bag.png")}
        tintColor={color}
        resizeMode="contain"
        style={styles.icon}
      />
    ),
    services: () => (
      <Image
        source={require("@/assets/icons/grid.png")}
        tintColor={color}
        resizeMode="contain"
        style={styles.icon}
      />
    ),
    profile: () => (
      <Image
        source={require("@/assets/icons/user.png")}
        tintColor={color}
        resizeMode="contain"
        style={styles.icon}
      />
    ),
  };
  const scale = useSharedValue(0);
  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, {
      duration: 350,
    });
  }, [scale, isFocused]);
  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [0.8, 0.9]);
    const backgroundColor = interpolateColor(
      scale.value,
      [0, 1],
      ["transparent", "white"]
    );
    return {
      transform: [{ scale: scaleValue }],
      backgroundColor,
    };
  });

  return (
    <Pressable {...props} style={styles.container}>
      <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
        {icons[routeName] && icons[routeName]()}
        <Text
          style={{
            color: isFocused ? color : "rgba(255, 255, 255, 0.9)",
            fontSize: 9.5,
            fontFamily: "SpaceMono",
            width: "100%",
          }}>
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
  },
  iconContainer: {
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 26,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
  },
  icon: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
