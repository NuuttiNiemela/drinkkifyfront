import React, {Component} from 'react';
import {Button, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {getAllIngredients, getSomeIngredients, getSomething} from "../Serviceclient";
import _ from "lodash";
import AddableIngredient from "./AddableIngredient";
import firebase from "react-native-firebase";
import NewIngredient from "./NewIngredient";
import AppNavigator from "./AppNavigator";

class AddIngredient extends Component {
    state = {currentUser: null, ingredients: [] ,query: ""}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser},
            this.getIngredients)
        const {navigation} = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            if(this.state.currentUser != null) this.getIngredients()
        })
    }

    getIngredients = () => {
        getAllIngredients()
            .then((response) => {
                this.setState({
                    ingredients: response
                })
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

    componentWillUnmount() {
        this.focusListener.remove();
    }

    render() {

        const ingredientrows = this.state.ingredients
            .map((ingredient) => {
                return (<AddableIngredient ingredient={ingredient} key={ingredient.id.toString()}/>);
            });

        // const newIngredient = this.state.currentUser
        //     .map((user) => {
        //         return(<NewIngredient user={user}/>)
        //     })

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
                    <NewIngredient user={this.state.currentUser} />
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