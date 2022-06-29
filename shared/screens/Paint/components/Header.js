import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import IconButton from '../components/IconButton';

class Header extends React.Component {

  render() {
    // console.log(this.props)
    return (
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <Text style={styles.title}>
            Express By Paint
          </Text>

          <TouchableOpacity
    onPress={this.props.cancel}
          >
            <Text style={{color: "#2a50ac" , fontWeight: "600", letterSpacing: 1, borderBottomColor: "#2a50ac", borderBottomWidth: 1, paddingBottom:5 }}>Remove</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.props.undo}
          >
            <Text style={{color: "#2a50ac" , fontWeight: "600", letterSpacing: 1, borderBottomColor: "#2a50ac", borderBottomWidth: 1, paddingBottom:5 }}>Undo</Text>
          </TouchableOpacity>

          <TouchableOpacity
                      onPress={this.props.save}
          >
            <Text style={{color: "#2a50ac" , fontWeight: "600", letterSpacing: 1, borderBottomColor: "#2a50ac", borderBottomWidth: 1, paddingBottom:5 }}>Save</Text>
          </TouchableOpacity>
    
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EEE',
    // paddingTop: 18,
    paddingBottom: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: "13%",
   
    
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 3,
    alignItems: "center",
    backgroundColor: "transparent",
    width: "95%",
    borderRadius: 10,
    padding: 10,
   
    
  },

  title: {
    color: '#444',
    fontSize: 16,
    fontWeight: '800',
    marginRight: 20,
    color: "#3a86ff",
    // backgroundColor: "red",
    flexWrap: "wrap",
    width: "35%",
    height: "25%",
    padding: 5,
    lineHeight: 22
   
    
  }
});

export default Header;
