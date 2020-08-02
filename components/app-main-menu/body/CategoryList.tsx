import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ListItem } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Rows } from "../../app-helpers/app-types";

class CategoryList extends React.Component<Rows> {
  render() {
    
    return (
      <View style={styles.container}>
        {this.props._array.map((category_data, i) => (
          <ListItem
            key={i}
            leftAvatar={
              <Icon
                style={styles.dropdown_image}
                size={32}
                name={category_data.category_img != null ? category_data.category_img : 'question-circle' as any }
              ></Icon>
            }
            title={category_data.category_name != null ? category_data.category_name : '' as any }
            containerStyle={{ backgroundColor: "white" }}
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
  dropdown_image: {
    width: 60,
    display: "flex",
    alignSelf: "center",
    textAlign: "center",
    color: "#525252",
  },
});
