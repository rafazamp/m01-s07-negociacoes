import { TabelaLinha } from "./TabelaLinha"
import PropTypes from 'prop-types';

export const Tabela = ({negociacoes}) => {

  function totalizador() {
    const valorTotal = negociacoes.reduce((totalizador, negociacao) => {
      return (
        totalizador + Number(negociacao.valor) * Number(negociacao.quantidade)
      );
    }, 0);

    return valorTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div className="my-5">
      <table className="table table-hover table-bordered">
        <thead className="table-primary">
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>

        <tbody>
          {negociacoes.map((negociacao) => (
              <TabelaLinha negociacao={negociacao} />
            ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="3"></td>
            <td>{totalizador()}</td>
          </tr>
        </tfoot>
      </table>

    </div>
  )
}

Tabela.propTypes = {
  negociacoes: PropTypes.array.isRequired,
}