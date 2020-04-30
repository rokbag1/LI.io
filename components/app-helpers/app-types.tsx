import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';


export type StackParamList = {
    LoadingPage: undefined;
    MainPage: undefined;
  };
  

export type MainPage = StackNavigationProp<
  StackParamList,
  'MainPage'
>;

export type LoadingPage = StackNavigationProp<
  StackParamList,
  'LoadingPage'
>;

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


