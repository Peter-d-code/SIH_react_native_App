import React from 'react';
import { StyleSheet, TouchableOpacity, Pressable,Text } from 'react-native';
// import { FontAwesome } from '@exponent/vector-icons';

class IconButton extends React.Component {
constructor(props){
  super(props);
  this.state = {

  }
}
  render() {
    return (
   <TouchableOpacity>
     <Text>{this.props.name.toUpperCase()}</Text>
   </TouchableOpacity>
    );
  }
}

let styles = StyleSheet.create({
  icon: {
    color: '#999',
    fontSize: 22,
    margin: 5
  }
});

export default IconButton;
