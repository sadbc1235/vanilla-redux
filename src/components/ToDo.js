import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DelBtn from "./DelBtn";

function ToDo({ state }) {
  console.log(state);

  return state.map(({ text, id }) => {
    return (
      <li key={id} id={id}>
        <Link to={`/${id}`}>{text}</Link>
        <DelBtn />
      </li>
    );
  });
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(ToDo);
