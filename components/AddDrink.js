import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard } from 'react-native';
import {addToList} from "../Serviceclient";



class AddDrink extends Component {

    state = {
        name: '',
        ingredients: '',
        instructions: '',
    }

send = (e) => {
    e.preventDefault();
    addToList(this.state)
    .then(this.props.paivita)
    Keyboard.dismiss();
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