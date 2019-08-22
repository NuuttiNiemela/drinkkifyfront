import React, {Component} from 'react';
import {Button, Text, View} from "react-native";

class SearchRecipe extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: 20}} >
                <Text>DRINKIN ETSINTÄ</Text>
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}

export default SearchRecipe;