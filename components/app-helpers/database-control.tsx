import React, { Component } from "react";
import * as SQLite from "expo-sqlite";
import { State, MainBodyState } from "./app-types";
import { StackActions, NavigationActions } from "react-navigation";
import { AddCategoryProp } from "./app-types";
import Body from "../app-main-menu/body/Body";

let db = SQLite.openDatabase("lio_database.db");
class Database {
  public static addToCategory(state: State, props: AddCategoryProp): void {
    // Testing case
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "DROP TABLE IF exists lio_category",
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
        "CREATE TABLE IF NOT EXISTS lio_category(category_id INTEGER PRIMARY KEY AUTOINCREMENT, category_name VARCHAR(255), device_id VARCHAR(255))",
        [],
        (tx, results) => {
          console.log(results);
        },
        (error) => {
          console.log("Create", error);

          return false;
        }
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO lio_category (category_name, device_id) VALUES (?,?)",
        [state.name, state.id],
        (tx, results) => {
          console.log(results);
        },
        (error) => {
          console.log("Insert", error);

          return false;
        }
      );
    });

    props.navigation.navigate("MainPage");
  }

  public static selectCategories(setState: (rows: Rows) => void): void {
    db.transaction((tx) => {
      tx.executeSql("SELECT * from lio_category", [], (_, { rows }) => {
        const result = (rows as unknown) as Rows;

        setState(result);
      });
    });
  }
}

interface resultItem {
  category_id: number;
  category_name: string;
  device_id: string;
}

export interface Rows {
  _array: Array<resultItem>;
  length: number;
}

export default Database;
