import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HamppariTesti extends React.Component {
    state = { currentUser: null, ingredients: [], cabinetIngredients: []}
    render() {
        return (
            <View style={styles.container}>
                Add friends here!
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HamppariTesti;