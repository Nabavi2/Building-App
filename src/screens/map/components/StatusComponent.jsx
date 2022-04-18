import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, FlatList } from "react-native";
import { Box, Row, ScrollView, Text, View, Column } from "native-base";
import { Entypo, EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";
import RowIconAndTitleComponent from "./RowIconAndTitleComponent";
import PickerComponent from "./PickerComponent";
import CustomModal from "../../../components/CustomModal";
import FilterButton from "../../../components/FilterButton";
import MapSearchModalComponent from "./MapSearchModalComponent";
import CarMapComponent from "./CartMapComponent";

const size = Layout.window;

function StatusComponent({ type }) {
  const mapModalSearchData = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
  ];
  const initData = [
    {
      id: "1",
      title: "overview",
    },
    {
      id: "2",
      title: "status",
    },
    {
      id: "2",
      title: "statussdsd",
    },
  ];
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(initData);
  const [number, setNumber] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomModal
        onRequestClose={() => setVisible(false)}
        visible={visible}
        isMap={true}
        isStatus={true}
        // isBig={true}
      >
        <Column style={{ marginTop: 10 }}>
          <Box
            alignItems="center"
            _text={{ fontSize: 18, fontWeight: "bold", mb: 7 }}
          >
            Symptome Krone
          </Box>
          <FlatList
            data={mapModalSearchData}
            keyExtractor={(item, id) => id}
            renderItem={({ item }) => {
              return <CarMapComponent />;
            }}
          />
          <Row
            style={{
              justifyContent: "space-between",
              paddingRight: 13,
              paddingLeft: 20,
              marginBottom: 40,
            }}
          >
            <Pressable
              style={{
                backgroundColor: Colors.light.background,
                width: size.width * 0.2,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                _text={{
                  color: Colors.light.gray900,
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                Cancel
              </Box>
            </Pressable>

            <Pressable
              style={{
                backgroundColor: Colors.light.primary,
                width: size.width * 0.45,
                height: size.height * 0.06,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Box
                _text={{
                  fontSize: 17,
                  fontWeight: "bold",
                  color: Colors.light.white,
                }}
              >
                Select(2)
              </Box>
            </Pressable>
          </Row>
        </Column>
      </CustomModal>
      <RowIconAndTitleComponent
        title="Symptome Krone"
        onPress={() => setVisible(!visible)}
        marginTop={20}
      />
      <Row style={styles.row}>
        <Text style={{ color: Colors.light.gray500, fontWeight: "bold" }}>
          My checklist item
        </Text>
        <Entypo name="cross" size={24} color={Colors.light.gray500} />
      </Row>
      <Row style={styles.row}>
        <Text style={{ color: Colors.light.gray500, fontWeight: "bold" }}>
          My checklist item
        </Text>
        <Entypo name="cross" size={24} color={Colors.light.gray500} />
      </Row>
      <RowIconAndTitleComponent title="Symptome Krone" />
      <RowIconAndTitleComponent title="Symptome Krone" />
      <RowIconAndTitleComponent title="Symptome Krone" />
      <Text
        style={{
          color: Colors.light.primary,
          marginTop: 10,
          fontSize: 17,
          marginLeft: 10,
        }}
      >
        Bewertung
      </Text>
      <Text
        style={{ color: Colors.light.gray500, marginTop: 10, marginLeft: 10 }}
      >
        Vitalität
      </Text>
      <Box mb={100} mt={3} ml={2}>
        <PickerComponent width={size.width * 0.78} dataArray={data} />
      </Box>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    backgroundColor: Colors.light.white,
    marginBottom: 200,
    paddingBottom: 40,
    marginTop: 5,
  },
  row: {
    backgroundColor: Colors.light.gray200,
    height: 38,
    width: size.width * 0.87,
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: 27,
    marginRight: 10,
    alignItems: "center",
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 5,
    elevation: 0.5,
  },
});
export default StatusComponent;
