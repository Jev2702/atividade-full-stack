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
import { login, logOut } from '../../Utils/Auth';
import Styles from '../Login/Styles';
import { Checkbox, List } from 'react-native-paper';
import { Tarefa } from '../../Utils/Tarefa';
const Todo = ({ navigation }) => {
    const [tarefas, setTarefas] = useState([]);
    const [tarefa, setTarefa] = useState(null);
    const [textButon, setTextButon] = useState('Novo');
    const [itemSelecionado, setItemSelecionado] = useState({})
    const [erro, setErro] = useState(null)
    const forceUpdate = React.useReducer(() => ({}), {})[1]
    const _setTarefas = () => {
        if (tarefa !== null && tarefa !== "") {
            if (itemSelecionado?.selecionado) {
                var index = tarefas.indexOf(itemSelecionado)
                var tarefasTemp = [...tarefas]
                tarefasTemp[index].nome = tarefa
                setTarefas(tarefasTemp)
            }
            else {
                var max = tarefas.length === 0 ? 0 : tarefas.map(t => t.id).sort((a, b) => a - b)[
                    tarefas.length - 1
                ]

                var _tarefa = new Tarefa(max + 1, tarefa, false, false)
                setTarefas(tarefas => [...tarefas, _tarefa]);
                setTarefa("")
            }
        } else {
            setErro("Informe a tarefa!")
        }
    }


    const _removeTarefa = (item) => {

        var index = tarefas.indexOf(item)
        var tarefasTemp = [...tarefas]
        tarefasTemp.splice(index, 1)
        tarefasTemp.forEach(element => {
            element.editar = false
            element.selecionado = false
        });
        setTextButon('Novo')
        setTarefas(tarefasTemp)
        setItemSelecionado({})
    }

    const _setEditar = (item) => {
        var tarefasTemp = tarefas
        var index = tarefasTemp.indexOf(item)
        tarefasTemp.forEach(element => {
            element.editar = item.id !== element.id ? false : element.editar
            element.selecionado = item.id !== element.id ? false : element.selecionado
        });
        tarefasTemp[index].editar = !tarefasTemp[index].editar
        tarefasTemp[index].selecionado = !tarefasTemp[index].selecionado
        setTarefas(tarefasTemp)
        setTextButon(tarefasTemp[index].editar ? 'Editar' : 'Novo')
        setTarefa(tarefasTemp[index].editar ? item.nome : "")
        setItemSelecionado(tarefasTemp[index])
        forceUpdate()
    }
    const _setTarefa = (tarefa) => {
        setErro("")
        setTarefa(tarefa)
    }
    const _LogOut = async () => {
        try {
            let log = await logOut()
            navigation.navigate('Login')
        } catch (error) {
            alert(error.msg)
        }
    }
    return (
        <SafeAreaView style={styles.background}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.container}>
                    <Header>Todo APP!</Header>
                    <Text style={{ ...Styles.label }}>App para gerenciamento de tarefas do dia a dia</Text>
                    <Button
                        mode="contained"
                        color="#FFCC0A"
                        onPress={_LogOut}
                    >
                        <Text style={{ color: theme.colors.backGround }}>LogOut</Text>
                    </Button>
                    <Header>Todo Tarefas Diarias!</Header>

                </View>
                <List.Section style={{ backgroundColor: 'white', width: '80%', alignSelf: "center" }}>
                    <List.Subheader>Lista de tarefas</List.Subheader>
                    {tarefas.map((item, index) => {
                        return (
                            <List.Item
                                key={index}
                                title={item.nome}
                                left={() =>
                                    <Checkbox
                                        status={item.editar ? 'checked' : 'unchecked'}
                                        onPress={() => _setEditar(item)
                                        }
                                    />
                                }
                                right={() =>
                                    <TouchableOpacity
                                        onPress={() => _removeTarefa(item)}
                                    >
                                        <Icon
                                            size={25}
                                            name={"trash"}
                                        />
                                    </TouchableOpacity>}
                            />
                        )
                    })}

                </List.Section>
                <View style={styles.container}>
                    <TextInput
                        label="Tarefa"
                        returnKeyType="next"
                        value={tarefa}
                        onChangeText={_setTarefa}
                        autoCapitalize="none"

                    />
                    <Button
                        mode="contained"
                        color="#FFCC0A"
                        onPress={() => _setTarefas()}
                    >
                        <Text style={{ color: theme.colors.backGround }}>{textButon}</Text>
                    </Button>
                </View>
            </ScrollView >
        </SafeAreaView >
    );
}

export default Todo