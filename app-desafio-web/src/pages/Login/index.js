import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap';
import { login } from '../../utils/Auth';
import PropTypes from 'prop-types';
function Login({ setToken }) {
    const [usuario, setUsuario] = useState("bling")
    const [senha, setSenha] = useState("bling")
    const [erroLogin, setErroLogin] = useState({ erro: false, msg: "" })
    const _setUsuario = (user) => {
        setUsuario(user.target.value)
    }
    const _setSenha = (senha) => {
        setSenha(senha.target.value)
    }
    const _setErroLogin = (msg) => {
        setErroLogin({ erro: true, msg: msg })
    }
    const _login = async () => {
        try {
            const log = await login({ usuario: usuario, senha: senha })
            setToken(log.token);
        } catch (erro) {
            _setErroLogin(erro.msg)
        }
    }
    return (
        <>
            <Container>
                <h1 className=" mt-5 p-3 text-center rounded">Teste React Native</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow border rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicUser">
                                <Form.Label>Usuário</Form.Label>
                                <Form.Control
                                    placeholder="Usuário"
                                    value={usuario}
                                    onChange={_setUsuario}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={_setSenha}
                                />
                            </Form.Group>
                            <br />
                            <Button
                                variant="success"
                                onClick={_login}
                            >
                                Login
                            </Button>
                        </Form>
                    </Col>
                    <br />
                    {erroLogin.erro &&
                        <Alert variant={"danger"}>
                            {erroLogin.msg}
                        </Alert>}
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">By Jeverson Abreu</h6>
            </Container>
        </>
    );
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default Login;