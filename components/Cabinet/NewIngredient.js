import React, {Component} from 'react';
import Ingredient from "../Ingredient";
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
    View,
    Image
} from "react-native";
import {addIngredient, addToCabinet} from "../../Serviceclient";
import Icon from 'react-native-vector-icons/FontAwesome5';



class NewIngredient extends Component {
    state = {
        modalVisible: false,
        name: '',
    };

    add = async (ev) => {
        ev.preventDefault();
        await this.addNew(this.state.name)
        this.setState({name: ''})
        this.setModalVisible(!this.state.modalVisible);
        this.props.getAll()
    }

    addNew = async (ingredient) => {
        await addIngredient(ingredient, this.props.user.email)
            .then(response => {
                addToCabinet(this.props.user.email, response.id)
                    .then(alert(ingredient + ' added to ingredients'))
                    .then(() => Keyboard.dismiss())
            })
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
                    }}
                    >

                    <Image
                        source={require('./VectorCocktails.jpg')}
                        style={{width: '10%', height: '10%'}}
                    />


                    <View style={{Color:'#698D3F'}}>
                        <Text style={{color:"#698D3F", marginTop: "10%", marginLeft: "6%", fontFamily: 'Roboto-Black', fontSize: 20}}>Add new Ingredient</Text>
                        <Text>{"\n"}</Text>
<View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: "5%"}}>
                        <TextInput
                            autoCapitalize="sentences"
                            placeholder="Type ingredient's name and submit to your cart"
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}
                        />
                        <Icon
                            style={{marginRight: "7%"}}
                            name="cart-plus"
                            size={30}
                            color="#698D3F"
                            onPress={this.add}>
                            {/*<Text >Submit</Text>*/}
                        </Icon>

</View>
                    </View>
                    <Text>{"\n"}</Text>
                        <Text>{"\n"}</Text>
                        <Icon
                            name="times-circle"
                            size={50}
                            color="#698D3F"
                            style={{marginLeft:"45%"}}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            {/*<Text style={styles.buttonStyle}>{"\n"}</Text>*/}
                        </Icon>
                        <Text>{"\n"}</Text>


                </Modal>

                <Text> {"\n"}</Text>
                <View style={{flex: 2}} >
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.sectionDescription}>Add new ingredient</Text>
                    <Text> {"\n"}</Text>
                    <Icon
                    name="plus-circle"
                    size={30}
                    color="#698D3F"
                    justifyContent= 'flex-end'
                    // marginRight="20%"
                    onPress={() => {
                        this.setModalVisible(true);
                    }}/>
                </View>
                </View>
                <Text> {"\n"}</Text>
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
        // marginTop: 5,
        fontSize: 15,
        fontWeight: '400',
        marginLeft: '12%',
        marginRight: '20%',
        color: '#698D3F',
        fontFamily: 'Roboto-Black',
        width: '44%',

    },
    highlight: {
        fontWeight: '700',
    },
    buttonStyle: {
        justifyContent: 'center',
        backgroundColor: '#B2C8D4',
        // borderWidth: 3,
        borderRadius: 80/ 2,
        // borderColor: '#E6C2BF',
        color: '#698D3F',
        fontFamily: 'Roboto-Black',
        fontSize: 16,
        padding: 5,
        textAlign:'center',
        fontWeight: 'bold',
        width: 80,
        height: 80,
        elevation: 5,
        position: 'relative',
    },
});

export default NewIngredient;