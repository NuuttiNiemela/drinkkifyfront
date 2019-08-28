import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

class CabinetIngredient extends Component {
    render() {
        return (
            <View>
                <Text style={styles.viinaStyle}>{this.props.ingredient.ingredient_name}</Text>
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
    },
    viinaStyle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        textAlign: 'left',
        margin: 12,
    },
});

export default CabinetIngredient;