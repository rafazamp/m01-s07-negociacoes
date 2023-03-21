import PropTypes from "prop-types";

function emReais(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export const TabelaLinha = ({ negociacao }) => {
  const { data, valor, quantidade } = negociacao;
  return (
    <tr>
      <th>{data}</th>
      <th>{quantidade}</th>
      <th>{emReais(Number(valor))}</th>
      <th>{emReais(Number(valor) * Number(quantidade))}</th>
    </tr>
  )
}

TabelaLinha.propTypes = {
  negociacao: PropTypes.shape({
    data: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
    quantidade: PropTypes.number.isRequired,
  }).isRequired,
};