import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Keyboard,
    TouchableOpacity,
    Text,
    Modal,
    TouchableHighlight
} from 'react-native';
import {addToList} from "../Serviceclient";

class AddDrink extends Component {

    state = {
        name: '',
        ingredients: '',
        instructions: '',
        visible: false,
    }


    setModalVisible(visible) {
        this.setState({visible: visible});
    }

    render() {
        return (
            <View>
            <Modal visible={this.state.visible}>
                <TextInput
                    // style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Drink name"
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}/>
                <TextInput
                    autoCapitalize="none"
                    placeholder="Ingredients"
                    onChangeText={ingredients => this.setState({ ingredients })}
                    value={this.state.ingredients}/>
                <TextInput
                    autoCapitalize="none"
                    placeholder="Instructions"
                    onChangeText={instructions => this.setState({ instructions })}
                    value={this.state.instructions}
                />
                <TouchableOpacity onPress={this.send}>
                    <Text style={styles.buttonStyle}> LISÄÄ DRINKSU </Text>
                </TouchableOpacity>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(!this.state.visible);
                    }}>
                    <Text style={styles.footer}>Sulje Drinksu</Text>
                </TouchableHighlight>
            </Modal>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Lisää Drinksu</Text>
                </TouchableHighlight>
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