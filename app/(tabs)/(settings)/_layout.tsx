import { Cog8ToothIcon as SettingsSolid } from "react-native-heroicons/solid";
import { Cog8ToothIcon as SettingsOutline } from "react-native-heroicons/outline";
import { Stack, Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function SettingsPage() {
  return (
    <>
      <Tabs.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <SettingsSolid color={color} size={size} />
            ) : (
              <SettingsOutline color={color} size={size} />
            );
          },
        }}
      />
      <Stack />
    </>
  );
}
