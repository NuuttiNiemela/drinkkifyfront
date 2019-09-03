import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {Button, View} from 'react-native';

export default class MyComponent extends React.Component {
    state = {
        firstQuery: '',
    };

    search = (a) => {
        a.preventDefault()
        this.props.search(this.state.firstQuery)
    }

    render() {
        const { firstQuery } = this.state;
        return (
            <View>
            <Searchbar
                placeholder=" Search drinks "
                onChangeText={query => { this.setState({ firstQuery: query }); }}
                value={firstQuery}
                onIconPress={this.search}
                // backgroundColor={'#FAD02C'}
            />
            {/*<Button*/}
            {/*title='Search'*/}
            {/*onPress={this.search}/>*/}
            </View>
        );
    }
}