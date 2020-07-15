import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoadingPage from "./components/app-loading-page/LoadingPage";
import MainPage from "./components/app-main-menu/MainMenu";
import { AppLoading, SQLite } from "expo";
import { useFonts } from "@use-expo/font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StackParamList } from "./components/app-helpers/app-types"
import AddCategory from "./components/app-main-menu/forms/AddCategory";

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  let [fontsLoaded] = useFonts({
    Lovelo: require("./assets/fonts/Lovelo-LineLight.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="LoadingPage" component={LoadingPage} options={{headerShown:false,}} />
            <Stack.Screen name="MainPage" component={MainPage}  options={{headerShown:false,}} />
            <Stack.Screen name="AddCategory" component={AddCategory}  options={{headerShown:true,}} />
          </Stack.Navigator>
        </NavigationContainer>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    backgroundColor: "transparent",
  },
});
