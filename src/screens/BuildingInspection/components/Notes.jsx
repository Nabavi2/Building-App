import { Box, Column, Divider, Row, Text, TextArea } from "native-base";
import React, { useState } from "react";
import CustomButton from "../../../components/CustomButton";
import Colors from "../../../constants/Colors";

function Notes(props) {
  const [editable, setEditable] = useState(false);
  return (
    <Box>
      <Text color={Colors.light.primary} fontWeight="bold" fontSize={18}>
        NOTES
      </Text>
      <Column>
        <Text fontSize={16} color={Colors.light.text}>
          Baugruppe name goes here
        </Text>
        <Row justifyContent={"space-between"}>
          <Text fontSize={14} color={Colors.light.subText} w="55%">
            Am Schawrzenberg 19, 21, 23
          </Text>
          <Text fontSize={14} color={Colors.light.subText} mr={"2.5%"}>
            VE. 001-100
          </Text>
        </Row>
      </Column>
      <Divider mt={5} mb={8} />
      <TextArea
        maxH={205}
        editable={editable}
        fontSize={14}
        color={editable ? "white" : Colors.light.subText}
        bgColor={editable ? Colors.light.gray800 : "transparent"}
        mb="10"
        borderRadius={"sm"}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. {"\n\n"}At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet.
      </TextArea>
      <Row mt={"6"} justifyContent={editable ? "space-between" : "flex-end"}>
        {editable && (
          <Text
            ml={"5%"}
            fontSize={14}
            fontWeight="bold"
            color={Colors.light.text}
          >
            CANCEL
          </Text>
        )}
        <CustomButton
          title={editable ? "SAVE" : "EDIT"}
          onPress={() => setEditable(!editable)}
        />
      </Row>
    </Box>
  );
}

export default Notes;
