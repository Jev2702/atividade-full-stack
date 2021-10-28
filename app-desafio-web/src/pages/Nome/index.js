import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import './styles.css';
function Nome() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const _setNome = (nome) => {
    setNome(nome.target.value);
  }
  const _setIdade = (idade) => {
    const ida = Number(idade.target.value)

    if (ida >= 0 && ida < 150)
      setIdade(ida.toString());
  }
  return (
    <div className='nome'>
      <h1>Meu nome é {nome === "" ? "{nome}" : nome}!</h1>
      <h2>Tenho {idade === "" || idade === "0" ? "{idade}" : idade} anos e quero ser um Blinger!</h2>

      <FormControl
        placeholder="Nome"
        aria-label="Nome"
        aria-describedby="basic-addon1"
        value={nome}
        onChange={_setNome}
      />

      <br />
      <FormControl
        placeholder="Idade"
        aria-label="Idade"
        aria-describedby="basic-addon1"
        value={idade}
        min={0}
        type="number"
        step="1"
        onChange={_setIdade}
      />
    </div>
  );
}

export default Nome;
