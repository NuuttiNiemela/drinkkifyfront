import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableHighlight, View, Alert, ScrollView} from 'react-native';
/*import {Colors} from "react-native/Libraries/NewAppScreen";
import * as Animatable from 'react-native-animatable';*/
import { material } from 'react-native-typography'
import Ingredient from "./Ingredient";



export class DrinkDetails extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        const ingredientrows = this.props.ingredients
            .map(function(drink_ingr) {
                return(<Ingredient ingredient={drink_ingr} key={drink_ingr.id.toString()}/>);
            });


        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View>
                        <ScrollView
                            contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>
                        <View style={styles.sectionContainer}>
                            <Text>{"\n"}</Text>
                            <Text style={styles.sectionTitle}>{this.props.name}</Text>
                            <Text>{"\n"}</Text>
                            {ingredientrows}
                            <Text>{"\n"}</Text>
                            <Text style={styles.craftStyle}>Ohjeet...</Text>
                            <Text>{"\n"}</Text>
                            <Text style={styles.craftStyle}>{this.props.instructions}</Text>
                            <Text>{"\n"}</Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style={styles.buttonStyle}>Close drink</Text>
                            </TouchableHighlight>
                            <Text>{"\n"}</Text>
                        </View>
                        </ScrollView>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text style={styles.sectionDescription}>{this.props.name}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    scrollView: {
        backgroundColor: 'black',
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
        backgroundColor: '#DBE8D8',

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
        borderColor: 'black',
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 16,
        fontWeight: '600',
        padding: 8,
        textAlign: 'center',
    },
});

export default DrinkDetails;