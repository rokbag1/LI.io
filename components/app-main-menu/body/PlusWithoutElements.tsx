import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { BodyProps } from "./Body";

class PlusWithoutElements extends React.Component<BodyProps> {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          size={84}
          style={styles.plus}
          name="plus-square"
          onPress={() => this.props.navigation.navigate("AddCategory")}
        >
        </Icon>
      </View>
    );
  }
}

export default PlusWithoutElements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    zIndex: 1,
    color: "#10B896",
  },
});
