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
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Touchable,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ height: 300 }}></View>
        <View style={{ height: 300, alignItems: "center" }}>
          <TextInput
            style={{
              borederWidth: 1,
              padding: 10,
              width: "80%",
              borderRadius: 5,
              marginBottom: 20,
            }}
            placeholder="메뉴입력"
          />
          <TouchableOpacity
            style={{
              width: 110,
              backgroundColor: "blue",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => {
              Alert.alert("커스텀 버튼 누르기");
            }}
          >
            <Text style={{ color: "white", fontWeight: "900", fontSize: 20 }}>
              메뉴 추가
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
