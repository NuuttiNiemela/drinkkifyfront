import React, {Component} from 'react';
import {View, Text} from "react-native";
import firebase from "react-native-firebase";
import {editUsersIngredient, getUsersIngredients} from "../../Serviceclient";
import EditableIngredient from "./EditableIngredient";

class EditIngredient extends Component {
    state={currentUser: '' , ingredients: []}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser},
            this.getIngredients)
    }

    getIngredients = async () => {
        await getUsersIngredients(this.state.currentUser.email)
            .then((response) => this.setState({ingredients: response}))
    }

    editIngredient = (i) => {
        editUsersIngredient(this.state.currentUser.email, i)
            .then(this.getIngredients)
    }

    render() {

        const ingredientrows = this.state.ingredients
            .map((ingredient) => {
                return (<EditableIngredient ingredient={ingredient} key={ingredient.id.toString()} edit={this.editIngredient} />);
            });

        return (
            <View>
                <Text>Ingredients you have added</Text>
                <Text>{"\n"}</Text>
                {ingredientrows}
            </View>
        );
    }
}

export default EditIngredient;