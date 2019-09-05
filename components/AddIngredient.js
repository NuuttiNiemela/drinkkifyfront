import React, {Component} from 'react';
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

            </View>
        );
    }
}

export default AddIngredient;