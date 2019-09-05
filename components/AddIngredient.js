import React, {Component} from 'react';
<<<<<<< HEAD

import {View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import firebase from "react-native-firebase";
import { Button } from 'react-native-elements';
import {getAll, getAllIngredients} from "../Serviceclient";
import CabinetIngredient from "./CabinetIngredient";


class AddIngredient extends Component {
    state = { currentUser: null, ingredients: []};
    componentDidMount() {
        const {currentUser} = firebase.auth();
        this.setState({currentUser});

        getAllIngredients()
            .then((response) => {
                this.setState({ingredients: response})
            })
    }

    render() {
        const ingredientrows = this.state.ingredients
            .map(function(ingredient) {
                return(<CabinetIngredient ingredient={ingredient} key={ingredient.id.toString()}/>);
            });
        return (
            <View>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={{flex: 1, paddingTop: 20}} >

                        <Text style={styles.textStyle}>Add ingredients to your Cabinet</Text>
                        {ingredientrows}
                    </View>
                </ScrollView>

                {/*Tämä pitäisi routata menemään kabinetin etusivulle*/}
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Cabinet')}>
                    <Text style={styles.button2Style}>Close page</Text>
                </TouchableOpacity>
=======
import {Button, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {getAllIngredients, getSomeIngredients, getSomething} from "../Serviceclient";
import _ from "lodash";
import AddableIngredient from "./AddableIngredient";
import firebase from "react-native-firebase";

class AddIngredient extends Component {
    state = {ingredients: [] ,query: ""}

    componentDidMount = () => {
        this.getIngredients();
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
    }

    getIngredients = () => {
        getAllIngredients()
            .then((response) => {
                console.log(response)
                this.setState({
                    ingredients: response
                })
                console.log(this.state)
            })
            .catch((error) => console.log('Virhe ingredientsien haussa:' + error.message))
    }

    search = (ev) => {
        ev.preventDefault()
        console.log(this.state)
        this.searchIngredients(this.state.query)
        Keyboard.dismiss();
    }

    searchIngredients = _.debounce((d) => {
        getSomeIngredients(d)
            .then((response) => {
                this.setState({
                    ingredients: response,
                })
            })
            .catch((error) => console.log('Error:' + error.message))
    }, 250);

    render() {

        const ingredientrows = this.state.ingredients
            .map((ingredient) => {
                return (<AddableIngredient ingredient={ingredient} key={ingredient.id.toString()}/>);
            });

        return (
            <View style={{flex: 1, paddingTop: 20}} >
                <TextInput
                    placeholder="Search ingredients"
                    onChangeText={(query) => this.setState({query})}
                    value={this.state.query}
                />
                <TouchableOpacity
                    onPress={this.search}>
                    <Text >Search ingredients</Text>
                </TouchableOpacity>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic" >
                    {ingredientrows}
                </ScrollView>
                <Button
                    style={{flex: 1, paddingTop: 20}}
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Cabinet')} />
>>>>>>> master

            </View>
        );
    }
}

<<<<<<< HEAD
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
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#E6C2BF',
        color: '#E6C2BF',
        fontFamily: 'RobotoSlab-Black',
        fontSize: 25,
        padding: 10,
        textAlign:'center',
        fontWeight: 'bold',
        width: '100%',
        height: 60,
    },

    button2Style: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#E6C2BF',
        color: '#E6C2BF',
        fontFamily: 'RobotoSlab-Black',
        fontSize: 25,
        overflow: 'hidden',
        padding: 10,
        textAlign:'center',
        fontWeight: 'bold',
        position: 'absolute',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
    },
    lineStyle: {
        borderWidth: 0.8,
        borderColor: '#E6C2BF',
        margin: 10,
    },

});
=======
>>>>>>> master
export default AddIngredient;