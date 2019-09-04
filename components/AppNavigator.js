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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Drinkkify from "./Drinkkify";
import {Image} from "react-native-elements";
import HakuModalExample from "./HakuModalExample";



const AppNavigator = createStackNavigator({
    Main: Main,
    Search: SearchRecipe,

},
    {
        initialRouteName: "Main",
        defaultNavigationOptions: {
            headerBackground:

                <Image
                    source={require('./Drinkify6.png')}
                    style={{width:'50%', height:80}}
                />,
            headerRight: Platform.select({

                ios: null,
                android: (
                <Icon
                name="search"
                size={30}
                color="black"
                onPress={this.search}
            />
                )
})
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
    tabBarLabel: 'Home',

    tabBarIcon: ({tintColor = '#FAD02C'}) => (
        <Icon name='home' size={25} color={'#FAD02C'}/>
    )

};
//MITEN TÄMÄN VOIS TEHDÄ?
SearchNavigator.navigationOptions = {
    tabBarLabel: 'Search Drinks',
    tabBarIcon: ({tintColor = '#E6C2BF'}) => (

        <Icon name='search' size={25} color={'black'} />

    )
};

CabinetNavigator.navigationOptions = {
    tabBarLabel: 'Bar cabinet',
    tabBarIcon: ({tintColor = '#E6C2BF'}) => (

        <Icon name='beer' size={25} color={'#E6C2BF'} />

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
    SearchNavigator,
    CabinetNavigator,
}));