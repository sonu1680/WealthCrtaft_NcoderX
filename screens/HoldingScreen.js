import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function HoldingScreen() {
    const navigation=useNavigation();
  return (
    <View className="flex flex-1 bg-gray-100 ">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
      <Text className="text-3xl" >My Holdings</Text>

     </View>
  );
}
