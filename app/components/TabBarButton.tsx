import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
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

  return (
    <Pressable {...props} style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: isFocused ? "white" : "transparent",
            transform: isFocused ? [{ scale: 0.9 }] : [{ scale: 0.8 }],
            borderRadius: 26,
          },
        ]}>
        {icons[routeName] && icons[routeName]()}
        <Text
          style={{
            color: color,
            fontSize: 9.5,
            fontFamily: "SpaceMono",
          }}>
          {label}
        </Text>
      </View>
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
