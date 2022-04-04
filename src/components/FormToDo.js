import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function FormToDo({ addToDo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    addToDo(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onChange} />
      <button>Add</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
};

export default connect(null, mapDispatchToProps)(FormToDo);
