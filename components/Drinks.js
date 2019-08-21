import React, {Component} from 'react';
import {View, FlatList} from "react-native";
import ModalExample from "../ModalExample";

class Drinks extends Component {
    render() {
        return (
            <View style={{flex: 1, padding:20}}>
            <FlatList
            data={this.props.drinks}
            renderItem={({item}) => <ModalExample name={item.drink_name} instructions={item.drink_instructions} />}
            keyExtractor={({id}) => id.toString()}/>
            </View>
        );
    }
}

export default Drinks;