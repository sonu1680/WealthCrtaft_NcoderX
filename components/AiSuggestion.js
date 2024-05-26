import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { themeColors } from "../theme";
import axios from "axios";
import ReturnRows from "./returnsRow";
export default function AiSuggestion() {
  const [text, onChangeText] = useState("5");
const [stocks,setStocks]=useState("")
const [returns,setReturn]=useState("")

const handleSubmit = () => {
    console.log("wait");

    axios
      .get(`https://portfolio-recommendation-api.onrender.com/stocks?year=${text}`)
      .then(function (response) {
        console.log(response.data.returns);
        console.log(response.data.stocks);
        setStocks(response.data.returns)
        setReturn(response.data.stocks)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <TextInput
        style={{
          width: "70%",
          height: 40,
          borderWidth: 1,
          borderRadius: 20,
          marginLeft: "10%",
          marginTop: 50,
          paddingLeft: 20,
          color: "black",
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter Year"
        keyboardType="numeric"
      ></TextInput>
      <View
        // onPress={() => navigation.navigate("Cart")}
        style={{ backgroundColor: themeColors.bgColor(1), marginTop: 50 }}
        className="flex-row justify-between items-center mx-4 rounded-full p-4 py-3 shadow-lg text-center "
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            marginLeft: "13%",
          }}
        >
          <TouchableOpacity onPress={() => handleSubmit()}>
            <Text className="font-extrabold text-white text-lg">
              Stock Recommendation
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {stocks.padEnd((data,key)=>{
        console.log("r")
      })}
    </>
  );
}
