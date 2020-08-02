import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { BodyProps } from "./Body";

class PlusWithoutElements extends React.Component<BodyProps> {
  render() {
    return (
      <View style={plusIconStyles.container}>
        <Icon
          size={84}
          style={plusIconStyles.plus}
          name="plus-square"
          onPress={() => this.props.navigation.navigate("AddCategory")}
        >
        </Icon>
      </View>
    );
  }
}

export default PlusWithoutElements;

export const plusIconStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-end',
    marginBottom: 10
  },
  plus: {
    zIndex: 1,
    color: "#10B896",
  },
});
