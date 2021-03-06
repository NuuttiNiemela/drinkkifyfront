import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from "react-native";
import DrinkDetails from "./DrinkDetails";
//import Markdown from 'react-native-easy-markdown';

class Drinks extends Component {


    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: "86%",
                    backgroundColor: "#F6E2AD",
                    marginLeft: "5%",
                    marginTop: "2%",
                    color: '#F6C213'
                }}
            />
        );
    };

    render() {


        return (
            <View
                        style={{flex: 1, padding:20,}}>

                        <FlatList
                            style={styles.listStyle}
                            data={this.props.drinks}
                            renderItem={({item}) => <DrinkDetails name={item.drink_name} instructions={item.drink_instructions} ingredients={item.ingredients}/>}
                            containerStyle={{borderBottomWidth: 0}}
                            ItemSeparatorComponent={this.renderSeparator}
                            keyExtractor={({id}) => id.toString()}/>
                    </View>

        );
    }
}const styles = StyleSheet.create({

    listStyle: {
        backgroundColor: 'white',

}
});
export default Drinks;