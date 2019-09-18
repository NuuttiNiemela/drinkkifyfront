import React, {Component} from 'react';
import { View, Text } from "react-native";
import ChangePassword from "./ChangePassword";

class Settings extends Component {
    state = {user: ''}

    render() {
        return (
            <View>
                <Text>Settings page</Text>
                <View style={{padding: 10}}>
                <ChangePassword />
                </View>
            </View>
        );
    }
}

export default Settings;