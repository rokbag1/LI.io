import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { MainPageProp } from "../../app-helpers/app-types";
import { StackActions, NavigationActions } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { BodyProps } from "./Body";

class PlusWithoutElements extends React.Component<BodyProps> {
  render() {
    return (
      <View style={styles.container}>
        <Icon.Button
          name="overloaded-cristals"
          onPress={() => this.props.navigation.navigate("AddCategory")}
        >
          <FontAwesomeIcon style={styles.plus} size={84} icon={faPlusSquare} />
        </Icon.Button>
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
