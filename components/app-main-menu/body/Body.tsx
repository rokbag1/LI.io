import React, { Component, Fragment } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PlusWithoutElements from "./PlusWithoutElements";
import { NavigationEvents } from "react-navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  StackParamList,
  MainBodyState,
  Rows,
} from "../../app-helpers/app-types";
import Database from "../../app-helpers/database-control";
import CategoryList from "./CategoryList";

export interface BodyProps {
  navigation: StackNavigationProp<StackParamList, "MainPage">;
}

function printItemList(state: MainBodyState, navigation: StackNavigationProp<StackParamList, "MainPage"> ) {
  var item_list;
  if (state.rows?.length && state.rows?.length > 0) {
    item_list = <CategoryList {...state.rows} navigation={navigation} />;
  }

  return item_list;
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

  // fetchData(): void {
  //   Database.selectCategories((rows) =>
  //     this.setState({
  //       rows: rows,
  //     })
  //   );
  // }

  render() {
    var item_list = printItemList(this.state, this.props.navigation);

    return (
      <View style={styles.container}>
        {item_list}
        <PlusWithoutElements {...this.props} />
      </View>
    );
  }
}

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
