import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectSelectedCity } from "@/store/features/citySlice";
import { useEffect } from "react";
import { useGetCityWeatherQuery } from "@/store/features/weatherApi";

export default function WeatherDisplay() {
  const selectedCity = useAppSelector(selectSelectedCity);
  const { data, isLoading, isError } = useGetCityWeatherQuery(
    selectedCity?.id ?? "",
  );

  console.log(selectedCity);
  console.log(data);

  return (
    <View className="flex-1 items-center justify-between">
      <Text className="text-white/20 text-xl text-center">
        <Text className="text-2xl font-bold text-white/50">
          {selectedCity?.name}
        </Text>
        , {selectedCity?.country}
      </Text>
      <View className="items-center w-full">
        <Text className="text-center text-white/50 font-bold text-9xl justify-start">
          {data?.temperature}°
        </Text>
        <Feather name="cloud-snow" size={80} color={"#fffFFF80"} />
      </View>

      <Text className="text-xl text-white/50 font-bold">Sunday, 16 Aug</Text>

      <View className="flex-row gap-8 flex-wrap items-center justify-center px-10">
        <View className="items-center">
          <Feather name="cloud-snow" size={30} color={"#fffFFF80"} />
          <Text className="text-sm text-white/50">Sunday</Text>
        </View>
        <View className="items-center">
          <Feather name="cloud-snow" size={30} color={"#fffFFF80"} />
          <Text className="text-sm text-white/50">Sunday</Text>
        </View>

        <View className="items-center">
          <Feather name="cloud-snow" size={30} color={"#fffFFF80"} />
          <Text className="text-sm text-white/50">Sunday</Text>
        </View>
        <View className="items-center">
          <Feather name="cloud-snow" size={30} color={"#fffFFF80"} />
          <Text className="text-sm text-white/50">Sunday</Text>
        </View>
        <View className="items-center">
          <Feather name="cloud-snow" size={30} color={"#fffFFF80"} />
          <Text className="text-sm text-white/50">Sunday</Text>
        </View>
        <View className="items-center">
          <Feather name="cloud-snow" size={30} color={"#fffFFF80"} />
          <Text className="text-sm text-white/50">Sunday</Text>
        </View>
      </View>
    </View>
  );
}
