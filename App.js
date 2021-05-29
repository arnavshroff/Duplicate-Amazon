import *as React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import MyAccount from './screens/MyAccount'
import Furnitures from './products/Furnitures'
import Groceries from './products/Groceries'
import Plants from './products/Plants'
import Clothing from './products/Clothing'
import AllInOne from './items/AllInOne'
import ProductDescription from './items/ProductDescription'
import Images from './items/Images' 
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import Notification from './screens/Notification'    
// import Cart from './screens/Cart'

 
export default class App extends React.Component{
  render(){ 
  return (
    <AppContainer/>  
  );
} 
}
 

const switchNavigator = createSwitchNavigator({
  
  Screen1:{screen: LoginScreen},
  Screen2:{screen: MyAccount},
  ProductDescription:{screen:ProductDescription},
  // Cart:{screen:Cart},
  
  Clothing:{screen: Clothing},
  Drawer:{screen: AppDrawerNavigator},
  Images:{screen: Images},
  AllInOne:{screen:AllInOne},  
  Groceries:{screen: Groceries},
  Furnitures: {screen: Furnitures},
  Screen3: {screen: RegisterScreen},
  Plants:{screen: Plants},
  Notification:{screen:Notification}
  
  
})

const AppContainer =  createAppContainer(switchNavigator);