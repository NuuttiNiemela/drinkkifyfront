import React, {Component} from 'react';
import {StyleSheet, Text, View,} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

class EditableIngredient extends Component {

    edit = () => {
        this.props.edit(this.props.ingredient.id)
    }

    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%',}}>
                    <Text style={styles.viinaStyle}>{this.props.ingredient.ingredient_name} </Text>
                    <Icon
                        name="edit"
                        size={20}
                        color="#698D3F"
                        onPress={this.edit}
                        style={{ marginTop:'4%'}}
                    />
                </View>
                <View style = {styles.lineStyle} />
            </View>
        );
    }
}
const styles = StyleSheet.create({

    ingredientStyle: {
        fontSize: 18,
        color: '#698D3F',
        margin: 20,
    },
    lineStyle: {
        borderWidth: 0.8,
        borderColor: '#B2C8D4',
        margin: 2,
    },
    viinaStyle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
});

export default EditableIngredient;