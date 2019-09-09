import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';
import Main from "./Main";
import Cabinet from "./Cabinet";
import Login from "./authentication/Login";
import SearchRecipe from "./SearchRecipe";
import AddIngredient from "./AddIngredient";
import React from "react";
import {Modal, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import Loading from "./authentication/Loading";
import SignUp from "./authentication/SignUp";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Drinkkify from "./Drinkkify";
import {Image} from "react-native-elements";
import HakuModalExample from "./HakuModalExample";
import AddDrink from "./AddDrink";


// class Navigator extends Component{
//     constructor(props) {
//         super(props);
//
//     }
//     componentDidMount(){
//         this.refs.modalVisible()
//     }
//     render() {
//         return <HakuModalExample container={this} ref = "modal" />
//     }
//
//
//
// }

const AppNavigator = createStackNavigator({
    Main: Main,
    Search: SearchRecipe,
    // Aine: AddIngredient,
},
    {
        initialRouteName: "Main",
        // initialRouteName: "Aine",
        defaultNavigationOptions: {
            headerTitle: '',
//             headerRight: Platform.select({
//
//                 ios: null,
//                 android: (
//
//                     <Icon
//                         // style={{margin: '1%'}}
//                         name="search"
//                         size={30}
//                         color="black"
//                         onPress={() => {
//                             this.setModalVisible(true);
//                         }}
//                     />
//                 )
// }),
            headerBackground:

                <Image
                    source={require('./Drinkkify.png')}
                    style={{width:'50%', height:46, marginTop:'2%'}}
                />
        }
});

// Hampurilaisnavigaatio-harjoitus by Laura. Apuja mm. täältä:
// https://www.igismap.com/drawer-react-navigation-3-x-react-native/
// Pitkä matka tästä toimivaksi, en ole vielä hahmottanut, mitä kaikkea pitäisi laittaa minnekin, että tuon lopulta saa toimimaan.

// const Drawer = createDrawerNavigator({
//         Home: {
//             navigationOptions: {
//                 drawerLabel: "Home"
//             },
//             screen: Home
//         },
//
//         // ProfilePage: {
//         //     screen: ProfilePage,
//         //     navigationOptions: {
//         //         drawerLabel: 'Profile'
//         //     }
//         // },
//         AddIngredientPage: {
//             screen: AddIngredient,
//             navigationOptions: {
//                 drawerLabel: 'Add Ingredient-sivu'
//             }
//         },
//         AddRecipePage: {
//             screen: AddDrink,
//             navigationOptions: {
//                 drawerLabel: 'Add Recipe-sivu'
//             }
//         }
//     },
//     {
//         drawerPosition: 'right',
//         contentComponent: CustomDrawerNavigation,
//         drawerOpenRoute: 'DrawerOpen',
//         drawerCloseRoute: 'DrawerClose',
//         drawerToggleRoute: 'DrawerToggle',
//         drawerWidth: (width / 3) * 2
//     });

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
                backgroundColor: '#EBEEF3',
            },
            headerTintColor: '#696D3F',
            title: 'Bar cabinet',
        },
    });

AppNavigator.navigationOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    tabBarLabel: 'Drinks',
    tabBarIcon: ({tintColor = 'black'}) => (
        <Icon name='beer' size={25} color={'#FAD02C'} backgroundColor={'#B2C8D4'}/>
    )

};

CabinetNavigator.navigationOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    tabBarLabel: 'Bar cabinet',
    tabBarIcon: ({tintColor = 'black'}) => (

        <Icon name='home' size={25} color={'#696D3F'} />

    )
};

const styles = StyleSheet.create({
    scrollView: {
        color: 'black',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    craftStyle: {
        fontSize: 20,
        color: 'black',
        textAlign : 'center',
        fontFamily: 'Roboto-Black',
    },
    ingredientStyle: {
        fontSize: 18,
        color: 'black',
        margin: 10,
        fontFamily: 'Roboto-Black',
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
        color: 'black',
    },
    tableContent: {
        marginTop: 42,
        paddingHorizontal: 24,
        textAlign: 'center',
        fontSize: 14,
        backgroundColor: 'black',
    },
    sectionContainer: {
        marginTop: 42,
        paddingHorizontal: 24,
        textAlign: 'center',
        fontFamily: 'Roboto-Black',
        fontSize: 14,
        backgroundColor: '#F8EFE4',

    },
    sectionTitle: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Roboto-Black',
    },
    sectionDescription: {
        marginTop: 18,
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 20,
        color: 'black',
        fontFamily: 'Roboto-Black',
    },
    highlight: {
        fontWeight: '700',
    },
    buttonStyle: {
        color: 'black',
        borderColor: '#282120',
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 16,
        fontWeight: '600',
        padding: 8,
        textAlign: 'center',
        backgroundColor: '#F8EFE4'
    },

    iconStyle: {
        color: 'black',
        fontFamily: 'Roboto-Black',
        marginRight: '5%',
    },
    icon: {
        padding: 1,
        marginLeft: 1,
        // flex: 1,
    },

});

export default createAppContainer(createBottomTabNavigator({
    AppNavigator,
    CabinetNavigator,
    // Navigator,

}));