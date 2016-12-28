import {
  AppRegistry
} from 'react-native';

var UIManager = require('react-native/lib/UIManager');


// HeapCapture.captureHeap("./data");
AppRegistry.registerComponent('HelloWorld', (initialProps: Props, rootTag: any) => {
  UIManager.createView(2, "RCTText", rootTag, {height: 100, backgroundColor: -65536});
  UIManager.createView(3, "RCTRawText", rootTag, {"text":"HelloWorld"});
  UIManager.setChildren(2, [3]);
  UIManager.setChildren(1, [2]);
});
