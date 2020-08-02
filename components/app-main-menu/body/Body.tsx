import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PlusWithoutElements from "./PlusWithoutElements";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList, MainBodyState } from "../../app-helpers/app-types";
import Database from "../../app-helpers/database-control";
import CategoryList from "./CategoryList";

export interface BodyProps {
  navigation: StackNavigationProp<StackParamList, "MainPage">;
}

class Body extends Component<BodyProps> {
  public state: MainBodyState = {};

  componentDidMount() {
    Database.selectCategories((rows) =>
      this.setState({
        rows: rows,
      })
    );
  }

  render() {
    var item_list;
    if (this.state.rows?.length && this.state.rows?.length > 0) {
      item_list = <CategoryList {...this.state.rows} />;
    }

    return (
      <View style={styles.container}>
        { item_list }
        <PlusWithoutElements {...this.props} />
      </View>
    );
  }
}

export default Body;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
