import React from "react";

import Colors from "../../../constants/Colors";

function PickerComponent({ width, arrayData }) {
  return (
    <Picker
      style={[
        {
          width: 220,
          color: Colors.light.gray500,
          backgroundColor: Colors.light.gray200,
        },
        { width: width },
      ]}
      selectedValue={currentSeasone.name}
      onValueChange={(itemValue, itemIndex) =>
        setCurrentSeasone(selectSeasonPicker[itemIndex])
      }
      dropdownIconColor={Colors.light.gray200}
    >
      {seasons.map((seasonName) => (
        <Picker.Item label={seasonName} value={seasonName} />
      ))}
    </Picker>
  );
}

export default PickerComponent;
