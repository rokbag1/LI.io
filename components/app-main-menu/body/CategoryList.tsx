import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Rows } from "../../app-helpers/database-control";
import { ListItem } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";



class CategoryList extends React.Component<Rows> {
  render() {
    return (
      <View style={styles.container}>
        {this.props._array.map((category_data, i) => (
          <ListItem
            key={i}
            title={category_data.category_name}
            subtitle={category_data.category_name}
            containerStyle={{backgroundColor: '#3D6DCC'}}
            bottomDivider
          />
        ))}
      </View>
    );
  }
}

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
  },
  list_item: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
  },
});
