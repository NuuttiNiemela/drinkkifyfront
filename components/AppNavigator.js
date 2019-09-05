import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    // NavigationScreenComponent as navigationOptions
} from 'react-navigation';
import Main from "./Main";
import Cabinet from "./Cabinet";
import Login from "./authentication/Login";
import SearchRecipe from "./SearchRecipe";
import AddIngredient from "./AddIngredient";
import React from "react";
import {StyleSheet} from 'react-native';
import Loading from "./authentication/Loading";
import SignUp from "./authentication/SignUp";
<<<<<<< HEAD
<<<<<<< HEAD
import AddIngredient from "./AddIngredient";
=======
import {Image} from "react-native-elements";
>>>>>>> master
=======
import Icon from 'react-native-vector-icons/FontAwesome5';
import Drinkkify from "./Drinkkify";

>>>>>>> master



const AppNavigator = createStackNavigator({
    Main: Main,
    Search: SearchRecipe,
    // Aine: AddIngredient,

},
    {
        initialRouteName: "Main",
        // initialRouteName: "Aine",
        defaultNavigationOptions: {
            title: 'Drinkkify',
            // headerBackground:
                //
                // <Image
                //     source={require('./Drinkify5.png')}
                //     style={{width:'100%', height:150}}
                // />
        }
});

const CabinetNavigator = createStackNavigator({
    Cabinet: Cabinet,
    Search: AddIngredient,
        Login: Login,
    Loading: Loading,
    SignUp: SignUp,
    Drinkkify: Drinkkify,
},
    {
        initialRouteName: "Loading",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#F8EFE4',
            },
            headerTintColor: '#E6C2BF',
            title: 'Bar cabinet',
        },
    });

AppNavigator.navigationOptions = {
    title: 'test',
    tabBarLabel: 'Drinks',

    tabBarIcon: ({tintColor = '#FAD02C'}) => (
        <Icon name='beer' size={25} color={'#FAD02C'}/>
    )

};

CabinetNavigator.navigationOptions = {
    tabBarLabel: 'Bar cabinet',
    tabBarIcon: ({tintColor = '#E6C2BF'}) => (

        <Icon name='home' size={25} color={'#E6C2BF'} />

    )
};

const styles = StyleSheet.create({

    iconStyle: {
        color: 'black',
        fontFamily: 'Roboto-Black',
        marginRight: '5%',
    },

});

export default createAppContainer(createBottomTabNavigator({
    AppNavigator,
    CabinetNavigator,
}));