import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators } from "../store";

function DelBtn({ deleteToDo }) {
  const navigate = useNavigate();
  const delToDo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    navigate("/");
    deleteToDo(id);
  };

  return <button onClick={delToDo}>DEL</button>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id)),
  };
};

export default connect(null, mapDispatchToProps)(DelBtn);
