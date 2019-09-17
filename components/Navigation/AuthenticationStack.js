import {createStackNavigator, createAppContainer} from "react-navigation";
import DrawerJee from "./DrawerMenu";
import AddIngredient from "../Cabinet/AddIngredient";
import Login from "../authentication/Login";
import Loading from "../authentication/Loading";
import SignUp from "../authentication/SignUp";
import Drinkkify from "../Cabinet/Drinkkify";
import {Image} from "react-native-elements";
import MenuButton from "./MenuButton";
import React from "react";
import LoadingSwitch from "../authentication/LoadingSwitch";
import CabinetStack from "./CabinetStack";

const AuthenticationStack = createStackNavigator({
        Loadings: LoadingSwitch,
        Login: Login,
        SignUp: SignUp,
    },
    {
        initialRouteName: 'Loadings',
        defaultNavigationOptions: ({
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: '#696D3F',
            title: '',
            headerBackground:

                <Image
                    source={require('../Drinkkify.png')}
                    style={{width:'50%', height:46, marginTop:'2%', marginLeft: '2%',}}
                />,
            headerLeft: null,


        })

    });

export default createAppContainer(AuthenticationStack)