import React, { Component, Props } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Circle from "./Circle";
import { LinearGradient } from "expo-linear-gradient";
import { LoadingPageProp, StackParamList } from "../app-helpers/app-types";
import { StackActions, NavigationActions } from "react-navigation";

function changePageAfterDelay(LoadingPageProp: LoadingPageProp) {
  setTimeout(function () {
    LoadingPageProp.navigation.navigate("MainPage");
  }, 2000);
}

class LoadingPage extends React.Component<LoadingPageProp> {
  render() {
    changePageAfterDelay(this.props);
    return (

        <View style={styles.container}>
          <Circle />
          <Button
            title="Press me"
            onPress={() => this.props.navigation.navigate("MainPage")}
          />
        </View>
    );
  }
}

export default LoadingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
