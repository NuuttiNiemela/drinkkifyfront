import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard, TouchableOpacity, Text} from 'react-native';
import {addToList} from "../Serviceclient";




class AddDrink extends Component {

    state = {
        name: '',
        ingredients: '',
        instructions: '',
        drink_ingredients: this.props.drink_ingredients,
        query: ''
    }



send = (e) => {
    e.preventDefault();
    addToList(this.state)
    .then(this.props.update)
    Keyboard.dismiss();
    this.setState({name: '', ingredients: '', instructions: ''});
}
    findIngredient(query) {
        //method called everytime when we change the value of the input
        if (query === '') {
            //if the query is null then return blank
            return [];
        }
        const {drinks_ingredients} = this.state;
        const regex = new RegExp(`${query.trim()}`, 'i');
        return drinks_ingredients.filter(ingredient_name=> ingredient_name.search(regex) >=0);
    }



    render() {
        return (
            <View>
                <TextInput
                    // style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Drinksun nimi"
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}/>
                    <TextInput
                    autoCapitalize="none"
                    placeholder="Ainekset"
                    onChangeText={ingredients => this.setState({ ingredients })}
                    value={this.state.ingredients}/>
                    <TextInput
                    autoCapitalize="none"
                    placeholder="Ohjeet"
                    onChangeText={instructions => this.setState({ instructions })}
                    value={this.state.instructions}
                />
                <TouchableOpacity onPress={this.send}>
                    <Text style={styles.buttonStyle}> LISÄÄ DRINKSU </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    buttonStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'gold',
        color: 'gold',
        fontFamily: 'RobotoSlab-Thin',
        fontSize: 30,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
    },

});


export default AddDrink;