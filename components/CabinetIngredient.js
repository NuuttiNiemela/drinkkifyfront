import React, {Component} from 'react';
import {StyleSheet, Text, View,} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

class CabinetIngredient extends Component {

    del = () => {
        this.props.delete(this.props.ingredient.ingredients_id)
    }

    render() {
        return (
            <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%',}}>
                <Text style={styles.viinaStyle}>{this.props.ingredient.ingredient_name} </Text>
                    <Icon
                        name="trash-alt"
                        size={20}
                        color="#698D3F"
                        onPress={this.del}
                        style="reverse"
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
        margin: 10,
    },
    viinaStyle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
});

export default CabinetIngredient;