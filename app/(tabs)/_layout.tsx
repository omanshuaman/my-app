import { Tabs } from "expo-router";
import React from "react";

import TabBar from "@/components/TabBar";
import { IconSymbol } from "@/components/ui/IconSymbol";
import tabicons from "@/constants/tabicons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Platform } from "react-native";

const tabIcons = {
  index: tabicons.MonitorIcon,
  explore: tabicons.magnifyingGlass,
};
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props: any) => <TabBar {...props} tabIcons={tabIcons} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
