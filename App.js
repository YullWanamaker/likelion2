import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  Scrollview,
} from "react-native";

export default function App() {
  return (
    <View
      style={{
        height: 200,
        padding: 50,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
        }}
      >
        Hi yulls
      </Text>
      <Image
        style={{
          width: 400,
          heihgt: 40,
        }}
        source={require("./image/doo.png")}
      />
    </View>
  );
}
