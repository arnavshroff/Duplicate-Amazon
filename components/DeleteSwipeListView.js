import React, { Component } from 'react';
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
import db from '../config'
import * as firebase from 'firebase'


import { SwipeListView } from 'react-native-swipe-list-view';

class DeleteSwipeListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listType: 'FlatList',
            listViewData: Array(20)
                .fill('')
                .map((_, i) => ({ key: `${i}`, text: `${i}` })),
        };
        this.rowTranslateAnimatedValues = {};
        Array(20).fill('').forEach((_, i) => {
            this.rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
        });
    }

    closeRow(rowMap, rowKey) {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    }

    deleteRow(rowMap, rowKey) {
        this.closeRow(rowMap, rowKey);
        const newData = [...this.state.listViewData];
        const prevIndex = this.state.listViewData.findIndex(
            item => item.key === rowKey
        );
        newData.splice(prevIndex, 1);
        this.setState({ listViewData: newData });
    }


retreivefirestore2=(document)=>{
  var docRef = db.collection("Notifications").doc(document);
  console.log(document)

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data().product);
        console.log("Document data:", doc.data().message);
        alert(doc.data().product+", "+ doc.data().message)

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

}

    onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };


    onSwipeValueChange = swipeData => {
        const { dimensions } = this.props;
        const { key, value } = swipeData;
        if (value < -dimensions.width && !this.animationIsRunning) {
            this.animationIsRunning = true;
            Animated.timing(this.rowTranslateAnimatedValues[key], { toValue: 0, duration: 200 }).start(() => {
                const newData = [...this.state.listViewData];
                const prevIndex = this.state.listViewData.findIndex(item => item.key === key);
                newData.splice(prevIndex, 1);
                this.setState({listViewData: newData});
                this.animationIsRunning = false;
            });
        }
    };

    getStyles() {
      const { dimensions } = this.props;
      return StyleSheet.create({
          backTextWhite: {
              color: 'white',
              fontWeight:'bold'
          },
          rowFront: {
              alignItems: 'center',
              backgroundColor: '#fee12b',
              borderBottomColor: 'black',
              borderBottomWidth: 3,
              borderTopWidth:3,
              justifyContent: 'center',
              height: 50,
              marginTop:5
          },
          rowBack: {
              alignItems: 'center',
              backgroundColor: '#3cb043',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 15,
          },
          backRightBtn: {
              alignItems: 'center',
              bottom: 0,
              justifyContent: 'center',
              position: 'absolute',
              top: 0,
              width: 75,
          },
          backRightBtnLeft: {
              backgroundColor: '#0492c2',
              right: 75,
          },
          backRightBtnRight: {
              backgroundColor: '#e3242b',
              right: 0,
          },
          trash: {
              height: 25,
              width: 25,
          },
      });

    }
    render() {
        const { dimensions } = this.props;
        const styles = this.getStyles();
        return (
          <SwipeListView
              data={this.state.listViewData}
              renderItem={data => (
                  <Animated.View 
                    style={[styles.rowFrontContainer, {
                      height: this.rowTranslateAnimatedValues[data.item.key].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 50],
                    })}]}
                  >
                    <TouchableHighlight
                        onPress={() => this.retreivefirestore2("Notification "+ data.item.text)}
                        style={styles.rowFront}
                        underlayColor={'#AAA'}
                    >
                        <View>
                            <Text style={{fontWeight:'bold',fontFamily:'arialblack',fontSize:20}}>
                                Notification {data.item.text}
                            </Text>
                        </View>
                    </TouchableHighlight>
                  </Animated.View>
              )}
              renderHiddenItem={(data, rowMap) => (
                  <View style={styles.rowBack}>
                      <Text style={{fontWeight:'bold'}}>Left</Text>
                      <TouchableOpacity
                          style={[
                              styles.backRightBtn,
                              styles.backRightBtnLeft,
                          ]}
                          onPress={() =>
                              this.closeRow(rowMap, data.item.key)
                          }
                      >
                          <Text style={styles.backTextWhite}>
                              Close
                          </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={[
                              styles.backRightBtn,
                              styles.backRightBtnRight,
                          ]}
                          onPress={() =>
                              this.deleteRow(rowMap, data.item.key)
                          }
                      >
                          <Animated.View
                              style={[
                                  styles.trash,
                                  {
                                      transform: [
                                          {
                                              scale: this.rowTranslateAnimatedValues[
                                                  data.item.key
                                              ].interpolate({
                                                  inputRange: [
                                                      45,
                                                      90,
                                                  ],
                                                  outputRange: [0, 1],
                                                  extrapolate:
                                                      'clamp',
                                              }),
                                          },
                                      ],
                                  },
                              ]}
                          >
                              <Image
                                  source={require('../assets/snack-icon.png')}
                                  style={styles.trash}
                              />
                          </Animated.View>
                      </TouchableOpacity>
                  </View>
              )}
              leftOpenValue={dimensions.width}
              rightOpenValue={-dimensions.width}
              previewRowKey={'0'}
              previewOpenValue={-40}
              previewOpenDelay={3000}
              onRowDidOpen={this.onRowDidOpen}
              onSwipeValueChange={this.onSwipeValueChange}
          />
        );
    }
}

export default DeleteSwipeListView;