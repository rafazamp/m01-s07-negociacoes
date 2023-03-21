import { GrupoInput } from "./GrupoInput"
import PropTypes from 'prop-types';
import { useState } from "react";

export const Formulario = ({quandoAdicionar}) => {

  const [data, setData] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(0);

  function handleAdicionarNegociacao () {
    const negociacao = {
        data: data,
        quantidade: quantidade,
        valor: valor,
    };

    if (negociacao.data && negociacao.quantidade && negociacao.valor) {
      quandoAdicionar(negociacao);

      setData("");
      setQuantidade(0);
      setValor(0);

    } else {
      alert("Preencha todos os campos")
    }

}

  return (
    <div>
      <form className="form container">
        <div className="row">
          <GrupoInput 
            id="data" 
            label="Data" 
            type="date" 
            aoDigitar={(event) => setData(event.target.value)}
            valor={data}
          />
          <GrupoInput
            id="quantidade"
            label="Quantidade"
            type="number"
            min="1"
            step="1"
            aoDigitar={(event) => setQuantidade(event.target.value)}
            valor={quantidade}
          />
          <GrupoInput
            id="valor"
            label="Valor"
            type="number"
            min="0.01"
            step="0.01"
            aoDigitar={(event) => setValor(event.target.value)}
            valor={valor}
          />
        </div>

        <br />

        <div className="col-1 d-flex align-items-end justify-content-end">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAdicionarNegociacao}
          >
            Incluir
          </button>
        </div>
      </form>
    </div>
  );
}

GrupoInput.propTypes = {
  quandoAdicionar: PropTypes.func.isRequired,
}