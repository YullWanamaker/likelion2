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

const MenuInputFunc = ({ selectList, setSelectList }) => {
  return (
    <View style={{ height: 300, alignItems: "center" }}>
      {selectList.map((menu, key) => {
        return (
          <TextInput
            key={key}
            style={{
              borederWidth: 1,
              padding: 10,
              width: "80%",
              borderRadius: 5,
              marginBottom: 20,
            }}
            onChangeText={(input) => {
              let changeList = selectList;
              changeList[key] = input;
              setSelectList(changeList);
            }}
            placeholder={"메뉴" + (key + 1) + "선택"}
          />
        );
      })}

      <TouchableOpacity
        style={{
          width: 110,
          backgroundColor: "blue",
          alignItems: "center",
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => {
          let newArray = [...selectList, ""];
          setSelectList(newArray);
          if (selectList[selectList.length - 1] === "") {
            Alert.alert(
              "메뉴를 입력하세요",
              "메뉴를 입력하고 입력을 추가하세요",
              [
                {
                  text: "네",
                  onPress: () => {
                    console.log("ok!!");
                  },
                },
              ]
            );
          } else {
            let newArray = [...selectList, ""];
            setSelectList(newArray);
          }
        }}
      >
        <Text style={{ color: "white", fontWeight: "900", fontSize: 20 }}>
          메뉴 추가
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuInputFunc;
