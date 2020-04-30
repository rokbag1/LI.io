import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PlusWithoutElements from "./PlusWithoutElements";

class Body extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PlusWithoutElements/>
      </View>
    );
  }
}

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
