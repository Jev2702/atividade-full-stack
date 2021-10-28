
import React, { useState } from 'react';
import { Col, Container, FormControl, Row, Button, Alert, ListGroup, Figure, InputGroup } from 'react-bootstrap';
import * as GrIcons from 'react-icons/gr';
import './styles.css';
import { getRepositorios } from '../../utils/Api';
import { Tarefa } from '../../utils/Tarefa';


function Todo() {

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
  const _setTarefa = (tarefa) => {
    setErro("")
    setTarefa(tarefa.target.value)
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

  const _setEditar = (editar, item) => {
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
  return (
    <div className='dadosgit'>
      <h1>Todo App</h1>
      <h3>App para gerenciamento de tarefas do dia dia</h3>
      <Container className='container'>
        <ListGroup>
          <ListGroup.Item>
            <Row>
              <Col>
                <GrIcons.GrTasks />
                {` Lista de Tarefas`}
              </Col>
            </Row></ListGroup.Item>
          {tarefas.map((item, index) => {
            return (
              <ListGroup.Item key={index}>
                <Row>
                  <Col>
                    <InputGroup >
                      <InputGroup.Checkbox

                        checked={item.editar}
                        onChange={(value) => _setEditar(value, item)}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={8}>
                    <p>{item?.nome}</p>
                  </Col>

                  <Col>
                    <GrIcons.GrTrash onClick={() => _removeTarefa(item)} />
                  </Col>

                </Row>
              </ListGroup.Item>)
          })}
          <ListGroup.Item>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Qual é a nova Tarefa?"
                    aria-describedby="basic-addon1"
                    value={tarefa}
                    onChange={_setTarefa}
                  />
                  <Button variant="primary" onClick={() => _setTarefas()}>{textButon}</Button>{' '}
                </InputGroup>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
        {erro !== null && erro!=="" &&
          <Alert variant={"warning"}>
            {erro}
          </Alert>}
      </Container>
      <br />
    </div >
  );
}

export default Todo;