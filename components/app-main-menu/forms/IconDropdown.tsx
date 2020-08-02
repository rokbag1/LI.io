import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableHighlight } from "react-native-gesture-handler";

interface DemoOptionType {
  name: string;
  img: string;
}

const IMAGE_OPTIONS: Array<DemoOptionType> = [
  { name: "Lights for home", img: "home" },
  { name: "Lights for car", img: "car-side" },
  { name: "Lights for party", img: "glass-cheers" },
  { name: "Lights for bar", img: "beer" },
  { name: "Lights for any reason", img: "random" },
];

interface Props {
  setIconImg: (img: string) => void;
}

class IconDropdown extends React.Component<Props> {
  render() {
    return (
      <View>
        <ModalDropdown<DemoOptionType>
          style={styles.dropdown_button}
          textStyle={styles.dropdown_text}
          dropdownStyle={styles.dropdown_dropdown}
          options={IMAGE_OPTIONS}
          defaultValue="Select image"
          renderButtonText={(rowData) =>
            renderButtonText(
              (rowData as unknown) as DemoOptionType,
              this.props
            )
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

function renderButtonText(rowData: DemoOptionType, props: Props ) {
  const { name, img } = rowData;
  props.setIconImg( img );
  return `${name}`;
}

function renderSeparator(rowID: string) {
  let key = `spr_${rowID}`;

  return <View style={styles.dropdown_separator} key={key} />;
}

function renderRow(rowData: DemoOptionType, rowID: string, highlighted: any) {
  return (
    <TouchableHighlight underlayColor="cornflowerblue">
      <View style={styles.dropdown_row}>
        <Icon style={styles.dropdown_image} size={32} name={rowData.img}></Icon>
        <View style={styles.text_container}>
          <Text style={styles.text}> {`${rowData.name}`} </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default IconDropdown;

const styles = StyleSheet.create({
  dropdown_button: {
    width: 320,
    borderWidth: 0,
    borderRadius: 3,
    backgroundColor: "cornflowerblue",
  },
  dropdown_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 18,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
  dropdown_dropdown: {
    marginTop: -20,
    width: 320,
    height: 120,
    borderColor: "#525252",
    borderWidth: 2,
    borderRadius: 3,
  },
  dropdown_row: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 40,
    display: "flex",
    alignItems: "center",
  },
  dropdown_image: {
    width: 60,
    display: "flex",
    alignSelf: "center",
    textAlign: "center",
    color: "#525252",
  },
  dropdown_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: "navy",
    textAlignVertical: "center",
  },
  dropdown_separator: {
    height: 1,
    backgroundColor: "#525252",
  },

  text_container: {
    height: 40,
    borderLeftColor: "#C0C0C0",
    borderLeftWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
  },

  text: {
    width: 200,
    marginLeft: 10,
  },
});
