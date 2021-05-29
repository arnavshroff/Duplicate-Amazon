import React, { Component } from 'react';  
import { AppRegistry, SectionList, StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';  
  
export default class SectionListBasics extends Component {  
    render() {  
        return (  
            <View style={styles.container}> 
            <View style={{backgroundColor:'#feeb75',height:40}}>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('Screen2')}> 
            <Image 
    style={{alignSelf:'center',width:100,height:80,marginTop:-20}}
    source={{uri:'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png'}}/>
            
            </TouchableOpacity>
            </View>
            
                <SectionList  
                    sections={[  
                        {title: 'Wooden Funiture', data: ['Wooden Almirahs','Wooden Beds','Wooden Benches','Wooden Dining Tables & Chairs']},  
                        {title: 'Metalic Furniture', data: ['Metallic Desks','Metallic Stools','Metallic Study Tables','Metalic Office Chairs']},  
                        {title: 'Bamboo Furniture', data: ['Bamboo Chairs', 'Bamboo Tables', 'Bamboo Ottomans', 'Bamboo Sofas',]}, 
                        {title: 'Plastic Furniture', data: ['Plastic Stools', 'Plastic Chairs', 'Plastic Tables', 'Plastic Almirahs']}, 
                        
      
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
        backgroundColor: "#eeceac"  
    },  
    sectionHeader: {  
        paddingTop: 2,  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingBottom: 2,  
        fontSize: 22,  
        fontWeight: 'bold',  
        color: "#fff",  
        backgroundColor: '#704214',  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,
        fontWeight:'bold'  
    }  
})  