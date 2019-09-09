import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons'

class Home extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Início',
        tabBarIcon: ({focused}) => {
            let color = focused ? '#000000' : '#BBBBBB'
            return <Icons name='home' size={24} color={color}/>
        },  
        title: 'Home'
    }

    render(){
      return (
        <View style={styles.container}>
          <Text>Bem-vindo à Home</Text>
          <Button
          title = 'Perfil' 
          onPress={() => this.props.navigation.navigate("Perfil")}></Button>
        </View>
      )  
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default Home