import { Column, Image } from "native-base";
import React from "react";

function CustomFilterIcon(props) {
  return (
    <Column>
      <Image
        source={require("../../assets/path7.png")}
        w={5}
        h={5}
        resizeMode="contain"
      />
      <Image
        mt={-2}
        source={require("../../assets/path8.png")}
        w={5}
        h={5}
        resizeMode="contain"
      />
    </Column>
  );
}

export default CustomFilterIcon;
