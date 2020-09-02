import { StackNavigationProp } from "@react-navigation/stack";
import { createContext } from "react";
import { RouteProp } from "@react-navigation/native";

export type StackParamList = {
  LoadingPage: undefined;
  MainPage: undefined;
  AddCategory: undefined;
};

export type MainPage = StackNavigationProp<StackParamList, "MainPage">;

export type LoadingPage = StackNavigationProp<StackParamList, "LoadingPage">;

export type AddCategory = StackNavigationProp<StackParamList, "AddCategory">;

type AddCategoryRouse = RouteProp<StackParamList, "AddCategory">;
type LoadingPageRoute = RouteProp<StackParamList, "LoadingPage">;
type MainPageRoute = RouteProp<StackParamList, "MainPage">;

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
}