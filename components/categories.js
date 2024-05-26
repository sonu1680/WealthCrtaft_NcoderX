import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { categories } from "../constants";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const navigation=useNavigation();
  const [activeCategory, setActiveCategory] = useState(1);
  const setCategory=(category)=>{
    setActiveCategory(category.id);
    if(category.id==2){
      navigation.navigate("Holding");
    }
  }
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
        {categories.map((category, index) => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          let textClass = isActive
          ? 'font-semibold text-gray-900'
          : ' text-gray-500';
       
          return (
            <View key={index} className="flex justify-center items-center mr-6 ">
              <TouchableOpacity
                onPress={()=> setCategory(category)}
                className={  btnClass}
                style={{height:40,width:110,overflow:'hidden',borderRadius:10}}>
                <Image
                  style={{ width: 110, height: 40 }}
                  source={category.image}
                  resizeMode="contain"
                 
                />
              </TouchableOpacity>
              <Text className={ textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
