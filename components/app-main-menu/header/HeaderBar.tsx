import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";

class HeaderBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}> LI.io </Text>
      </View>
    );
  }
}

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    borderBottomColor: '#10B896',
    borderBottomWidth: 2,
    height: 65,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#10B896",
    fontFamily: "Lovelo",
    fontSize: 50
  }
});
