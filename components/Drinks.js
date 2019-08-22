import React, {Component} from 'react';
import {View, FlatList} from "react-native";
import ModalExample from "../ModalExample";

class Drinks extends Component {

    render() {


        return (
            <View style={{flex: 1, padding:20}}>
            <FlatList
            data={this.props.drinks}
            renderItem={({item}) => <ModalExample name={item.drink_name} instructions={item.drink_instructions} ingredient1={item.drink_ingredient1} ingredient2={item.drink_ingredient2} ingredient3={item.drink_ingredient3} ingredient4={item.drink_ingredient4}  />}
            keyExtractor={({id}) => id}/>
            </View>
        );
    }
}

export default Drinks;