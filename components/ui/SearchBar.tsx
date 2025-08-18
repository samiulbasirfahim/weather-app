import { City, setSelectedCity } from "@/store/features/citySlice";
import { useLazyGetCitySearchCompletionQuery } from "@/store/features/weatherApi";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { BlurView } from "expo-blur";
import { useDeferredValue, useEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/solid";

export default function SearchBar() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");
  const deferredSearchText = useDeferredValue(searchText);

  const dispatch = useAppDispatch();

  const [searchResult, setSearchResult] = useState<City[]>([]);

  const [searchTrigger, { data: searchResult_unprocessed, isLoading, error }] =
    useLazyGetCitySearchCompletionQuery();

  useEffect(() => {
    setSearchResult(searchResult_unprocessed ?? []);
  }, [searchResult_unprocessed]);

  useEffect(() => {
    if (deferredSearchText.length >= 2) {
      searchTrigger(deferredSearchText);
    }
  }, [deferredSearchText]);

  console.log(error);

  const inputRef = useRef<TextInput | null>(null);

  useEffect(() => {
    setSearchResult([]);
    inputRef.current?.focus();
  }, [showSearch]);

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
              ref={inputRef}
              className="text-black h-10 flex-1 ps-3"
              placeholder="Search..."
              onChangeText={(text) => {
                setSearchText(text);
              }}
              onBlur={() => setShowSearch(false)}
            />
          )}
          <TouchableOpacity
            className="bg-white/40 rounded-full h-10 w-10 items-center justify-center"
            onPress={() => {
              setShowSearch((prev) => !prev);
              setSearchText("");
            }}
          >
            {showSearch ? (
              <XMarkIcon size={24} color={"white"} />
            ) : (
              <MagnifyingGlassIcon size={24} color={"white"} />
            )}
          </TouchableOpacity>
        </View>

        {isLoading ? (
          <View className="p-3 border-t border-white/10">
            <Text>Loading</Text>
          </View>
        ) : (
          <>
            {showSearch && searchResult && searchResult.length > 0 && (
              <View className="border-t-2 border-white/20">
                {searchResult.map((location, i) => (
                  <View className="p-3 border-t border-white/10" key={i}>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(setSelectedCity(location));
                        setShowSearch(false);
                        setSearchText("");
                      }}
                    >
                      <Text className="text-base">
                        {location.name} - {location.region}
                        {location.region && " - "}
                        {location.country}
                      </Text>

                      <Text className="text-sm">
                        {location.lat} - {location.lon}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </>
        )}
      </BlurView>
    </View>
  );
}
