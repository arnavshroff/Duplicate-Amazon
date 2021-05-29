import *as React from 'react';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Image,ScrollView} from 'react-native'
import * as firebase from 'firebase'
import db from '../config'


export default class LoginScreen extends React.Component{
constructor(){
super();
this.state={
  email:"",
  password:""
}
}
goToMyAccount=()=>{
  this.props.navigation.navigate("Screen2",{aeroplane:this.state.email})
}
retreivefirestore1=()=>{
  var docRef = db.collection("users").doc(this.state.email);

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
         this.state.password ===  doc.data().password ? this.goToMyAccount()  :alert("Invalid Credential(s)")
    } else {
        // doc.data() will be undefined in this case
        
        
        alert("Invalid Credential(s)!") 
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

}

  render(){
  return (
    <View style={{justifyContent:'center',backgroundColor:'#feeb75'}}>
    <ScrollView>
    <Image 
    style={{alignSelf:'center',width:150,height:100}}
    source={{uri:'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png'}}/>
    <View style={{borderRadius:0,borderWidth:2,backgroundColor:'#fcf4a3'}}>
    <Text style={{textAlign:'center',fontSize:30,marginTop:20}}>Already A User?</Text>
    <Text style={{textAlign:'center',fontSize:20,marginTop:5,marginBottom:20}}>Sign In</Text>
    <TextInput 
	      placeholder="Enter Your Email"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            email: text
	                        })
	                    }}
	                    placeholderTextColor='red'
	                    value={this.state.email}
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
        onPress={this.retreivefirestore1}>
      <Text style={{textAlign:'center',fontSize:25,marginLeft:45,marginRight:45}}>Sign In</Text>
      </TouchableOpacity>

      
    </View>
    <Text style={{textAlign:'center',marginTop:20,fontSize:20}}>New To Amazon?</Text>
    <TouchableOpacity 
        onPress={()=>this.props.navigation.navigate('Screen3')}>
      <Text style={{textAlign:'center',fontSize:20,marginLeft:45,marginRight:45,color:'blue',fontWeight:'bold',marginBottom:13,marginTop:10}}>Sign Up</Text>
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
