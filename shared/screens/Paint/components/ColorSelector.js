import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

class ColorSelector extends React.Component {

  _renderOptions() {
    const allColors = Object.keys(Colors);

    return allColors.map(color => (
      <TouchableOpacity
        key={color}
        style={[styles.option, { backgroundColor: Colors[color] }]}
        onPress={() => this.props.onPress(Colors[color])}
      />
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderOptions()}
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "92%",
    marginLeft: "4%",
    borderRadius: 10,
    alignItems: "center",
    marginTop: "5%",
    height: "auto",
    shadowColor: "#80868b",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity:  0.19,
    shadowRadius: 5.62,
    elevation: 6,
    paddingTop: 14,
  },

  option: {
    width: 23,
    height: 23,
    borderRadius: 10,
    marginVertical: 4,
    marginHorizontal: 10
  }
});

export default ColorSelector;
