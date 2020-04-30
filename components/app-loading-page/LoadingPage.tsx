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
        <View style={styles.container}>
          <Circle />
          <Button
            title="Press me"
            onPress={() => this.props.navigation.navigate("MainPage")}
          />
        </View>
      </LinearGradient>
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
