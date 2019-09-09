import React, {Component} from 'react';
import Ingredient from "./Ingredient";
import {
    Button,
    Keyboard,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import {addIngredient, addToCabinet} from "../Serviceclient";

class NewIngredient extends Component {
    state = {
        modalVisible: false,
        name: '',
    };

    add = async (ev) => {
        ev.preventDefault();
        await this.addNew(this.state.name)
        Keyboard.dismiss();
        this.setModalVisible(!this.state.modalVisible);
    }

    addNew = async (ingredient) => {
        await addIngredient(ingredient, this.props.user.email)
            .then(response => addToCabinet(this.props.user.email, response.id))
            .then(alert(ingredient + ' added to ingredients'))
            .catch(() =>alert("Adding didn't work"))
    }


    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={{Color:'black'}}>
                        <Text>Add new Ingredient</Text>

                        <TextInput
                            placeholder="Name"
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}
                        />
                        <TouchableOpacity
                            onPress={this.add}>
                            <Text >Submit</Text>
                        </TouchableOpacity>


                        <Text>{"\n"}</Text>
                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text style={styles.buttonStyle}>Close</Text>
                        </TouchableHighlight>
                        <Text>{"\n"}</Text>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text style={styles.sectionDescription}>New Ingredient</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    scrollView: {
        color: 'black',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    craftStyle: {
        fontSize: 20,
        color: 'black',
        textAlign : 'center',
        fontFamily: 'Roboto-Black',
    },
    ingredientStyle: {
        fontSize: 18,
        color: 'black',
        margin: 10,
        fontFamily: 'Roboto-Black',
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
        color: 'black',
    },
    tableContent: {
        marginTop: 42,
        paddingHorizontal: 24,
        textAlign: 'center',
        fontSize: 14,
        backgroundColor: 'black',
    },
    sectionContainer: {
        marginTop: 42,
        paddingHorizontal: 24,
        textAlign: 'center',
        fontFamily: 'Roboto-Black',
        fontSize: 14,
        backgroundColor: '#F8EFE4',

    },
    sectionTitle: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Roboto-Black',
    },
    sectionDescription: {
        marginTop: 18,
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 20,
        color: 'black',
        fontFamily: 'Roboto-Black',
    },
    highlight: {
        fontWeight: '700',
    },
    buttonStyle: {
        color: 'black',
        borderColor: '#282120',
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 16,
        fontWeight: '600',
        padding: 8,
        textAlign: 'center',
        backgroundColor: '#F8EFE4'
    },
});

export default NewIngredient;