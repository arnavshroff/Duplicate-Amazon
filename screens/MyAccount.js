import *as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Picker,ScrollView,Image} from 'react-native'
import { Header,Icon,Badge } from 'react-native-elements';
import * as firebase from 'firebase'
import db from '../config'
import Notification from './Notification'


export default class MyAccount extends React.Component{
  constructor(){
    super()
    this.state = {
      name:"",
      language:"",
      iD:'',
      collection:''
    }
  }
  retreivefirestore2=(name)=>{
  var docRef = db.collection("users").doc(name);

docRef.get().then((doc) => {
    if (doc.exists) { 
        console.log("Document data:", doc.data().name);
        this.setState({name:doc.data().name})

        

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
}); 

}
    componentDidMount(){
    var token=this.props.navigation.getParam('aeroplane')
    var yoken=this.props.navigation.getParam('car')
    var hoken=this.props.navigation.getParam('cycle')
    this.vehicle(yoken,hoken)
    this.retreivefirestore2(token)
    console.log(this.state.iD)
   }
   vehicle=async(bowl,bowl2)=>{
     await this.setState({iD:bowl})
     await this.setState({collection:bowl2})
   }
  render(){
  return (
    <View style={{backgroundColor:'#fcf4a3'}}>
    <View style={{backgroundColor:'#feeb75',height:160}}>
    <Image 
    style={{alignSelf:'center',width:100,height:80,marginTop:-20}}
    source={{uri:'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png'}}/>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Cart',{aeroplane:this.state.name,car:this.state.iD,bike:this.state.language,cycle:this.state.collection})}>
    <Image 
    style={{width:30,height:20,marginTop:-55,marginLeft:295}}
    source={{uri:'https://www.pinclipart.com/picdir/big/140-1402959_white-shopping-cart-icon-amazon-shopping-cart-icon.png'}}/>
    </TouchableOpacity>

    <TouchableOpacity style={{width:30,height:20,marginTop:-70,marginLeft:5,marginBottom:50}}
    onPress={()=>this.props.navigation.toggleDrawer()}>
    <Text style={{fontWeight:'bold',fontSize:30}}>≡</Text>
    </TouchableOpacity>


   
    
    <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Hello {this.state.name}</Text>
    
     <View style={styles.picker}> 
          <Picker selectedValue={this.state.language} onValueChange={(lang) => this.setState({language: lang})} >
           <Picker.Item label="Choose product" /> 
           <Picker.Item label="Groceries" value="Groceries" /> 
           <Picker.Item label="Plants" value="Plants" /> 
           <Picker.Item label="Furnitures" value="Furnitures" /> 
           <Picker.Item label="Clothing" value="Clothing" /> 
           </Picker> 
           </View>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate(this.state.language,{aeroplane:this.state.name})}
           style={{marginLeft:'80%',marginTop:-39}}><Text style={{fontSize:30}}
           >🔍 </Text></TouchableOpacity>
           </View>
           <ScrollView 
    horizontal={true} 
    showsHorizontalScrollIndicator={false}
    automaticallyAdjustContentInsets={true}
    style={{marginTop:10}}>

 <TouchableOpacity style={{marginLeft:'2%'}}>
 <Image 
 style={{width:50,height:50,borderRadius:100,borderWidth:2,marginLeft:'-2%'}}
 source={{uri:'https://clipartion.com/wp-content/uploads/2015/11/food-drive-donations-clipart-free-clip-art-images-830x675.gif'}}/>
 <Text style={styles.scrollViewText}>Pantry</Text></TouchableOpacity>

<TouchableOpacity style={{marginLeft:'5%'}}>
<Image 
 style={{width:50,height:50,borderRadius:100,borderWidth:2,marginLeft:'9%'}}
 source={{uri:'https://www.pinclipart.com/picdir/big/553-5530827_mobile-madness-icon-cell-phone-image-animated-clipart.png'}}/>
<Text style={styles.scrollViewText}>Mobiles</Text></TouchableOpacity>

<TouchableOpacity style={{marginLeft:'5%'}}>
<Image 
 style={{width:50,height:50,borderRadius:100,borderWidth:2,marginLeft:'9%'}}
 source={{uri:'https://cdn2.iconfinder.com/data/icons/vacation-34/64/hat-beach-women-fashion-summer-512.png'}}/>
<Text style={styles.scrollViewText}>Fashion</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft:'5%'}}>
<Image 
 style={{width:50,height:50,borderRadius:100,borderWidth:2,marginLeft:'15%'}}
 source={{uri:'https://cdn3.iconfinder.com/data/icons/home-appliance-indigo-vol-2/256/Webcam-512.png'}}/>
<Text style={styles.scrollViewText}>Appliances</Text></TouchableOpacity>

<TouchableOpacity style={{marginLeft:'2%'}}>
<Image 
 style={{width:50,height:50,borderRadius:100,borderWidth:2,marginLeft:'9%'}}
 source={{uri:'https://icons-for-free.com/iconfiles/png/512/electronics-131964752714885009.png'}}/>
<Text style={styles.scrollViewText}>Electronics</Text></TouchableOpacity>

<TouchableOpacity style={{marginLeft:'2%'}}>
<Image 
 style={{width:50,height:50,borderRadius:100,borderWidth:2,marginLeft:'9%'}}
 source={{uri:'https://play-lh.googleusercontent.com/WEWxcnFGaoYz_iSv6ltPuT6Wv5ptaAKbWwnsHcnVBQ5UtAumLrAvPZU1uFHoKQYzIQ=s180'}}/>
<Text style={styles.scrollViewText}>FunZone</Text></TouchableOpacity>

<TouchableOpacity style={{marginLeft:'5%'}}>
<Image 
 style={{width:50,height:50,borderRadius:100,borderWidth:2,marginLeft:'9%'}}
 source={{uri:'https://img.icons8.com/clouds/2x/literature.png'}}/>
<Text style={styles.scrollViewText}>EBooks</Text></TouchableOpacity>


</ScrollView>
 

 <Notification></Notification>
    </View>
  );
}
}
const styles = StyleSheet.create({
    picker:{ 
    borderWidth:2,
    width:"50%", 
    alignSelf:"center",
    marginTop:20
    },
    scrollViewText:{
      fontWeight:"bold",
      color:'black'
    }
});
