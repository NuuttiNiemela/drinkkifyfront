import React, {Component} from 'react';
import {Platform, Dimensions, View, Button} from 'react-native';
import {createAppContainer} from "react-navigation";
import { createDrawerNavigator, DrawerNavigatorItems } from "react-navigation-drawer";
import AddIngredient from "../cabinet/AddIngredient";
import Cabinet from "../cabinet/Cabinet";
import Drinkkify from "../cabinet/Drinkkify";
import AddDrink3 from "../cabinet/AddDrink3";
import Settings from "../authentication/settings/Settings";
import firebase from "react-native-firebase";

const WIDTH = Dimensions.get('window').width;


const DrawerMenu = createDrawerNavigator({
        Cabinet: Cabinet,
        'Add Ingredient': AddIngredient,
        'Add Drink': AddDrink3,
        Drinkkify: Drinkkify,
        Settings: Settings,
    },
    {
        contentComponent: (props) => (
            <View>
                <DrawerNavigatorItems {...props} />
                <Button
                    title="Logout"
                    onPress={async () => {
                        await firebase.auth().signOut()
                            .then(r => console.log(r))
                    }}
                />
            </View>
        ),
        drawerWidth: WIDTH*0.6,
        drawerPosition: "right",

    })


export default createAppContainer(DrawerMenu);
