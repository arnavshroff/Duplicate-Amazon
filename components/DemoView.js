import React, { useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
 
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

import DeleteSwipeListView from './DeleteSwipeListView';

function DemoView(props) {
  const { dimensions } = props;
  const [listType, setListType] = useState('FlatList');
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#effd57',
      flexGrow: 1,
    },
    standalone: {
      marginTop: 30,
      marginBottom: 30,
    },
    standaloneRowFront: {
      alignItems: 'center',
      backgroundColor: '#3ded97',
      justifyContent: 'center',
      height: 50,
      borderRadius:10,
      borderWidth:2
    },
    standaloneRowBack: {
      alignItems: 'center',
      backgroundColor: 'purple',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      
    },
    backTextWhite: {
      color: '#FFF',
      
    },
    controls: {
      alignItems: 'center',
      marginBottom: 30,
      
      
    },
    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 5,
      
      
    },
    switch: {
      alignItems: 'center',
      borderWidth: 3,
      borderColor: 'black',
      paddingVertical: 10,
      width: dimensions.width / 4.3,
      
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.standalone}>
        <SwipeRow leftOpenValue={75} rightOpenValue={-75}>
          <View style={styles.standaloneRowBack}>
            <Text style={styles.backTextWhite}>Left</Text>
            <Text style={styles.backTextWhite}>Right</Text>
          </View>
          <View style={styles.standaloneRowFront}>
            <Text style={{ fontFamily: 'algerian', fontSize: 20,fontWeight:'bold' }}>
              Check notifications here
            </Text>
          </View> 
        </SwipeRow>
      </View>

      <View style={styles.controls}>
        <View style={styles.switchContainer}>
          {['Delete'].map((type) => (
            <TouchableOpacity 
              key={type} 
              style={[
                styles.switch,
                {
                  backgroundColor: listType === type ? '#fe7d6a' : '#fc4c4e',
                  
                },
              ]}
              onPress={() => setListType(type)}>
              <Text style={{fontWeight:'bold'}}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {listType === 'Advanced' && <Text>(per row behavior)</Text>}
      </View>
      {listType === 'Delete' && <DeleteSwipeListView dimensions={dimensions} />}
    </View>
  );
}

export default DemoView;
