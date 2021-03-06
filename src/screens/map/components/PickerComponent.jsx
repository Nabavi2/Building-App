import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

import Colors from "../../../constants/Colors";

function PickerComponent({ width, dataArray }) {
  const data = dataArray;

  const [selectedItem, setSelectedItem] = useState(data[0]);

  return (
    <Picker
      style={[
        {
          borderRadius: 28,
          color: Colors.light.gray500,
          backgroundColor: Colors.light.background,
          height: 20,
          marginLeft: 10,
        },
        { width: width },
      ]}
      selectedValue={selectedItem}
      onValueChange={(value) => setSelectedItem(value)}
      dropdownIconColor={Colors.light.gray500}
      mode="dropdown"
    >
      {data.map((item) => (
        <Picker.Item label={item.title} value={item.title} />
      ))}
    </Picker>
  );
}

export default PickerComponent;
