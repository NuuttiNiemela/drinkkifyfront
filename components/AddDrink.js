import React, {Component} from 'react';
import { StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput, Button } from 'react-native';
import {addToList} from "../Serviceclient";



class AddDrink extends Component {

    state = {
        name: '',
        ingredients: '',
        instructions: '',
    }

    addDrink = e => {
        this.setState({name: e.target.value, })
    };
    addIngredients = e => {
        this.setState({ingredients: e.target.value})
    };
    addInstructions = e => {
        this.setState({instructions: e.target.value})
    };

send = (e) => {
    e.preventDefault();
    addToList(this.state);
    this.setState({name: '', ingredients: '', instructions: ''});
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
                <Button
                    title= 'Lisää'
                    onPress={this.send}
                />
            </View>
        );
    }
}

export default AddDrink;