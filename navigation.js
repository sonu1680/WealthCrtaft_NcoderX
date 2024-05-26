import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/cartScreen';
import HoldingScreen from "./screens/HoldingScreen";
import NewScreen from './screens/newScreen';
import ChartScreen from './screens/chartScreen';
import ChainGPT from "./screens/ChainGPT"
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />

        <Stack.Screen name="News" component={NewScreen} />

        <Stack.Screen name="Chart" component={ChartScreen} />

        <Stack.Screen name="Holding" component={HoldingScreen} />

        <Stack.Screen name="ChainGPT" component={ChainGPT} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}