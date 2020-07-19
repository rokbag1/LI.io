import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Header, Button } from "react-native-elements";
import Database from "../../app-helpers/database-control";
import { State, AddCategoryProp } from "../../app-helpers/app-types";
import ModalDropdown from "react-native-modal-dropdown";
import * as FileSystem from "expo-file-system";
import IconDropdown from "./IconDropdown";

class AddCategory extends React.Component {
  public state: State = { id: "", name: "" };
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Parent's device ID"
          label="Device ID"
          onChangeText={(idValue) => this.setState({ id: idValue })}
        />
        <Input
          placeholder="Name"
          label="Name"
          onChangeText={(nameValue) => this.setState({ name: nameValue })}
        />
        <IconDropdown/>
        <Button
          title="Submit"
          raised={true}
          onPress={() =>
            Database.addToCategory(this.state, this.props as AddCategoryProp)
          }
        />
      </View>
    );
  }
}

export default AddCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
