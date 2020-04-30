import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class PlusWithoutElements extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
});
