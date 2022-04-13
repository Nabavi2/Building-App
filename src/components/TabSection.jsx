import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const size = Layout.window;

function TabSection(props) {
  const [isSelected, setIsSelected] = useState(true);
  const TabItem = (props) => {
    return (
      <Pressable
        onPress={props.onPress}
        style={{
          ...styles.tabItem,
          backgroundColor: props.isSelected ? "#3a3e3d" : Colors.light.white,
        }}
      >
        <Text
          style={{
            ...styles.text,
            color: props.isSelected ? Colors.light.white : Colors.light.text,
          }}
        >
          {props.title}
        </Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.tabSection}>
      <TabItem
        title="Buildings"
        isSelected={isSelected}
        onPress={() => setIsSelected(true)}
      />
      <TabItem
        title="Apartments"
        isSelected={!isSelected}
        onPress={() => setIsSelected(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: size.width * 0.8,
    height: size.height * 0.05,
    backgroundColor: Colors.light.white,
    borderRadius: (size.height * 0.05) / 6,
  },
  tabItem: {
    width: size.width * 0.36,
    height: size.height * 0.037,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: (size.height * 0.037) / 6,
  },
  text: {
    fontSize: 14,
  },
});
export default TabSection;
