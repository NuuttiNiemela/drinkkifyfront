import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableHighlight, View, Alert, ScrollView} from 'react-native';
/*import {Colors} from "react-native/Libraries/NewAppScreen";
import * as Animatable from 'react-native-animatable';*/
import { material } from 'react-native-typography'




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
                        <ScrollView
                            contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>
                        <View style={styles.sectionContainer}>
                            <Text>{"\n"}</Text>
                            <Text style={styles.sectionTitle}>{this.props.name}</Text>
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
                            <Text style={styles.craftStyle}>Ohjeet...</Text>
                            <Text>{"\n"}</Text>
                            <Text style={styles.craftStyle}>{this.props.instructions}</Text>
                            <Text>{"\n"}</Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style={styles.footer}>Sulje Drinksu</Text>
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
        backgroundColor: 'powderblue',
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
        fontFamily: 'Roboto-Black',
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