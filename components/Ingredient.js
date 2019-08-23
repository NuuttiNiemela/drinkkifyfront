import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

class Ingredient extends Component {
    render() {
        return (
            <View>
            <Text style={styles.ingredientStyle}>{this.props.ingredient.ingredient_name} - {this.props.ingredient.amount} {this.props.ingredient.unit} </Text>
            <View style = {styles.lineStyle} />
            </View>
        );
    }
}
const styles = StyleSheet.create({

    ingredientStyle: {
        fontSize: 18,
        color: 'black',
        margin: 10,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    }
});

export default Ingredient;