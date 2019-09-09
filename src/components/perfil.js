import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons'

class Perfil extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Início',
        tabBarIcon: ({ focused }) => {
            let color = focused ? '#000000' : '#BBBBBB'
            return <Icons name='account-circle' size={24} color={color} />
        },
        title: 'Perfil'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Bem-vindo ao Perfil</Text>
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

export default Perfil