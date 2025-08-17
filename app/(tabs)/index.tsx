import Background from "@/assets/images/after_noon.webp";
import SafeView from "@/components/layout/SafeView";
import { ImageBackground, View } from "react-native";
import SearchBar from "@/components/ui/SearchBar";
import WeatherDisplay from "@/components/ui/WeatherDisplay";
import { Tabs } from "expo-router";

import { HomeIcon as HomeSolid } from "react-native-heroicons/solid";
import { HomeIcon as HomeOutline } from "react-native-heroicons/outline";

export default function HomePage() {
  return (
    <>
      <Tabs.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <HomeSolid color={color} size={size} />
            ) : (
              <HomeOutline color={color} size={size} />
            );
          },
        }}
      />
      <ImageBackground
        source={Background}
        blurRadius={80}
        className="flex-1 pb-14"
      >
        <SafeView className="p-6 ">
          <View className="justify-center items-end pb-20">
            <SearchBar />
          </View>
          <WeatherDisplay />
        </SafeView>
      </ImageBackground>
    </>
  );
}
