import React, { Component } from "react";
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

class MenuInput extends Component {
  render() {
    return (
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
          onPress={() => {}}
        >
          <Text style={{ color: "white", fontWeight: "900", fontSize: 20 }}>
            메뉴 추가
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MenuInput;
