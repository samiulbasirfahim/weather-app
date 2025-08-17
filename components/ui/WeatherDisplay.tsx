import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function WeatherDisplay() {
  return (
    <View className="flex-1 items-center justify-between">
      <Text className="text-white/20 text-xl text-center">
        <Text className="text-2xl font-bold text-white/50">Mymensingh</Text>,
        Bangladesh
      </Text>
      <View className="items-center w-full">
        <Text className="text-center text-white/50 font-bold text-9xl justify-start">
          29°
        </Text>
        <Feather name="cloud-snow" size={80} color={"#fffFFF80"} />
      </View>
      <View></View>
    </View>
  );
}
