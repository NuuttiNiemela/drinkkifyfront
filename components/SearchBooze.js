import React, {Component} from 'react';
import {Button, Text, View} from "react-native";

class SearchBooze extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: 20}} >
                <Text>VIINOJEN ETTINTÄ</Text>
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}

export default SearchBooze;