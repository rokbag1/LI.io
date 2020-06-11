import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';


export type StackParamList = {
    LoadingPage: undefined;
    MainPage: undefined;
    AddCategory: undefined;

  };

export type MainPage = StackNavigationProp<
  StackParamList,
  'MainPage'
>;

export type LoadingPage = StackNavigationProp<
  StackParamList,
  'LoadingPage'
>;

export type AddCategory = StackNavigationProp<
  StackParamList,
  'AddCategory'
>;

type AddCategoryRouse = RouteProp<StackParamList, 'AddCategory'>;
type LoadingPageRoute = RouteProp<StackParamList, 'LoadingPage'>;
type MainPageRoute = RouteProp<StackParamList, 'MainPage'>;


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


