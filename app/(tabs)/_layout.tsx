import AnimatedSwipeableTabs from "@/components/layout/GestureHandler";
import SafeView from "@/components/layout/SafeView";
import SwipeableTabs from "@/components/layout/SwipeableTabs";
import { Tabs } from "expo-router";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Gesture } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture";

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
