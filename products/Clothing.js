import React, { Component } from 'react';  
import { AppRegistry, SectionList, StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';  
  
export default class SectionListBasics extends Component {
  constructor(){
super();
this.state={
  name:""
 
 
}
}


componentDidMount(){
  var token=this.props.navigation.getParam('aeroplane')
   

  this.airport(token) 
}

airport=async(bowl)=>{
  await this.setState({name:bowl})

}  
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
                        {title: 'Mens Wear', data: ['Jackets','Shirts & Pants','Jeans & T-Shirts','Suits','Sweaters','Cardigans']},  
                        {title: 'Womens Wear', data: ['Lehangas','Saris','Kurtis','Skirts','Frocks','Jeans & Tops']},  
                        {title: 'Kids Wear', data: ['Dungarees', 'Frocks', 'Jeans and T-shirts', 'Pants & Shirts', 'Kurtas & Pajamas','Jackets']},  
                    ]}  
                    renderItem={({item}) => <TouchableOpacity onPress={()=>this.props.navigation.navigate('AllInOne',{aeroplane:item,heli:'Clothing',airindia:this.state.name})}><Text style={styles.item}>{item}</Text></TouchableOpacity>}  
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
        backgroundColor: "darkturquoise"  
    },  
    sectionHeader: {  
        paddingTop: 2,  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingBottom: 2,  
        fontSize: 22,  
        fontWeight: 'bold',  
        color: "#fff",  
        backgroundColor: 'navy',  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,
        fontWeight:'bold' 
    }  
})  