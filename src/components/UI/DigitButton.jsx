import { ACTIONS } from "../../store/reducer";

const Button = ({ className, type, digit, dispatch }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      type={type}
      className={className}
    >
      {digit}
    </button>
  );
};

export default Button;
