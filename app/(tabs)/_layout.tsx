import { Tabs } from "expo-router";
import React from "react";

import TabBar from "@/components/TabBar";
import { IconSymbol } from "@/components/ui/IconSymbol";
import tabicons from "@/constants/tabicons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

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
        headerTransparent: true,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: 18,
          },

          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={18} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={18} color="white" />
            </TouchableOpacity>
          ),
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
