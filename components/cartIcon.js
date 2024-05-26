import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
export default function CartIcon() {
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-3 w-full z-50">
      <View
        // onPress={() => navigation.navigate("Cart")}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text className="font-extrabold text-white text-lg">Home</Text>
          </TouchableOpacity>
        </View>

        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("News")}>
            <Text className="font-extrabold text-white text-lg">News</Text>
          </TouchableOpacity>
        </View>

        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("ChainGPT")}>
            <Text className="font-extrabold text-white text-lg">ChainGPT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
