// import *as React from 'react';
// import {View,Text,TouchableOpacity,Image} from 'react-native'

// import * as firebase from 'firebase'
// import db from '../config'

// export default class App extends React.Component{
//    constructor(){
// super();
// this.state={
//   name:"",
//   product:'',
//   image:'',
//   iD:'',
//   language:'',
//   brand:'',
//   size:'',
//   price:'',
//   collection:''
 
// }
// }


//  retreivefirestore2=()=>{
//   var docRef = db.collection("users").doc(this.state.name);

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data().requests.Product);
//   this.setState({product:doc.data().requests.Product})
//   this.setState({image:doc.data().requests.Image})
//     } else {
        
//         console.log(this.state.name)
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });

// }
//  retreivefirestore=()=>{  
//   var docRef = db.collection(this.state.collection).doc(this.state.iD);

// docRef.get().then((doc) => {
//     if (doc.exists) {
//   this.setState({brand:doc.data().Brand})
//   this.setState({size:doc.data().Size})
//   this.setState({price:doc.data().Price})
//     } else {
//         console.log(this.state.collection)
//         console.log(this.state.name)
//         console.log("No such document!"); 
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// }); 

// }
// componentDidMount(){
//   var token=this.props.navigation.getParam('aeroplane')
//    var poken=this.props.navigation.getParam('car')
//   var loken=this.props.navigation.getParam('bike')
//   var zoken=this.props.navigation.getParam('cycle')
//   this.airport(token,poken,loken,zoken) 
// }

// airport=async(bowl,bowl2,bowl3,bowl4)=>{
//   await this.setState({name:bowl})
//   await this.setState({iD:bowl2})
//   await this.setState({language:bowl3})
//   await this.setState({collection:bowl4})
//   this.retreivefirestore2()
//   this.retreivefirestore()
// } 
//   render(){
//   return (
//     <View style={{justifyContent:'center',backgroundColor:'#feeb75'}}>
//     <View style={{borderRadius:10,borderWidth:2,margin:5}}>
//     <TouchableOpacity >
//               <Text style={{ fontWeight: 'bold',marginTop:10}}>
//                 {' '}
//                 Product : {this.state.product}
//               </Text>  
//               <Text style={{ fontWeight: 'bold',marginTop:5}}>
//                 {' '}
//                 Brand : {this.state.brand}
//               </Text> 
//               <Text style={{ fontWeight: 'bold',marginTop:5}}>
//                 {' '}
//                 Size : {this.state.size}
//               </Text> 
//               <Text style={{ fontWeight: 'bold',marginTop:5}}>
//                 {' '}
//                 Price : {this.state.price} 
//               </Text> 
//               <Image
//                 source={this.state.image}
//                 style={{ 
//                   marginTop: -20,
//                   width: 100,
//                   height: 120, 
//                   marginLeft: 200,
//                 }}
//               /> 
//               </TouchableOpacity>
//     </View>
//     </View>
//   );
//   }
// }