import React, {Component} from 'react';
import {Button, Text, View, TextInput} from "react-native";

class SearchRecipe extends Component {
    state = { haku: ''}

    search = (d) => {
        d.preventDefault();
        console.log(this.state)
        this.props.etti(this.state.haku)
    }

    change = (ev) => { this.setState({haku: ev.target.value})};

    redirect = (d) => {
        this.search(d)
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: 20}} >
                <Text>Hae juoma</Text>
                <TextInput placeholder='Search' value={this.state.haku} onChange={this.change}/>
                <Button
                    title="Haku"
                    onPress={this.search} />

                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}

export default SearchRecipe;