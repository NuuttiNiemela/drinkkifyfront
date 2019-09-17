import React, {Component,  Fragment} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Keyboard,
    TouchableOpacity,
    Text,
    Modal,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import {addToList, addToList2} from "../Serviceclient";
import SearchableDropDown from "react-native-searchable-dropdown";
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import DropdownMenu from "./DropdownMenu";

class AddDrink extends Component {

    state = {
        name: '',
        instructions: '',
        ingredientSearch: '',
        ingredient: '',
        ingredientAmount: '',
        ingredientUnit: '',
        ingredientSearch1: '',
        ingredient1: '',
        ingredientAmount1: '',
        ingredientUnit1: '',
        ingredientSearch2: '',
        ingredient2: '',
        ingredientAmount2: '',
        ingredientUnit2: '',
        ingredientSearch3: '',
        ingredient3: '',
        ingredientAmount3: '',
        ingredientUnit3: '',
        ingredientSearch4: '',
        ingredient4: '',
        ingredientAmount4: '',
        ingredientUnit4: '',
        ingredientSearch5: '',
        ingredient5: '',
        ingredientAmount5: '',
        ingredientUnit5: '',
        ingredientSearch6: '',
        ingredient6: '',
        ingredientAmount6: '',
        ingredientUnit6: '',
        value: '',
        valueArray: [],
        visible: false,
        allIngredients: [],
        units:[]
    }

    send = (e) => {
        e.preventDefault();
        addToList2(this.state)
            .then(this.props.update)
        Keyboard.dismiss();
        this.setState({
            name: '',
            instructions: '',
            ingredientSearch: '',
            ingredient: '',
            ingredientAmount: '',
            ingredientUnit: '',
            ingredientSearch1: '',
            ingredient1: '',
            ingredientAmount1: '',
            ingredientUnit1: '',
            ingredientSearch2: '',
            ingredient2: '',
            ingredientAmount2: '',
            ingredientUnit2: '',
            ingredientSearch3: '',
            ingredient3: '',
            ingredientAmount3: '',
            ingredientUnit3: '',
            ingredientSearch4: '',
            ingredient4: '',
            ingredientAmount4: '',
            ingredientUnit4: '',
            ingredientSearch5: '',
            ingredient5: '',
            ingredientAmount5: '',
            ingredientUnit5: '',
            ingredientSearch6: '',
            ingredient6: '',
            ingredientAmount6: '',
            ingredientUnit6: '',
        });
        this.setModalVisible(!this.state.visible)
    }


    setModalVisible(visible) {
        this.setState({visible: visible, value: 0, valueArray: [] ,allIngredients: this.props.all, units: [{name: 'cl'}, {name: 'dl'}, {name: 'for garnish'}, {name: 'top with'}, {name: 'stick'}, {name: 'piece'}, {name: 'serving'}, {name: 'dashes'}, {name: 'optional'}, {name: 'tbsp for the rim'}, {name: 'spoonfuls'}, {name: 'grated'}, {name: 'to taste'}, {name: 'pieces'}, {name: 'to top with'}, {name: 'leaves'}, {name: 'pinch'}, {name: 'serving'}, {name: 'according to your taste'}, {name: 'dl, or according to taste.'}, {name: 'small bunch'}, {name: 'splash'}, {name: 'shaving'}, {name: 'shavings'}, {name: 'dash'}]
        });
    }


