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

const MenuSelect = ({ selectList }) => {
  const [isSelect, setIsSelect] = useState(false);
  const [selectChoice, setSelectChoice] = useState("");

  return (
    <View
      style={{
        alignItems: "center",
        paddingTop: 70,
      }}
    >
      <Text style={{ fontSize: 30 }}>
        {isSelect ? "선택완료" : "메뉴를 골라 보아요"}
      </Text>

      {isSelect ? (
        <>
          <Text style={{ fontSize: 50 }}>{selectChoice}</Text>

          <Text>다시 선택 하시겠읍니까?</Text>
        </>
      ) : (
        <></>
      )}
      <View>
        <Button
          title={"메뉴 선택"}
          onPress={() => {
            if (selectList[selectList.length - 1] === "") {
              Alert.alert(
                "메뉴를 입력하세요",
                "메뉴를 입력하고 입력을 추가하세요",
                [
                  {
                    text: "네",
                    onPress: () => {
                      console.log("OK!!");
                    },
                  },
                ]
              );
            } else {
              setIsSelect(true);
              setSelectChoice(
                selectList[Math.floor(Math.random() * selectList.length)]
              );
            }
          }}
        />
      </View>
    </View>
  );
};

export default MenuSelect;
