import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';


export default class Images extends React.Component {

constructor(){
super();
this.state={
  doc:"",
  collection:"",
  description:"",
  imagelink1:'',
 
 
}
}


componentDidMount(){
  var token=this.props.navigation.getParam('heli1')
  var moken=this.props.navigation.getParam('heli2')
  var noken=this.props.navigation.getParam('heli3')
   

  this.man(token,moken,noken) 
}

man=async(bowl,bowl2,bowl3)=>{
  await this.setState({doc:bowl})
  await this.setState({collection:bowl2})
  await this.setState({imagelink1:bowl3})

}
 
render() {

    return (
      <View> 
      
       <Image  
	          source={this.state.imagelink1}
	          style={{width:"100%", height:504}}

	        /> 
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDescription',{airindia:this.state.collection,aeroPlane:this.state.doc})}>
          <Image 
          source={{uri:'https://cdn.pixabay.com/photo/2016/09/23/14/42/back-1689836_960_720.png'}}
          style={{marginTop:-500,width:55,height:50,marginLeft:10}}/>
          </TouchableOpacity>
         </View>

    )

}

}