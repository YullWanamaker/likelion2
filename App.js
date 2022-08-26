import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Touchable,
} from "react-native";
import MenuInput from "./components/MenuInput";
import MenuInputFunc from "./components/MenuInputFunc";

export default function App() {
  const [selectList, setSelectList] = useState([""]);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ height: 300 }}></View>
        <MenuInputFunc selectList={selectList} setSelectList={setSelectList} />
      </ScrollView>
    </SafeAreaView>
  );
}
