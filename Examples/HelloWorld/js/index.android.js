import {
  AppRegistry
} from 'react-native';

import {simpleText,SimpleFetch} from './showcases';



AppRegistry.registerComponent('HelloWorld', (initialProps: Props, rootTag: any) => {

  SimpleFetch(initialProps,rootTag);

});
