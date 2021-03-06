import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Header, Button } from "react-native-elements";
import Database from "../../app-helpers/database-control";
import { CategoryState, AddCategoryProp } from "../../app-helpers/app-types";
import * as FileSystem from "expo-file-system";
import IconDropdown from "./IconDropdown";

class AddCategory extends React.Component {
  public state: CategoryState = { category_id: "", category_name: "", category_img: "" };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Parent's device ID"
          label="Device ID"
          onChangeText={(idValue) => this.setState({ category_id: idValue })}
        />
        <Input
          placeholder="Name"
          label="Name"
          onChangeText={(nameValue) => this.setState({ category_name: nameValue })}
        />
        <IconDropdown
          setIconImg={(img: String) => this.setState({ category_img: img })}
        />
        <View style ={styles.button_container}>
        <Button
          title="Submit"
          raised={true}
          onPress={() =>
            Database.addToCategory(this.state, this.props as AddCategoryProp)
          }
        />
        </View>
      </View>
    );
  }
}

export default AddCategory;

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    alignItems: "center",
  },

  button_container: {
    width: 100,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
});
