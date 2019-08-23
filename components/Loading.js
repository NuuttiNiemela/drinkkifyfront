import React, {Component} from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'

class Loading extends Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Cabinet' : 'Login')
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
                <Text>Tervetuloa Drinkkifyn maailmaan</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Loading;