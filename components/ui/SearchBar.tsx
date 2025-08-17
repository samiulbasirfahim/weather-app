import Background from "@/assets/images/after_noon.webp";
import { BlurView } from "expo-blur";
import { useState } from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/solid";

export default function SearchBar() {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const [locations, setLocations] = useState<{ title: string }[]>([
    { title: "Dhaka, Bangladesh" },
    { title: "Mymensingh, Bangladesh" },
    { title: "Churkhai, Mymensingh, Bangladesh" },
    { title: "Dhaka, Bangladesh" },
    { title: "Mymensingh, Bangladesh" },
    { title: "Churkhai, Mymensingh, Bangladesh" },
    { title: "Dhaka, Bangladesh" },
    { title: "Mymensingh, Bangladesh" },
    { title: "Churkhai, Mymensingh, Bangladesh" },
  ]);

  return (
    <View
      className={`${showSearch ? "w-full rounded-2xl bg-white/20" : "rounded-full"} overflow-hidden absolute top-0 z-[999]`}
    >
      <BlurView
        experimentalBlurMethod="dimezisBlurView"
        intensity={showSearch ? 20 : 0}
        tint="default"
      >
        <View className={`flex-row items-center p-2`}>
          {showSearch && (
            <TextInput
              className="text-black h-10 flex-1 ps-3"
              placeholder="Search..."
              onBlur={() => setShowSearch(false)}
            />
          )}
          <TouchableOpacity
            className="bg-white/40 rounded-full h-10 w-10 items-center justify-center"
            onPress={() => setShowSearch((prev) => !prev)}
          >
            {showSearch ? (
              <XMarkIcon size={24} color={"white"} />
            ) : (
              <MagnifyingGlassIcon size={24} color={"white"} />
            )}
          </TouchableOpacity>
        </View>

        {showSearch && locations.length > 0 && (
          <View className="border-t-2 border-white/20">
            {locations.map((location, i) => (
              <View className="p-3 border-t border-white/10" key={i}>
                <TouchableOpacity className="">
                  <Text>{location.title}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </BlurView>
    </View>
  );
}
