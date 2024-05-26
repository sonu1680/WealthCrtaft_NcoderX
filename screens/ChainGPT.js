import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
export default function ChainGPT() {
  const [text, onChangeText] = useState("");
  const [answer,setAnswer]=useState("")
  const handle = () => {
    console.log("wait");

   
    axios
      .get(`https://python-lxy8.onrender.com/chat?question=blockchain`)
      .then(function (response) {
        console.log("your answer",response.data);
        setAnswer(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  

  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your question"
      />

      <TouchableOpacity
        onPress={() => handle()}
        style={{ height: 40, width: 200, borderWidth: 1, borderRadius: 20,marginLeft:20 }}
      >
        <Text>Get answer</Text>
      </TouchableOpacity>
      <Text>{answer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
