import React, {Component} from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from "./components/AppNavigator";
import {createAppContainer} from "react-navigation";
import firebase from "react-native-firebase";
import HakuModalExample from "./components/HakuModalExample";
// import Header2 from "./components/Header/Header2";
// import {SearchBar} from "react-native-elements";
// import MySearchBar from "./components/MySearchBar";


const AppContainer = createAppContainer(AppNavigator);

class App extends Component {




  render() {
    return (
      <AppNavigator/>
    );
  };
};



export default App;
