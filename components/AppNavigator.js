import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Main from "./Main";
import Cabinet from "./Cabinet";
import Login from "./authentication/Login";
import SearchRecipe from "./SearchRecipe";
import SearchBooze from "./SearchBooze";
import Loading from "./authentication/Loading";
import SignUp from "./authentication/SignUp";

const AppNavigator = createStackNavigator({
    Main: Main,
    Search: SearchRecipe,
},
    {
        initialRouteName: "Main",
        defaultNavigationOptions: {
            title: 'Drinks'
        }
    });

const CabinetNavigator = createStackNavigator({
    Cabinet: Cabinet,
    Search: SearchBooze,
        Login: Login,
    Loading: Loading,
    SignUp: SignUp,
},
    {
        initialRouteName: "Loading",
        defaultNavigationOptions: {
            title: 'Baarikaappi',
        },
    })

AppNavigator.navigationOptions = {
    tabBarLabel: 'Drinksut'
};

CabinetNavigator.navigationOptions = {
    tabBarLabel: 'Baarikaappi'
};


export default createAppContainer(createBottomTabNavigator({
    AppNavigator,
    CabinetNavigator,
}));