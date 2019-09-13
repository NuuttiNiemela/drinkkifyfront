import React, {Component} from 'react';
import {Button, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View, Frag, StyleSheet} from "react-native";
import {getAllIngredients, getSomeIngredients, getSomething} from "../Serviceclient";
import _ from "lodash";
import AddableIngredient from "./AddableIngredient";
import firebase from "react-native-firebase";
import NewIngredient from "./NewIngredient";
import AppNavigator from "./AppNavigator";
import {Icon} from "react-native-elements";

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
                    <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    placeholder="Type here to search ingredients"
                    onChangeText={(query) => this.setState({query})}
                    value={this.state.query}
                />
                        <Text>{"\n"}</Text>
                <Icon
                    // style={styles.searchIcon}
                    name="search"
                    size={30}
                    color="#698D3F"
                    onPress={this.search}
                    marginRight={100}
                />
                    </View>
                {/*<TouchableOpacity*/}
                {/*    onPress={this.search}>*/}
                {/*    <Text >Search ingredients</Text>*/}
                {/*</TouchableOpacity>*/}
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic" >
                    <NewIngredient user={this.state.currentUser} />
                    {ingredientrows}
                </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({
        searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',

            // marginRight: '10%',
    },
    input: {
        padding: 1,
        backgroundColor: 'white',
        color: '#424242',
        width: '70%',
        fontFamily: 'Roboto-Black',
        marginLeft: '12%',
    },
});

export default AddIngredient;