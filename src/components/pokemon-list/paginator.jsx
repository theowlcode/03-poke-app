import PropTypes from "prop-types";

export const Paginator = ({ offset, handleOffset }) => {
  return (
    <div className="list-actions">
      <button
        disabled={offset === 0}
        className="list-actions__prev"
        onClick={() => handleOffset(-1)}
      >
        {"<"}
      </button>
      <button className="list-actions__next" onClick={() => handleOffset(1)}>
        {">"}
      </button>
    </div>
  );
};

Paginator.propTypes = {
  offset: PropTypes.number.isRequired,
  handleOffset: PropTypes.func.isRequired,
};
