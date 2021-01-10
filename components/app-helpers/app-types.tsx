import { StackNavigationProp } from "@react-navigation/stack";
import { createContext } from "react";
import { RouteProp } from "@react-navigation/native";
import { BodyProps } from "../app-main-menu/body/Body";

export type StackParamList = {
  LoadingPage: undefined;
  MainPage: undefined;
  AddCategory: undefined;
  ModifyCategory: undefined;
};

export type MainPage = StackNavigationProp<StackParamList, "MainPage">;
export type LoadingPage = StackNavigationProp<StackParamList, "LoadingPage">;
export type AddCategory = StackNavigationProp<StackParamList, "AddCategory">;
export type ModifyCategory = StackNavigationProp<StackParamList, "ModifyCategory">;

type AddCategoryRouse = RouteProp<StackParamList, "AddCategory">;
type ModifyCategoryRoute = RouteProp<StackParamList, "ModifyCategory">;
type LoadingPageRoute = RouteProp<StackParamList, "LoadingPage">;
type MainPageRoute = RouteProp<StackParamList, "MainPage">;

export type ModifyCategoryProp = {
  navigation: ModifyCategory;
  route: ModifyCategoryRoute;
};

export type MainPageProp = {
  navigation: MainPage;
  route: MainPageRoute;
};

export type LoadingPageProp = {
  navigation: LoadingPage;
  route: LoadingPageRoute;
};

export type AddCategoryProp = {
  navigation: AddCategory;
  route: AddCategoryRouse;
};

export interface CategoryState {
  id: number;
  category_id: string;
  category_name?: string;
  category_img?: string;
  category_checked?: boolean;
}

export interface MainBodyState {
  id?: string;
  data?: string;
  rows?: Rows;
}

export interface Rows {
  _array: Array<CategoryState>;
  length: number;
  navigation: StackNavigationProp<StackParamList, "MainPage">
}