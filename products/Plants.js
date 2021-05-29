import React, { Component } from 'react';  
import { AppRegistry, SectionList, StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';  
  
export default class SectionListBasics extends Component {  
    render() {  
        return (  
            <View style={styles.container}>  
            <View style={{backgroundColor:"#59788e",height:40}}>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('Screen2')}> 
            <Image 
    style={{alignSelf:'center',width:100,height:80,marginTop:-20}}
    source={{uri:'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png'}}/>
            
            </TouchableOpacity>
            </View>
                <SectionList  
                    sections={[  
                        {title: 'Wooden', data: ['almirahs','tables','ACTION U.S.A.','AMUCK','ANGUISH']},  
                        {title: 'steel', data: ['BEST MEN','BEYOND JUSTICE','BLACK GUNN','BLOOD RANCH','BEASTIES']},  
                        {title: 'bamboo', data: ['CARTEL', 'CASTLE OF EVIL', 'CHANCE', 'COP GAME', 'CROSS FIRE',]},  
                    ]}  
                    renderItem={({item}) => <TouchableOpacity><Text style={styles.item}>{item}</Text></TouchableOpacity>}  
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}  
                    keyExtractor={(item, index) => index}  
                />  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: "gold"  
    },  
    sectionHeader: {  
        paddingTop: 2,  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingBottom: 2,  
        fontSize: 22,  
        fontWeight: 'bold',  
        color: "#fff",  
        backgroundColor: '#8fb1aa',  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    }  
})  