    renderIngredient = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch: text})}
                    onItemSelect={(item) => this.setState({ingredient: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount => this.setState({ ingredientAmount })}
                    value={this.state.ingredientAmount} />

                    {/*<DropdownMenu style={{}} items={this.state.units} />*/}

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />

            </View>
        )
    }

    renderIngredient1 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch1: text})}
                    onItemSelect={(item) => this.setState({ingredient1: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount1 => this.setState({ ingredientAmount1 })}
                    value={this.state.ingredientAmount1}
                />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit1: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />

            </View>
        )
    }

    renderIngredient2 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch2: text})}
                    onItemSelect={(item) => this.setState({ingredient2: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount2 => this.setState({ ingredientAmount2 })}
                    value={this.state.ingredientAmount2} />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit2: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />
            </View>
        )
    }

    renderIngredient3 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch3: text})}
                    onItemSelect={(item) => this.setState({ingredient3: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount3 => this.setState({ ingredientAmount3 })}
                    value={this.state.ingredientAmount3} />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit3: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />
            </View>
        )
    }

    renderIngredient4 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch4: text})}
                    onItemSelect={(item) => this.setState({ingredient4: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount4 => this.setState({ ingredientAmount4 })}
                    value={this.state.ingredientAmount4} />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit4: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />
            </View>
        )
    }

    renderIngredient5 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch5: text})}
                    onItemSelect={(item) => this.setState({ingredient5: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount5 => this.setState({ ingredientAmount5 })}
                    value={this.state.ingredientAmount5} />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit5: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />
            </View>
        )
    }

    renderIngredient6 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch6: text})}
                    onItemSelect={(item) => this.setState({ingredient6: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount6 => this.setState({ ingredientAmount6 })}
                    value={this.state.ingredientAmount6} />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit6: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />
            </View>
        )
    }

    addMore = () => {
        let newValue = {value: this.state.value}

        this.setState({valueArray: [...this.state.valueArray, newValue]}, () => {
            this.setState({value: this.state.value+1})
        })




    }

    render() {

        let newArray = this.state.valueArray
            .map((item, key) => {
                if (key == 0) return(this.renderIngredient(key))
                if (key == 1) return(this.renderIngredient1(key))
                if (key == 2) return(this.renderIngredient2(key))
                if (key == 3) return(this.renderIngredient3(key))
                if (key == 4) return(this.renderIngredient4(key))
                if (key == 5) return(this.renderIngredient5(key))
                if (key == 6) return(this.renderIngredient6(key))

            })

        return (
            <View>
                <Modal visible={this.state.visible}
                       onRequestClose={() => {
                           this.setModalVisible(!this.state.visible);
                       }}
                >
                    <Fragment>
                        <View style={{marginTop: 10, fontSize: 25, color: "#698D3F", fontFamily:'Roboto-Black', marginLeft: '10%'}}>
                        <Text>Add Drink</Text>
                        <TextInput
                        // style={styles.textInput}
                        Style={styles.input}
                        autoCapitalize="none"
                        placeholder="miten tätä muokataan??????"
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name}/>
                    <TextInput
                        Style={styles.input}
                        autoCapitalize="none"
                        placeholder="Instructions"
                        onChangeText={instructions => this.setState({ instructions })}
                        value={this.state.instructions}
                    />
                    </View>
                    {newArray}

<View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft:'10%', marginRight:'10%',}}>
                        <TouchableHighlight
                            onPress={this.addMore}>
                            <Text style={styles.buttonStyle}>{"\n"}Add Ingredient</Text>
                        </TouchableHighlight>

                        <TouchableOpacity onPress={this.send}>
                            <Text style={styles.buttonStyle}>{"\n"} Add Drink</Text>
                        </TouchableOpacity>

                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.visible);
                            }}>
                            <Text style={styles.buttonStyle}>{"\n"}Close Drink</Text>
                        </TouchableHighlight>

                    </View>
</View>
                    </Fragment>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Add Drink 4</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 1,
        backgroundColor: 'white',
        color: '#424242',
        width: '70%',
        fontFamily: 'Roboto-Black',
        marginLeft: '20%',
    },
    buttonStyle: {
        justifyContent: 'center',
        backgroundColor: '#B2C8D4',
        // borderWidth: 3,
        borderRadius: 80/ 2,
        // borderColor: '#E6C2BF',
        color: 'white',
        fontFamily: 'Roboto-Black',
        fontSize: 14,
        padding: 5,
        textAlign:'center',
        fontWeight: 'bold',
        width: 80,
        height: 80,
        elevation: 5,
        position: 'relative',
    },
    itemStyle: {
        padding: 10,
        marginTop: 2,
        backgroundColor: '#ddd',
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius:5
    },
    itemTextStyle: {
        color: '#222'
    },
    itemsContainerStyle: {
        maxHeight: 140
    },

});


export default AddDrink;