import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Cabinet extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: 20}} >
                <Text>TÄSSÄ IKIOMA VIINAKAAPPI</Text>
                <Button
                title="Search"
                onPress={() => this.props.navigation.navigate('Search')} />
            </View>
        );
    }
}

export default Cabinet;