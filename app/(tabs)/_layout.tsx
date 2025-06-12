import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { Image, TouchableOpacity } from "react-native";
import TabBar from "../components/TabBar";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      screenOptions={{
        headerTitle: "",
        headerStyle: {
          height: 100,
        },
        headerTransparent: true,
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 16 }}>
            <Ionicons name="menu" size={28} color="#333" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              marginRight: 16,
            }}
          />
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "People",
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Tabs>
  );
}
