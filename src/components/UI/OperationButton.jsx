import { ACTIONS } from "../../store/reducer";

const OperationButton = ({ operation, dispatch, type, className }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      className={className}
      type={type}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
