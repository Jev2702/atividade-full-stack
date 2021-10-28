import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Header from '../../Componentes/Header'
import Button from '../../Componentes/Button';
import TextInput from '../../Componentes/TextInput';
import { theme } from '../../Utils/Theme';
import styles from './Styles'
import Icon from "react-native-vector-icons/Ionicons";
import { login } from '../../Utils/Auth';

const Login = ({ navigation }) => {
  const [usuario, setUsuario] = useState('bling');
  const [senha, setSenha] = useState('bling');
  const [senhaInvisivel, setSenhaInvisivel] = useState(true)
  const [eye, setEye] = useState("eye-off-outline")
  const _setUsuario = (value) => {
    setUsuario(value)
  }
  const _setSenha = (value) => {
    setSenha(value)
  }
  const _setInvisible = () => {
    setEye(senhaInvisivel ? "eye-outline" : "eye-off-outline")
    setSenhaInvisivel(!senhaInvisivel)
  }
  const _login = async () => {
    try {
      if (usuario === "" || !usuario || senha === ""|| !senha) {
        alert("Todos os campos devem estar preenchidos!")
      }
      else 
      {
        let user = await login(usuario, senha);    
          
        navigation.navigate('Todo')
        
      }

    } catch (error) {
      alert(error.msg)
    } 
  }
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.container}>
          <Header>Bem vindo!</Header>
          <Icon
            size={100}
            color={"#FFCC0A"}
            name={"ios-list-sharp"}
          />
          <Header>Todo Tarefas Diarias!</Header>
          <TextInput
            label="Usário"
            returnKeyType="next"
            value={usuario}
            onChangeText={_setUsuario}
            autoCapitalize="none"

          />
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TextInput
              style={{ width: "91%", alignSelf: "flex-end" }}
              label="Senha"
              returnKeyType="done"
              value={senha}
              onChangeText={_setSenha}
              keyboardType="ascii-capable"
              secureTextEntry={senhaInvisivel}
            />
            <TouchableOpacity
              style={{
                padding: 5,
                marginHorizontal: 10,
                alignSelf: 'center'
              }}
              onPress={_setInvisible}
            >
              <Icon
                size={25}
                color={"#FFCC0A"}
                name={eye}
              />
            </TouchableOpacity>
          </View>


          <Button
            mode="contained"
            color="#FFCC0A"
            onPress={_login}
          >
            <Text style={{ color: theme.colors.backGround }}>Login</Text>
          </Button>
        </View>
      </ScrollView >
    </SafeAreaView >
  );
}

export default Login