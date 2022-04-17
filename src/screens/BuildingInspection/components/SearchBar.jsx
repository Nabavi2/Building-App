import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { Column, FlatList, Pressable, Row, Text, ZStack } from "native-base";
import React from "react";
import { StyleSheet, TextInput } from "react-native";
import Colors from "../../../constants/Colors";

function SearchBar({ onPressOut }) {
  const arrayData = [
    {
      title: "Lorem ipsume dolor sit amet",
      des: "Bauart goes here",
      grade: "A",
      value: 100,
      hasImage: true,
    },
    {
      title: "Salvador de amot ichi ikaino",
      des: "The text goes here",
      grade: "A",
      value: 100,
      hasImage: true,
    },
    {
      title: "Lorem ipsume dolor sit amet",
      des: "Bauart goes here",
      grade: "A",
      value: 100,
      hasImage: true,
    },
    {
      title: "Salvador de amot ichi ikaino",
      des: "The text goes here",
      grade: "B",
      value: 70,
      hasImage: false,
    },
    {
      title: "Lorem ipsume dolor sit amet",
      des: "Bauart goes here",
      grade: "C",
      value: 90,
      hasImage: true,
    },
    {
      title: "Salvador de amot ichi ikaino",
      des: "The text goes here",
      hasImage: false,
    },
    {
      title: "Lorem ipsume dolor sit amet",
      des: "Bauart goes here",
      hasImage: true,
    },
    {
      title: "Salvador de amot ichi ikaino",
      des: "The text goes here",
      grade: "A",
      value: 100,
      hasImage: true,
    },
    {
      title: "Lorem ipsume dolor sit amet",
      des: "Bauart goes here",
      grade: "A",
      value: 100,
      hasImage: true,
    },
    {
      title: "Salvador de amot ichi ikaino",
      des: "The text goes here",
      grade: "A",
      value: 100,
      hasImage: true,
    },
  ];
  return (
    <ZStack w={"100%"} h={"100%"} alignItems={"center"}>
      <Pressable
        opacity={0.5}
        w={"100%"}
        h={"100%"}
        bg="black"
        onPress={onPressOut}
      />
      <Column alignItems={"center"} w={"100%"} h="100%">
        <Row style={styles.inputView}>
          <EvilIcons
            name="search"
            size={30}
            color={Colors.light.gray500}
            style={styles.searchIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor={Colors.light.gray500}
            keyboardType="default"
          />
        </Row>
        <FlatList
          mt={5}
          bg={"white"}
          w={"93%"}
          h={"50%"}
          flexGrow={0}
          borderRadius="xl"
          data={arrayData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(it, ind) => ind}
          renderItem={({ item, index }) => (
            <Row
              my={5}
              px={3}
              justifyContent={!item.hasImage ? "space-between" : "flex-start"}
            >
              <Text fontSize={14} color={Colors.light.subText}>
                {index + 1}. {item.title}
              </Text>
              {!item.hasImage && (
                <Ionicons
                  name="eye-off"
                  size={24}
                  color={Colors.light.bageBg}
                />
              )}
            </Row>
          )}
        />
      </Column>
    </ZStack>
  );
}

const styles = StyleSheet.create({
  inputView: {
    width: "93%",
    height: "6%",
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    width: "85%",
    marginLeft: 10,
    backgroundColor: Colors.light.white,
    height: "90%",
    color: Colors.light.text,
  },
  searchIcon: {
    marginLeft: 10,
  },
});

export default SearchBar;
