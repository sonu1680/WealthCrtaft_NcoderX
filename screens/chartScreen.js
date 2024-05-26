import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Form,
  TextInput,
  KeyboardAwareScrollView,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

import CartIcon from "../components/cartIcon";
import { themeColors } from "../theme";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function ChartScreen() {
  const [name, setname] = useState("");
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [ipfs, setIpfs] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    axios
      .post(`https://uploadfilepinata.onrender.com/api/createNFT`, {
        params: { Name: name, description: message, price: price },
      })
      .then(function (response) {
        console.log(response.data.dat2);
        setIpfs(response.data.dat2);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.textStyle}>Enter Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setname}
        value={name}
      ></TextInput>

      <Text style={styles.textStyle}>Enter Description</Text>
      <TextInput
        style={styles.input}
        onChangeText={setMessage}
        value={message}
      ></TextInput>

      <Text style={styles.textStyle}>Enter Price</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price}
      ></TextInput>

      <Text style={styles.textStyle}>Select Picture</Text>

      <View style={styles.container1}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => handleSubmit()}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "700" }}
          >
            Press
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: "700", fontSize: 15, textAlign: "center" }}>
        {ipfs}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "90%",
    borderRadius: 15,
    borderWidth: 1,
    borderBottomColor: "black",
    padding: 10,
  },
  Container: {
    padding: 20,
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontWeight: "900",
    marginTop: 30,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  submitBtn: {
    height: 50,
    width: "90",
    backgroundColor: "red",
    borderRadius: 20,

    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignContent: "center",
    marginTop: 100,
  },
});
