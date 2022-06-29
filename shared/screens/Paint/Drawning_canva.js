


import React from 'react';
import { Dimensions, View,
         Text, StyleSheet } from 'react-native';
// import { takeSnapshotAsync } from 'exponent';
import Colors from './constants/Colors';
import SignatureView from './components/SignatureView';
import Header from './components/Header';
import ColorSelector from './components/ColorSelector';
import ResultImages from './components/ResultImages';
// interface States {
//   results: Array<any>,
//   color: any,
//   strokeWidth: 4,
//   donePaths: Array<any>

// }
export default class SignatureScreen extends React.Component  {
  constructor(props, context) {
    super(props, context);

    this.state = {
      results: [],
      color: Colors.color16,
      strokeWidth: 4,
      donePaths: []
    };

    this._undo = this._undo.bind(this);
    this._setDonePaths = this._setDonePaths.bind(this);
  }

  _cancel = () => {
    this.setState({ donePaths: [] });

  }

  _undo = () => {
    this.setState({ donePaths: this.state.donePaths.slice(0, -1) });
  }

  _save = async () => {
    const result = await takeSnapshotAsync(
      this._signatureView,
      { format: 'png', result: 'base64', quality: 1.0 }
    );

    const results = this.state.results;
    results.push(result);

    this.setState({ results });
  }

  _setDonePaths = (donePaths) => {
    this.setState({ donePaths });
  }

  _changeColor = (color) => {
    this.setState({ color });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          save={this._save}
          undo={this._undo}
          cancel={this._cancel}
         
        />

        <ColorSelector onPress={this._changeColor} />

        <View style={{ alignItems: 'center' }}>
          <SignatureView
            ref={(view) => { this._signatureView = view; }}
            donePaths={this.state.donePaths}
            setDonePaths={this._setDonePaths}
            containerStyle={{ backgroundColor: '#FFF', marginTop: 10, borderRadius: 10}}
            width={Dimensions.get('window').width - 40}
            height={Dimensions.get('window').width+5}
            color={this.state.color}
            strokeWidth={this.state.strokeWidth}
          />
        </View>

        <ResultImages images={this.state.results} />

      
      </View>
    );
  }
}

SignatureView.route = {
  navigationBar: {
    visible: false
  }
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
  },

  footer: {
    color: '#555',
    fontSize: 12,
    position: 'absolute',
    bottom: 5,
    right: 10
  }
});