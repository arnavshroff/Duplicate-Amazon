
import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TextInput,Image,ScrollView } from 'react-native';
import * as firebase from 'firebase'
import db from '../config'

export default class ProductDescription extends React.Component {


constructor(){
super();
this.state={
  doc:"",
  collection:"",
  description:"",
  imagelink:'',
imagelink1:'',
imagelink2:'',
imagelink3:'',
imagelink4:'',
iD:'',
productName:'',
name:''
 
 
}
}
updateFirestore3=()=>{
  console.log(this.state.name)
   db.collection("users").doc(this.state.name).update({
          CartItems: {
    'ID': this.state.iD,
    'Image':this.state.imagelink,
    'Product':this.state.productName
  }
       
      })
}

updateFirestore2=()=>{
  console.log("Function is Working")
   db.collection(this.state.language).doc(this.state.iD).set({
        'ID' : this.state.iD,
        'link':this.state.imagelink,
        'link1':this.state.imagelink1,
        'link2':this.state.imagelink2,
        'link3':this.state.imagelink3,
        'link4':this.state.imagelink4
      })
}

 async store(link){
await this.setState({imagelink:'link'})
await this.setState({imagelink1:'link1'})
await this.setState({imagelink2:'link2'})
await this.setState({imagelink3:'link3'})
await this.setState({imagelink4:'link4'})
console.log(this.state.imagelink)
 this.updateFirestore2() 
}

 fetchImage =  (imageName) => {

let imageRef = firebase.storage().ref('j1/' + imageName + ".png");
 imageRef
  .getDownloadURL()
 .then((url) => {
    //from url you can fetched the uploaded image easily
    this.store(url)
  
  })      
  };

 componentDidMount(){
  
  var token=this.props.navigation.getParam('airindia')
  var moken=this.props.navigation.getParam('aeroPlane')
  var joken=this.props.navigation.getParam('helicopter')
  this.man(token,moken,joken) 
  console.log(token+moken+joken)
} 
 
 man=async(bowl,bowl2,bowl3)=>{ 
  await this.setState({doc:bowl}) 
  await this.setState({collection:bowl2})
  await this.setState({name:bowl3})
  this.retreivefirestore2()
}


 retreivefirestore2=()=>{ 
  var docRef = db.collection(this.state.collection).doc(this.state.doc);

  docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data().description);
         this.setState({description:doc.data().description})
        this.setState({imagelink:doc.data().link})
       this.setState({imagelink1:doc.data().link1})
         this.setState({imagelink2:doc.data().link2})
        this.setState({imagelink3:doc.data().link3})
        this.setState({imagelink4:doc.data().link4})
        this.setState({productName:doc.data().Productname})
       
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

}





 
render(){
  return(
    <View style={{backgroundColor: '#feeb75',}}>

 <Image 
    style={{alignSelf:'center',width:100,height:80,marginTop:-20}}
    source={{uri:'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png'}}/>
    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('AllInOne',{aeroplane:this.state.collection,car:this.state.doc})}>

 <Image 
          source={{uri:'https://cdn.pixabay.com/photo/2016/09/23/14/42/back-1689836_960_720.png'}}
          style={{marginTop:20,width:55,height:50,marginLeft:10}}/>
          </TouchableOpacity>
<Text style={{textAlign:'center',fontWeight:'bold',marginTop:20,marginBottom:5,fontSize:20}}> Product - {this.state.productName}</Text>

 

<ScrollView 
    horizontal={true} 
    showsHorizontalScrollIndicator={true}
    automaticallyAdjustContentInsets={true} style={{marginTop:10,marginBottom:10}}>
    <View style={{
    borderWidth: 4,
    borderColor: 'Black',
    backgroundColor: '#fcf4a3',
    flex:1,
    flexDirection:'row'}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Images',{heli1:this.state.collection,heli2:this.state.doc,heli3:this.state.imagelink1})}>
 <Image
	          source={this.state.imagelink1}
	          style={{width:200, height:200,borderRightWidth:4}}

	        />
          </TouchableOpacity>
<TouchableOpacity onPress={()=>this.props.navigation.navigate('Images',{heli1:this.state.collection,heli2:this.state.doc,heli3:this.state.imagelink2})}>
<Image
	          source={this.state.imagelink2}
	          style={{width:200, height:200,marginLeft:4,borderRightWidth:4,borderLeftWidth:4}}
             
	        />  
          </TouchableOpacity>
 
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Images',{heli1:this.state.collection,heli2:this.state.doc,heli3:this.state.imagelink3})}>
<Image
	          source={this.state.imagelink3} 
	          style={{width:200, height:200,marginLeft:4,borderRightWidth:4,borderLeftWidth:4}}
             
	        /> 
 
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Images',{heli1:this.state.collection,heli2:this.state.doc,heli3:this.state.imagelink4})}>
<Image
	          source={this.state.imagelink4} 
	          style={{width:200, height:200,marginLeft:4,borderLeftWidth:4}}
            
	        />
</TouchableOpacity>
</View>
          </ScrollView>

<Text style={{fontWeight:'bold',marginBottom:20}}>Description - {this.state.description}</Text>

<TouchableOpacity style={{borderWidth:4,borderRadius:20,backgroundColor:'gold',width:120,height:50,marginLeft:20,flexDirection:'row',flex:1}}
onPress={this.updateFirestore3}><Text style={{fontWeight:'bold',textAlign:'center',justifyContent:'center',alignSelf:'center',margin:10}}>Add To Cart</Text></TouchableOpacity>

<TouchableOpacity style={{borderWidth:4,borderRadius:20,backgroundColor:'gold',width:120,height:50,marginLeft:170,flexDirection:'row',flex:1,marginTop:-46}}><Text style={{fontWeight:'bold',textAlign:'center',justifyContent:'center',alignSelf:'center',margin:10}}>Buy Product</Text></TouchableOpacity>
</View>
  )
}

} 