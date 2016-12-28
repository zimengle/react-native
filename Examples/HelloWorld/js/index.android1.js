import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';


class App extends Component {
  constructor(){
    super();
    // a.b.c();
  }
  render() {
    return <Text style={{height:20,backgroundColor:"#ff0000"}}>HelloWorld</Text>
  }
}
// HeapCapture.captureHeap("./data");
AppRegistry.registerComponent('HelloWorld', () => App);
