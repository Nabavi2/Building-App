import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

const size = Layout.window;

function TabSection(props) {
  const [isSelected, setIsSelected] = useState(true);

  const TabItem = ({ title, onPress, isSelected }) => {
    return (
      <Pressable
        onPress={onPress}
        style={{
          ...styles.tabItem,
          backgroundColor: isSelected ? "#3a3e3d" : Colors.light.white,
        }}
      >
        <Text
          style={{
            ...styles.text,
            color: isSelected ? Colors.light.white : Colors.light.text,
          }}
        >
          {title}
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
    width: size.width * 0.92,
    height: size.height * 0.05,
    backgroundColor: Colors.light.white,
    borderRadius: (size.height * 0.05) / 6,
  },
  tabItem: {
    width: size.width * 0.42,
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