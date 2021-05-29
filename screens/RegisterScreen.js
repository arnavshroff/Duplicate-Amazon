import *as React from 'react';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Image,ScrollView} from 'react-native'
import * as firebase from 'firebase'
import db from '../config'

export default class RegisterScreen extends React.Component{
  constructor(){
super();
this.state={
  phone:"",
  password:"",
  name:"",
  email:"",
}
}
updateFirestore2=()=>{
  console.log("Function is Working")
   db.collection("users").doc(this.state.email).set({

        'name': this.state.name,
        'phone' : this.state.phone,
        'email' : this.state.email,
        'password' : this.state.password,
      })
}

  render(){
  return (
    <View style={{justifyContent:'center',backgroundColor:'#feeb75'}}>
    <ScrollView>
    <Image 
    style={{alignSelf:'center',width:150,height:100}}
    source={{uri:'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png'}}/>
    <View style={{borderRadius:0,borderWidth:2,backgroundColor:'#fcf4a3'}}>
    <Text style={{textAlign:'center',fontSize:30,marginTop:20}}>Create Account</Text>
    <TextInput 
	      placeholder="Enter Your Name"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            name: text
	                        })
	                    }}
	                    placeholderTextColor='red'
	                    value={this.state.name}
	                    style={styles.inputBox}/>
    <TextInput 
	      placeholder="Enter Your Email_Id"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            email: text
	                        })
	                    }}
	                    placeholderTextColor='red'
	                    value={this.state.email}
	                    style={styles.inputBox}/>
    <TextInput 
	      placeholder="Enter Your Phone Number"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            phone: text
	                        })
	                    }}
	                    placeholderTextColor='red'
	                    value={this.state.phone}
	                    style={styles.inputBox}/>
    <TextInput 
	      placeholder="Enter Password"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            password: text
	                        })
	                    }}
                      secureTextEntry={true}
	                    placeholderTextColor='red'
	                    value={this.state.password}
	                    style={styles.inputBox}/>
      <TouchableOpacity 
      style={{borderRadius:10,borderWidth:2,alignSelf:'center',marginTop:30,backgroundColor:'gold',marginBottom:20}}
     onPress={this.updateFirestore2}>
      <Text style={{textAlign:'center',fontSize:25,marginLeft:45,marginRight:45}}>Register</Text>
      </TouchableOpacity>

      
      </View>
      <Text style={{textAlign:'center',marginTop:20,fontSize:20}}>Want To Go Back?</Text>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Screen1')}>
      <Text style={{textAlign:'center',fontSize:20,marginLeft:45,marginRight:45,color:'blue',fontWeight:'bold',marginBottom:13,marginTop:10}}>Go Back</Text>
      </TouchableOpacity>
      </ScrollView>
      </View>
  );
}
}
const styles = StyleSheet.create({

  inputBox:{
    width:'70%',
    height:40,
    borderBottomWidth:3,
    borderRadius:10,
    margin:10,
    alignSelf:'center',
    textAlign:'center'
  }
});
