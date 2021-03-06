import React, {Component} from 'react';
import { View, Text } from "react-native";
import ChangePassword from "./ChangePassword";
import firebase from 'react-native-firebase';
import ChangeEmail from "./ChangeEmail";

class Settings extends Component {
    state = {currentUser: ''}

    async componentDidMount() {
        const {currentUser} = await firebase.auth()
        this.setState({currentUser})
        this.check()
    }

    check =  () => {
        console.log(this.state)
    }

    render() {
        return (
            <View>
                <Text>Settings page</Text>
                <View style={{padding: 10}}>
                    <ChangeEmail user={this.state.currentUser} />
                    <Text> </Text>
                <ChangePassword user={this.state.currentUser} />
                </View>



            </View>
        );
    }
}

export default Settings;