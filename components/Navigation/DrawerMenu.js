import React, {Component} from 'react';
import {Platform, Dimensions, View, Button} from 'react-native';
import {createDrawerNavigator, createAppContainer, DrawerItems} from "react-navigation";
import AddIngredient from "../Cabinet/AddIngredient";
import Cabinet from "../Cabinet/Cabinet";
import Drinkkify from "../Cabinet/Drinkkify";
import AddDrink3 from "../Cabinet/AddDrink3";
import Settings from "../authentication/Settings";
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
                <DrawerItems {...props} />
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
