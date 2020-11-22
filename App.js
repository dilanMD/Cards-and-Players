import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from "react-redux";

import Authentication from "./src/helpers/navigations/stack-navigation/Authentication";
import HomeNavigation from "./src/helpers/navigations/bottom-navigation/HomeNavigation";

const App = () => {
  const auth = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      {auth.isLoggedIn ? <HomeNavigation /> : <Authentication />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
