import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    NavigationScreenComponent as navigationOptions
} from 'react-navigation';
import Main from "./Main";
import Cabinet from "./Cabinet";
import Login from "./authentication/Login";
import SearchRecipe from "./SearchRecipe";
import SearchBooze from "./SearchBooze";
import React from "react";
// import {IconButton, Colors} from "react-native-paper";
// import {Icon} from 'react-native-vector-icons';
// import Icon from 'react-native-ionicons';
// import {Button} from "react-native-elements";
import {StyleSheet} from 'react-native';
import Loading from "./authentication/Loading";
import SignUp from "./authentication/SignUp";
import {Image} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Drinkkify from "./Drinkkify";



// class LogoTitle extends React.Component {
//     render() {
//         return (
//             <Image
//             source={require('../assets/kuvat/Drinkify.jpg')}
//             style={{width:30, height:30}}
//             />
//         );
//     }
// }
const AppNavigator = createStackNavigator({
    Main: Main,
    Search: SearchRecipe,

},
    {
        initialRouteName: "Main",
        defaultNavigationOptions: {
            title: 'Drinkify',
            // headerTitle: <LogoTitle/>
        }
});

const CabinetNavigator = createStackNavigator({
    Cabinet: Cabinet,
    Search: SearchBooze,
        Login: Login,
    Loading: Loading,
    SignUp: SignUp,
    Drinkkify: Drinkkify,
},
    {
        initialRouteName: "Loading",
        defaultNavigationOptions: {
            title: 'Bar cabinet',
        },
    });

AppNavigator.navigationOptions = {
    tabBarLabel: 'Drinks',
    tabBarIcon: ({tintColor}) => (
        <Icon name='beer' size={20}/>
    )

};

CabinetNavigator.navigationOptions = {
    tabBarLabel: 'Bar cabinet',
    tabBarIcon: ({tintColor}) => (
        <Icon name='home' size={20}/>
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