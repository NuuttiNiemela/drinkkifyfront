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
                        color="black"
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
        color: 'black',
        margin: 10,
    },
    lineStyle: {
        borderWidth: 0.8,
        borderColor: '#E6C2BF',
        margin: 10,
    },
    viinaStyle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        textAlign: 'left',
        margin: 5,
    },
});

export default CabinetIngredient;