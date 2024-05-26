import "@walletconnect/react-native-compat";
import {
  WagmiConfig,
 useAccount

} from "wagmi";
import { sepolia,mantaTestnet } from "viem/chains";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
  W3mButton,
} from "@web3modal/wagmi-react-native";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "8218314be0e1eb1290b8512a4a5ad62b";

// 2. Create config
const metadata = {
  name: "Web3Modal RN NFT Minting",
  description: "Web3Modal RN NFT Minting Tutorial",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const chains = [sepolia];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});




import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import Categories from "../components/categories";
import RiskCategories from "../components/riskCategories";
import { risk } from "../constants";
import AiSuggestion from "../components/AiSuggestion";

const RestaurantScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  let filterDish = item.dishes;
  const [activeCategory, setActiveCategory] = useState(2);
  const [Dishes, setDishes] = useState(filterDish);

  const riskSelection = (e) => {
    setActiveCategory(e.id);
    //console.log(e.name);

    filterDish = filterDish
      .filter(function (item) {
     
        return item.name == e.name;
      })
      .map(function (data) {
        return data;
      });
      setDishes(filterDish);
  };


  const hero = () => {
    setActiveCategory(1);
    
    filterDish = filterDish
      .filter(function (item) {
        return item.name =="High Returns";
      })
      .map(function ({ id, name, description, price, image }) {
        return { id, name, description, price, image };
      });
      setDishes(filterDish);
  };

  useLayoutEffect(() => {
    hero();
  }, []);

  return (
    <WagmiConfig config={wagmiConfig}>
    <View>
      {/* <CartIcon /> */}
      <ScrollView>
        <View classname="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
          <W3mButton />
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/star.png")}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700"> {item.stars} | </Text>
                  <Text className="text-gray-700">
                    ({item.reviews} review) -{" "}
                    <Text className="font-semibold">{item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                {/* <Icon.MapPin color="gray" width="15" height="15" /> */}
                <Text className="text-gray-700 text-xs">
                  {/* Nearby | {item.address} */}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36  bg-white">
          {/* <Text className="px-4 py-4 text-2xl font-bold ">Menu</Text> */}
          {/* <RiskCategories/> */}
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
                console.log(activeCategory)
                let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
                let textClass = isActive
                  ? "font-semibold text-gray-900"
                  : " text-gray-500";

                return (
                  <View
                    key={index}
                    className="flex justify-center items-center mr-6 "
                  >
                    <TouchableOpacity
                      onPress={() => riskSelection(category)}
                      className={
                        
                        btnClass
                      }
                      style={{ height: 40, width: 110 ,overflow:'hidden',borderRadius:10 }}
                    >
                      <Image
                        style={{ width:110, height: 35}}
                        source={category.image}
                        resizeMode="contain"
                      
                       
                       
                      />
                    </TouchableOpacity>
                    <Text className={textClass}>{category.name}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          {/* Dishes */}

          {activeCategory==4?(<AiSuggestion></AiSuggestion>):(
            Dishes.map((dish, index) => (
              <DishRow item={dish} key={index} />
            ))
          )}
          
        </View>
      </ScrollView>
    </View>
    <Web3Modal />
      </WagmiConfig>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
