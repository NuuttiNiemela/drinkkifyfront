import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

class CabinetIngredient extends Component {

    del = () => {
        this.props.delete(this.props.ingredient.ingredients_id)
    }

    render() {
        return (
            <View>
                <Text style={styles.viinaStyle}>{this.props.ingredient.ingredient_name}</Text>
                <TouchableOpacity
                onPress={this.del} >
                    <Text>
                        DEL
                    </Text>
                </TouchableOpacity>
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