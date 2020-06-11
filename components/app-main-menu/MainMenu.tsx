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
      <LinearGradient
        colors={[
          "rgba(25,1,83,1) 0%",
          "rgba(95,51,113,1) 32.21%",
          "rgba(159,21,226,1) 49.78%",
          "rgba(108,53,142,1) 69.46%",
          "rgba(25,1,83,1) 100%",
        ]}
        style={{
          flex: 1,
          alignSelf: "stretch",
        }}
      >
        <HeaderBar />
        <Body navigation={this.props.navigation} />
      </LinearGradient>
    );
  }
}

export default MainMenu;
