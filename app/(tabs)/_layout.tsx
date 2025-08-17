import SafeView from "@/components/layout/SafeView";
import { Tabs } from "expo-router";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export default function TabsLayout() {
  return (
    <SafeView edges={["bottom"]}>
      <Tabs
        screenOptions={{
          headerShown: false,
          lazy: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            borderTopWidth: 0,
            elevation: 0,
            height: 50,
          },
          tabBarActiveTintColor: "#2dd4bf",
          tabBarBackground: () => null,
          tabBarButton: ({ children, ...props }) => (
            <TouchableOpacity
              {...(props as TouchableOpacityProps)}
              className="bg-blue-500 rounded-full p-3"
            >
              {children}
            </TouchableOpacity>
          ),
        }}
      />
    </SafeView>
  );
}
