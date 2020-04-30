import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Circle extends Component {
  render() {
    return (
      <View style={styles.circle}>
        <View style={styles.smaller_circle}>
          <Text style={styles.text}>LI.io</Text>
          <Text style={styles.smaller_text}>LI.io</Text>
        </View>
      </View>
    );
  }
}

export default Circle;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Lovelo",
    textAlign: "center",
    fontSize: 60,
    color: "#10B896",
  },

  smaller_text: {
    position: "absolute",
    opacity: 1,
    top: 54.5,
    left: 24,
    fontFamily: "Lovelo",
    textAlign: "center",
    fontSize: 60,
    color: "#09E2B6",
  },

  smaller_circle: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    top: 1,
    width: 191,
    height: 191,
    borderRadius: 191 / 2,
    borderWidth: 3,
    borderColor: "#10B896",
  },
  circle: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    top: 40,
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    borderWidth: 3,
    borderColor: "#10B896",
  },
});
