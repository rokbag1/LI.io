import React, { Component } from "react";
import * as SQLite from "expo-sqlite";
import { CategoryState, MainBodyState, Rows } from "./app-types";
import { StackActions, NavigationActions } from "react-navigation";
import { AddCategoryProp } from "./app-types";
import Body from "../app-main-menu/body/Body";

let db = SQLite.openDatabase("lio_database.db");
class Database {
  public static addToCategory(state: CategoryState, props: AddCategoryProp): void {

    // Testing case
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "DROP TABLE lio_category",
    //     [],
    //     (tx, results) => {
    //       console.log("Drop", results);
    //     },
    //     (error) => {
    //       console.log("Drop", error);

    //       return false;
    //     }
    //   );
    // });

    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS lio_category(id INTEGER PRIMARY KEY AUTOINCREMENT, category_id VARCHAR(255), category_name VARCHAR(255), category_img VARCHAR(255), category_checked BOOLEAN )",
        [],
        (tx, results) => {
          // console.log(results);
        },
        (error) => {
          // console.log("Create", error);

          return false;
        }
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO lio_category ( category_id, category_name, category_img, category_checked ) VALUES (?,?,?,?)",
        [state.category_id, state.category_name, state.category_img, false],
        (tx, results) => {
          props.navigation.navigate("MainPage");
        },
        (error) => {
          console.log("Insert", error);

          return false;
        }
      );
    });
  }

  public static selectCategories(setState: (rows: Rows) => void): void {
    db.transaction((tx) => {
      tx.executeSql("SELECT * from lio_category", [], (_, { rows }) => {
        const result = (rows as unknown) as Rows;
        setState(result);
      });
    });
  }

  public static changeCheckValue(catCheckbox: any): void {
    console.log( "Update from lio_category SET category_checked = " + catCheckbox.isChecked + " Where id= " + catCheckbox.index + "");
    db.transaction((tx) => {
      tx.executeSql("UPDATE lio_category set category_checked=? where id=?", [catCheckbox.isChecked, catCheckbox.index], (_, { rows }) => {
      }
      );
    });
  }
}
export default Database;
