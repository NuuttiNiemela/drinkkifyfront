import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

class Cabinet extends Component {
    render() {
        return (
            <View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
            <View style={{flex: 1, paddingTop: 20}} >
                <Text style={styles.viinaStyle}>Koskenkorva</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Gin</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Jägermeister</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Galliano</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Vodka</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Shamppanja</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Valkoviini</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Salmiakki</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Kahlua</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Roseviini</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Punaviini</Text>
                <View style = {styles.lineStyle} />


                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Search')}>
                    <Text style={styles.buttonStyle}>Lisää juoma</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    scrollView: {
        backgroundColor: 'white',
    },

    viinaStyle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        textAlign: 'left',
        margin: 12,
    },

    buttonStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'gold',
        color: 'gold',
        fontFamily: 'RobotoSlab-Thin',
        fontSize: 30,
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
    },
    lineStyle: {
        borderWidth: 0.8,
        borderColor: 'gold',
        margin: 10,
    },

});
export default Cabinet;