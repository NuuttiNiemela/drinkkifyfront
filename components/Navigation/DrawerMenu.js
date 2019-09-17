import React, {Component} from 'react';
import {Platform, Dimensions} from 'react-native';
import {Button, Icon} from "react-native-elements";
import {createDrawerNavigator, createAppContainer} from "react-navigation";
import AddIngredient from "../Cabinet/AddIngredient";
import Cabinet from "../Cabinet/Cabinet";
import Drinkkify from "../Cabinet/Drinkkify";
import MenuButton from "./MenuButton";

const WIDTH = Dimensions.get('window').width;

const DrawerMenu = createDrawerNavigator({
        Cabinet: Cabinet,
        'Add Ingredient': AddIngredient,
        Drinkkify: Drinkkify,

},
    {
        drawerWidth: WIDTH*0.83,
        drawerPosition: "right",

    })


export default createAppContainer(DrawerMenu);
