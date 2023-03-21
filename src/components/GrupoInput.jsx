import PropTypes from 'prop-types';

export const GrupoInput = ({id, label, type, min, step, value, aoDigitar}) => {

  return (
    <div className="form-group col">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        className="form-control"
        min={min}
        step={step}
        value={value}
        onChange={aoDigitar}
        required
      />
    </div>
  );
}

GrupoInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  min: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.string.isRequired,
  aoDigitar: PropTypes.func.isRequired,
}
