import React, {Component} from 'react';
import {Image} from "react-native-elements";

class Index extends Component {

    onHamburgerClick() {
        this.props.toggleDrawer();
    }
    render() {
        return (
          <View style={styles.viewStyle}>
             <View>
                 <TouchableOpacity onPress={this.onHamburgerClick}>
                     <Image
                     style={styles.menuStyle}
                     source={menu}
                     />
                 </TouchableOpacity>
             </View>
              <Text style={styles.textStyle}>
                  {this.props.title}
              </Text>
              <View>
                  <Image
                  style={styles.cartStyle}
                  source={cart}
                  />
              </View>
          </View>
        );
    }
}

export default Index;