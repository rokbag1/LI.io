import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableHighlight } from "react-native-gesture-handler";

import { plusIconStyles } from "../body/PlusWithoutElements";

interface DemoOptionType {
  name: string;
  age: number;
}
const DEMO_OPTIONS_2: Array<DemoOptionType> = [
  { name: "Rex", age: 30 },
  { name: "Mary", age: 25 },
  { name: "John", age: 41 },
  { name: "Jim", age: 22 },
  { name: "Susan", age: 52 },
  { name: "Brent", age: 33 },
  { name: "Alex", age: 16 },
  { name: "Ian", age: 20 },
  { name: "Phil", age: 24 },
];

class IconDropdown extends React.Component {
  render() {
    return (
      <View>
        <ModalDropdown<DemoOptionType>
          style={styles.dropdown_2}
          textStyle={styles.dropdown_2_text}
          dropdownStyle={styles.dropdown_2_dropdown}
          options={DEMO_OPTIONS_2}
          renderButtonText={(rowData) =>
            renderButtonText((rowData as unknown) as DemoOptionType)
          }
          renderRow={(option, rowId, isHighlighted) =>
            renderRow(option, rowId, isHighlighted)
          }
          renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
            renderSeparator(rowID)
          }
        />
      </View>
    );
  }
}

function renderButtonText(rowData: DemoOptionType) {
  const { name, age } = rowData;
  return `${name} - ${age}`;
}

function renderSeparator(rowID: string) {
  let key = `spr_${rowID}`;

  return <View style={styles.dropdown_2_separator} key={key} />;
}

function renderRow(rowData: DemoOptionType, rowID: string, highlighted: any) {
  return (
    <TouchableHighlight underlayColor="cornflowerblue">
      <View>
        <Icon size={16} style={plusIconStyles.plus} name="plus-square"></Icon>
        <Text> {`${rowData.name} (${rowData.age})`} </Text>
      </View>
    </TouchableHighlight>
  );
}

export default IconDropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    height: 500,
    paddingVertical: 100,
    paddingLeft: 20,
  },
  textButton: {
    color: "deepskyblue",
    borderColor: "deepskyblue",
    margin: 2,
  },

  dropdown_1: {
    flex: 1,
    top: 32,
    left: 8,
  },
  dropdown_2: {
    alignSelf: "flex-end",
    width: 150,
    marginTop: 32,
    right: 8,
    borderWidth: 0,
    borderRadius: 3,
    backgroundColor: "cornflowerblue",
  },
  dropdown_2_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 18,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
  dropdown_2_dropdown: {
    width: 150,
    height: 300,
    borderColor: "cornflowerblue",
    borderWidth: 2,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  dropdown_2_image: {
    marginLeft: 4,
    width: 30,
    height: 30,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: "navy",
    textAlignVertical: "center",
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: "cornflowerblue",
  },
  dropdown_3: {
    width: 150,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_3_dropdownTextStyle: {
    backgroundColor: "#000",
    color: "#fff",
  },
  dropdown_3_dropdownTextHighlightStyle: {
    backgroundColor: "#fff",
    color: "#000",
  },
  dropdown_4: {
    margin: 8,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_4_dropdown: {
    width: 100,
  },
  dropdown_5: {
    margin: 8,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_6: {
    flex: 1,
    left: 8,
  },
  dropdown_6_image: {
    width: 40,
    height: 40,
  },
});
