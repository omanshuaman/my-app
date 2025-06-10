import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabBarButton from "./TabBarButton";

type TabBarProps = {
  tabIcons: { [key: string]: ImageSourcePropType };
};
const TabBar: React.FC<BottomTabBarProps & TabBarProps> = ({
  state,
  descriptors,
  navigation,
  tabIcons,
}) => {
  const primaryColor = "#0891b2";
  const greyColor = "#737373";
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabbar, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            style={styles.tabbarItem}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? primaryColor : greyColor}
            label={label}
            tabIcons={tabIcons}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#305f52",
    alignItems: "center",
    paddingVertical: 10,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
  },
});

export default React.memo(TabBar);
