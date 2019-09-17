import React, {Component} from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Alert,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
/*import {Colors} from "react-native/Libraries/NewAppScreen";
import * as Animatable from 'react-native-animatable';*/
import { material } from 'react-native-typography'
import Ingredient from "./Ingredient";
import {Icon, Image} from "react-native-elements";
import {createStackNavigator} from "react-navigation";
import Main from "./Main";
import SearchRecipe from "./SearchRecipe";
import AppNavigator from "./navigation/AppNavigator";
import AddDrink from "./AddDrink";


export class HakuModalExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
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
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={{Color:'black'}}>
                        <ScrollView
                            contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>
                            <View style={styles.sectionContainer}>
                                <View style={styles.searchSection}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Search drinks"
                                        onChangeText={(query) => this.setState({query})}
                                        value={this.state.query}
                                    />
                                    <TouchableOpacity
                                        onPress={this.search}>
                                        <Text style={styles.buttonStyle}>Search drinks</Text>
                                    </TouchableOpacity>

                                </View>
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


                <Icon
                    // style={{margin: '1%'}}
                    name="search"
                    size={30}
                    color="black"
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                />

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

export default HakuModalExample;