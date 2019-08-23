import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from "react-native";
import ModalExample from "../ModalExample";

class Drinks extends Component {
    render() {
        return (
            <View style={{flex: 1, padding:20}}>
            <FlatList
                style={styles.listStyle}
            data={this.props.drinks}
            renderItem={({item}) => <ModalExample name={item.drink_name} instructions={item.drink_instructions} />}
            keyExtractor={({id}) => id.toString()}/>
            </View>
        );
    }
}const styles = StyleSheet.create({

    listStyle: {
        backgroundColor: 'mistyrose',
        color: 'black',

}
});
export default Drinks;