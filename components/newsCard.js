import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";

export default function NewsCard({ news }) {
  const handleClick = () => {
    Linking.openURL(news.url);
  };
  return (
    <View className="flex flex-1">
      <View className=" w-full bg-[#24252A] rounded-2xl pb-4 mb-3 flex flex-1">
        <Image
          source={
            news.urlToImage === null
              ? require("../assets/images/midcap.png")
              : { uri: news.urlToImage }
          }
          className="h-52 w-full rounded-t-2xl"
        />
        <View className="bg-[#24252A] -mt-12 flex-1 rounded-xl">
          <Text className="px-4 pt-3 text-white text-lg font-semibold">
            {news.title.substring(0, 45)}...
          </Text>
          <View className="mt-1">
            <Text className="text-gray-400 px-4">
              {news.description.substring(0, 110)}...
            </Text>
          </View>
          <TouchableOpacity
            className="flex-1 items-center justify-center pt-2"
            onPress={handleClick}
          >
            <Text className="text-lg font-bold text-[#9AD0C2]">SOURCE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
