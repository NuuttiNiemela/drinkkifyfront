import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import firebase from "react-native-firebase";
import {addToCabinet} from "../../Serviceclient";

class AddableIngredient extends Component {
    state = {currentUser: null}

    componentDidMount = () => {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
    }

    add = async () => {
        console.log('ADDIN i on: ' + this.props.ingredient.id)
        await addToCabinet(this.state.currentUser.email, this.props.ingredient.id)
            .then(() => alert(this.props.ingredient.ingredient_name + ' added to your bar cabinet'))
            .catch((error) => alert("Adding didn't work \n" + error.message))
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                onPress={this.add} >
                <Text style={styles.viinaStyle}>{this.props.ingredient.ingredient_name}</Text>
                </TouchableOpacity>
                <View style = {styles.lineStyle} />
            </View>
        );
    }
}
const styles = StyleSheet.create({

    lineStyle: {
        borderWidth: 0.6,
        borderColor: '#698D3F',
        margin: 10,
        marginLeft: '10%',
        marginRight: '10%'
    },
    viinaStyle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        textAlign: 'left',
        margin: 12,
        paddingLeft: '10%',
        // paddingRight: '8%'
    },
});
export default AddableIngredient;