import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MainPageProp } from "../app-helpers/app-types";
import { StackActions, NavigationActions } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "./header/HeaderBar";
import Body from "./body/Body";

class MainMenu extends React.Component<MainPageProp> {
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar />
        <Body navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
  },
});

export default MainMenu;
