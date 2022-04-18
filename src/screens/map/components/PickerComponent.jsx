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
<<<<<<< HEAD
=======
          borderRadius: 28,
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
          color: Colors.light.gray500,
          backgroundColor: Colors.light.background,
          height: 20,
          marginLeft: 10,
<<<<<<< HEAD
          borderTopRightRadius: 13,
          borderBottomLeftRadius: 20,
          elevation: 0.5,
=======
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
        },
        { width: width },
      ]}
      selectedValue={selectedItem}
      onValueChange={(value) => setSelectedItem(value)}
      dropdownIconColor={Colors.light.gray500}
<<<<<<< HEAD
      mode="dropdown"
=======
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
    >
      {data.map((item) => (
        <Picker.Item label={item.title} value={item.title} />
      ))}
    </Picker>
  );
}

export default PickerComponent;
