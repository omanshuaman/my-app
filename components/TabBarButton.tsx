import React, { useEffect, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type TabBarButtonProps = {
  key: string;
  style: any;
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  color: string;
  label: any;
  tabIcons: { [key: string]: ImageSourcePropType };
};
const TabBarButton: React.FC<TabBarButtonProps> = (props) => {
  const { isFocused, label, routeName, color, tabIcons } = props;
  const [currentRoute, setCurrentRoute] = useState(routeName);
  const scale = useSharedValue(0);
  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, {
      duration: 350,
    });
  }, [scale, isFocused]);
  useEffect(() => {
    setCurrentRoute(routeName);
  }, [routeName]);

  const icons: { [key: string]: () => React.ReactNode } = {
    index: () => (
      <Image
        source={tabIcons.index}
        tintColor={isFocused ? color : "rgba(255, 255, 255, 0.5)"}
        resizeMode="contain"
        style={styles.icon}
      />
    ),
    explore: () => (
      <Image
        source={tabIcons.explore}
        tintColor={isFocused ? color : "rgba(255, 255, 255, 0.5)"}
        resizeMode="contain"
        style={styles.icon}
      />
    ),
  };

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [0.8, 1]);
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
      <Animated.View style={[animatedIconStyle, styles.iconContainer]}>
        {icons[routeName] && icons[routeName]()}
      </Animated.View>
      {/* <Animated.Text
        style={{
          color: isFocused ? color : "rgba(255, 255, 255, 0.5)",
          fontSize: 10,
          fontWeight: "500",
        }}>
        {label}
      </Animated.Text> */}
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
    padding: 16,
    borderRadius: 22,
  },
  icon: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default React.memo(TabBarButton);
