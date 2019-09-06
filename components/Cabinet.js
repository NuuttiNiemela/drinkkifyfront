import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import firebase from "react-native-firebase";
import {withNavigation} from 'react-navigation';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Ingredient from "./Ingredient";
import {getCabinet, getAllIngredients, addToCabinet, removeFromCabinet} from "../Serviceclient";
import CabinetIngredient from "./CabinetIngredient";


class Cabinet extends Component {
    state = { currentUser: null, ingredients: [], cabinetIngredients: []}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser},
            this.getYourCabinet)
        const {navigation} = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            if(this.state.currentUser != null) this.getYourCabinet()
                .then(r => console.log('mitä ' + r))
        })
    }

    getYourCabinet = async () => {
        await getCabinet(this.state.currentUser.email)
            .then((response) => {
                if (response) {
                    this.setState({cabinetIngredients: response})
                } else {
                    this.setState({cabinetIngredients: []})
                }
            })
    }

    signOutUser = async () => {
            await firebase.auth().signOut()
                .then(() => {this.setState({currentUser: null, cabinetIngredients: []})})
    }

    deleteIngredient = (i) => {
        removeFromCabinet(this.state.currentUser.email, i)
            .then(this.getYourCabinet)
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    render() {
            const ingredientrows = this.state.cabinetIngredients
                .map((ingredient) => {
                    return (<CabinetIngredient ingredient={ingredient} key={ingredient.ingredients_id.toString()} delete={this.deleteIngredient} />);
                });

        return (
            <View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
            <View style={{flex: 1, paddingTop: 20}} >

                <Text style={styles.textStyle}>Welcome {this.state.currentUser && this.state.currentUser.email}!</Text>
                <Text>{"\n"}</Text>
                <TouchableOpacity onPress={this.signOutUser}>
                    <Text style={styles.buttonStyle}>Sign out</Text>
                </TouchableOpacity>
                <Text>{"\n"}</Text>
                {ingredientrows}
                <TouchableOpacity
                    style={styles.button2Style}
                    onPress={() => this.props.navigation.navigate('Search')}>
                    <Text>Add Ingredient</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
                <TouchableOpacity
                    style={styles.buttonDrinkkify}
                    onPress={() => this.props.navigation.navigate('Drinkkify')}>
                    <Text>Drinkkify</Text>
                </TouchableOpacity>
            </View>



        );
    }
}

const styles = StyleSheet.create({

    textStyle: {
        padding: 2,
        marginLeft:5,
        fontSize: 18,
        textAlign: 'center',
        color: '#E6C2BF',
        fontFamily: 'Roboto-Black',
    },

    scrollView: {
        backgroundColor: 'white',
    },

    viinaStyle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        textAlign: 'left',
        margin: 12,
    },
    buttonStyle: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderRadius: 12,
        borderColor: '#E6C2BF',
        color: '#E6C2BF',
        fontFamily: 'Roboto-Black',
        fontSize: 25,
        padding: 5,
        textAlign:'center',
        fontWeight: 'bold',
        width: '100%',
        height: 60,
    },

    button2Style: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderRadius: 12,
        borderColor: '#E6C2BF',
        color: '#E6C2BF',
        fontFamily: 'Roboto-Black',
        fontSize: 25,
        overflow: 'hidden',
        padding: 10,
        textAlign:'center',
        fontWeight: 'bold',
        // position: 'absolute',
        width: '80%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        // bottom: 50,
        marginTop: 135,
    },
    buttonDrinkkify: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderRadius: 18,
        borderColor: '#E6C2BF',
        color: '#E6C2BF',
        fontFamily: 'Roboto-Black',
        fontSize: 25,
        // overflow: 'hidden',
        padding: 10,
        textAlign:'center',
        fontWeight: 'bold',
        // position: 'absolute',
        width: '70%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 120,

    },
    lineStyle: {
        borderWidth: 0.8,
        borderColor: '#E6C2BF',
        margin: 10,
    },

});
export default Cabinet;