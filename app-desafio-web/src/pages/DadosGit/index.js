
import React, { useState } from 'react';
import { Col, Container, FormControl, Row, Button, Alert, ListGroup, Figure } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import './styles.css';
import { getRepositorios } from '../../utils/Api';


function DadosGit() {

  const [nome, setNome] = useState("")
  const [erro, setErro] = useState(null)
  const [info, setInfo] = useState(null)
  const _setNome = (nome) => {
    setNome(nome.target.value);
  }
  const _setErro = (erro) => {
    setErro(erro);
  }
  const _setInfo = (info) => {
    setInfo(info);
  }
  const _getRepositorios = async () => {
    try {
      const result = await getRepositorios(nome);
      _setErro(null)
      _setInfo(result.data)

    } catch (erro) {
      _setErro("Falha ao encontrar repositório!");
      _setInfo(null)
    }
  }
  return (
    <div className='dadosgit'>
      <h1>Dados do repositório</h1>
      <Container>
        <Row>
          <Col xs={10}>
            <FormControl
              aria-describedby="basic-addon1"
              value={nome}
              onChange={_setNome}
            />
          </Col>
          <Col xs={2}>
            <Button variant="primary" onClick={_getRepositorios}>Pesquisar</Button>{' '}
          </Col>
        </Row>
      </Container>
      <br />
      {erro !== null &&
        <Alert variant={"warning"}>
          {erro}
        </Alert>}
      {info !== null &&
        <ListGroup>
          <ListGroup.Item>
            <p><b>Id:</b> {info?.id}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p><b>Name:</b> {info?.name}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p><b>Fullname: </b> {info?.full_name}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row >
              <Col>
                <p><b>{`Owner: `}</b>
                  {info.owner?.avatar_url !== "" &&
                    <Figure.Image width={25} height={25} src={info.owner?.avatar_url} />
                  }
                  {` ${info.owner?.login}`}</p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <p><b>Description:</b> {info?.description}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p><b>Visibility:</b> {info?.visibility}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p> {info?.stargazers_count}<AiIcons.AiOutlineStar /> {info?.forks}<CgIcons.CgGitFork /></p>
          </ListGroup.Item>
        </ListGroup >
      }
    </div >
  );
}

export default DadosGit;