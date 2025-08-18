import Background from "@/assets/images/after_noon.webp";
import SafeView from "@/components/layout/SafeView";
import { ImageBackground, Text, View } from "react-native";
import SearchBar from "@/components/ui/SearchBar";
import WeatherDisplay from "@/components/ui/WeatherDisplay";
import { Tabs } from "expo-router";

import { HomeIcon as HomeSolid } from "react-native-heroicons/solid";
import { HomeIcon as HomeOutline } from "react-native-heroicons/outline";
import { selectSelectedCity } from "@/store/features/citySlice";
import { useAppSelector } from "@/store/hooks";

export default function HomePage() {
  const selectedCity = useAppSelector(selectSelectedCity);
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
          {selectedCity?.id ? (
            <WeatherDisplay />
          ) : (
            <View className="flex-1 justify-center items-center">
              <Text className="text-4xl text-white/50 bold">
                NO LOCATION SELECTED
              </Text>
            </View>
          )}
        </SafeView>
      </ImageBackground>
    </>
  );
}
