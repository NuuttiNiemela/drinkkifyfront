import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableHighlight, View, Alert, ScrollView} from 'react-native';
import {Colors} from "react-native/Libraries/NewAppScreen";
import * as Animatable from 'react-native-animatable';



export class ModalExample extends Component {
    state = {
        modalVisible: false,
    };

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
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View>
                        <View style={styles.sectionContainer}>
                            <Text>{"\n"}</Text>
                            <Text style={styles.sectionTitle}>Drinksun Nimi</Text>
                            <Text>{"\n"}</Text>
                            <Text style={styles.ingredientStyle}>2cl Aine</Text>
                            <View style = {styles.lineStyle} />
                            <Text style={styles.ingredientStyle}>2cl Aine</Text>
                            <View style = {styles.lineStyle} />
                            <Text style={styles.ingredientStyle}>2cl Aine</Text>
                            <View style = {styles.lineStyle} />
                            <Text style={styles.ingredientStyle}>2cl Aine</Text>
                            <View style = {styles.lineStyle} />
                            <Text>{"\n"}</Text>
                            <Text style={styles.craftStyle}>Ohjeet</Text>
                            <Text>{"\n"}</Text>
                            <Text style={styles.ingredientStyle}>If you want to improve the UX, you can allow the user to swipe the modal away. For example, if the modal comes from the top like a notification, it feels natural to close it by pulling it up ⬆️. If it comes from the bottom, the user will be surprised if they cannot swipe it down ⬇️. It’s even better to highlight the fact that they can swipe the modal with a little bar with some borderRadius. The best library for that use case would be the react-native-modal library. It is widely customisable and answers to criteria 1️⃣, 2️⃣ and 3️⃣.</Text>
                            <Text>{"\n"}</Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style={styles.footer}>Sulje Drinksu</Text>
                            </TouchableHighlight>
                            <Text>{"\n"}</Text>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text style={styles.sectionDescription}>Drinksun Nimi</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    craftStyle: {
       fontSize: 20,
       color: 'black',
        textAlign : 'center',
    },
    ingredientStyle: {
        fontSize: 18,
        color: 'black',
        margin: 10,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    },
    body: {
        backgroundColor: Colors.powderblue
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
        fontSize: 14,
        backgroundColor: 'powderblue',
    },
    sectionTitle: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
    },
    sectionDescription: {
        marginTop: 18,
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
        marginLeft: 20
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        padding: 4,
        textAlign: 'center',
    },
});

export default ModalExample;