import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ListItem, CheckBox } from "react-native-elements";
import { Rows } from "../../app-helpers/app-types";
import Database from "../../app-helpers/database-control";

interface CheckSate {
  index: string;
  isChecked: boolean;
}

interface State {
  checkboxes: Array<CheckSate>;
}

class CategoryList extends React.Component<Rows, State> {
  constructor(props: Rows) {
    super(props);
    this.state = {
      checkboxes: this.props._array.map((item) => {
        return {
          index: item.category_id,
          isChecked: item.category_checked ?? false,
        };
      }),
    };
  }

  // public state: CheckSate = { index: 0, isChecked: false };

  render() {
    return (
      <View style={styles.container}>
        {this.props._array.map((category_data, i) => (
          <ListItem
            key={i}
            leftAvatar={
              <Icon
                style={styles.dropdown_image}
                size={22}
                name={
                  category_data.category_img != null
                    ? category_data.category_img
                    : ("question-circle" as any)
                }
              ></Icon>
            }
            rightElement={
              <CheckBox
                center
                title="Click Here"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={this.state.checkboxes[i].isChecked ?? false}
                onPress={() => {
                  const newArray = this.state.checkboxes;
                  newArray[i].isChecked = !newArray[i].isChecked;

                  this.setState({
                    checkboxes: newArray,
                  });
                }}
                // onPress={Database.changeCheckValue( this.state )}
              />
            }
            title={
              category_data.category_name != null
                ? category_data.category_name
                : ("" as any)
            }
            titleStyle={{ fontSize: 14 }}
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
    padding: 20,
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
