import React from "react";
import { View, Text, TouchableOpacity, ScrollView,FlatList } from "react-native";
import { themeColors } from "../theme";
import RestaurantCard from "./restaurantCard";

export default function FeaturedRow({ title, description, restaurant }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-5 ">
        <View  >
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical:30
        }}
        classname="overflow-visible py-5">
        {restaurant.map((restaurant, index) => {
          return <RestaurantCard item={restaurant} key={index} />;
        })}
      </ScrollView>


     


    </View>
  );
}
