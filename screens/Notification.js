import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import DemoView from '../components/DemoView'

export default class Notification extends React.Component {
  render() {
    return (
      
        <DemoView 
          dimensions={Dimensions.get('window')}
        />
    );
  }
}
