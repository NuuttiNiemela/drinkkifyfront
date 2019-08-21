import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from "./Main";
import Cabinet from "./Cabinet";

const AppNavigator = createStackNavigator({
    Home: Main,
    Cabinet: Cabinet,
},
    {
        initialRouteName: "Home"
    });

export default createAppContainer(AppNavigator);