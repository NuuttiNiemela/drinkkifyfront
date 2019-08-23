import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Main from "./Main";
import Cabinet from "./Cabinet";
import Login from "./Login";
import SearchRecipe from "./SearchRecipe";
import SearchBooze from "./SearchBooze";

const AppNavigator = createStackNavigator({
    Home: Main,
    Search: SearchRecipe,
    Login: Login,
},
    {
        initialRouteName: "Login",
        defaultNavigationOptions: {
            title: 'Drinks'
        }
    });

const CabinetNavigator = createStackNavigator({
    Home: Cabinet,
    Search: SearchBooze,
},
    {
        initialRouteName: "Home",
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