import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableHighlight, View, Alert} from 'react-native';
import {Colors} from "react-native/Libraries/NewAppScreen";

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
                        <View>
                            <Text style={styles.sectionTitle}>Drinksun Nimi</Text>
                            <Text style={styles.tableContent}>nnaklsdhohgysfhvjdzhfilsghukshfk.jsjdgkshfjskjgufgjjfjsjgjfjsgjjkvn</Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style={styles.footer}>Sulje Drinksu</Text>
                            </TouchableHighlight>
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
    body: {
        backgroundColor: Colors.powderblue
    },
    tableContent: {
        marginTop: 42,
        paddingHorizontal: 24,
        textAlign: 'center',
        fontSize: 14,
        backgroundColor: Colors.powderblue,
    },
    sectionContainer: {
        marginTop: 42,
        paddingHorizontal: 24,
        textAlign: 'center',
        fontSize: 14,
        backgroundColor: Colors.powderblue,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
        textAlign: 'center',
    },
    sectionDescription: {
        marginTop: 18,
        fontSize: 28,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'center',
    },
});

export default ModalExample;