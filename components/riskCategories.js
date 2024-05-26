import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { risk } from "../constants";

export default function RiskCategories() {
  const [activeCategory, setActiveCategory] = useState(null);
  
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {risk.map((category, index) => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          let textClass = isActive
          ? 'font-semibold text-gray-900'
          : ' text-gray-500';
       
          return (
            <View key={index} className="flex justify-center items-center mr-6 " >
              <TouchableOpacity
                onPress={()=>  setActiveCategory(category.id)}
                className={"flex-row flex-1 justify-center p-1 rounded-full border border-gray-300" + btnClass}
                style={{height:40,width:110}}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={category.image}
                  resizeMethod="contain"
                />
              </TouchableOpacity>
              <Text className={ textClass}>jj{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
