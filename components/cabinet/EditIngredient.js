import React, {Component} from 'react';
import {View, Text} from "react-native";
import firebase from "react-native-firebase";
import {editUsersIngredient, getUsersIngredients} from "../../Serviceclient";
import EditableIngredient from "./EditableIngredient";
import {ScrollView} from "react-navigation";

class EditIngredient extends Component {
    state={currentUser: '' , ingredients: []}

    async componentDidMount() {
        const {currentUser} = await firebase.auth()
        this.setState({currentUser},
            this.getIngredients)
        const {navigation} = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this.getIngredients()
        })
    }

    getIngredients = () => {
        getUsersIngredients(this.state.currentUser.email)
            .then((response) => this.setState({ingredients: response}))
    }

    editIngredient = (i, n) => {
        editUsersIngredient(this.state.currentUser.email, i, n)
            .then(this.getIngredients)
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    render() {

        const ingredientrows = this.state.ingredients
            .map((ingredient) => {
                return (<EditableIngredient ingredient={ingredient} key={ingredient.id.toString()} edit={this.editIngredient} />);
            });

        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <Text>Ingredients you have added</Text>
                <Text>{"\n"}</Text>
                {ingredientrows}
            </ScrollView>
        );
    }
}

export default EditIngredient;