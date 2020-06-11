import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PlusWithoutElements from "./PlusWithoutElements";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../app-helpers/app-types";

export interface BodyProps {
  navigation : StackNavigationProp<StackParamList, "MainPage">
}

class Body extends Component<BodyProps>  {
  render() {
    return (
      <View style={styles.container}>
        <PlusWithoutElements {...this.props}/>
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
