import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import { featured } from "../constants";
import FeaturedRow from "../components/featuredRow";
import CartIcon from "../components/cartIcon";
import colors from "../constants/colors"
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea} className="bg-gray-50">
      <StatusBar barStyle="dark-content"></StatusBar>
      <View className="absolute bottom-12 w-full  z-10"  > 
      <CartIcon />
      </View>
      <View className="flex-row items-center space-x-2 px-4 ">

        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300 ">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Investment,News" className="ml-2 flex-1" />
          {/* <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600"> Nwe York, NYC</Text>
          </View> */}
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 bg-gray-300 rounded-full"
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>
      {/* main */}
      <ScrollView
        showVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
        }}
      >
        {/* Categories section*/}
        <Categories />

        {/*feature section */}

        <View className="mt-5">
          {featured.map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurant={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
