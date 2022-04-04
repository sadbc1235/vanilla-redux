import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import DelBtn from "../components/DelBtn";

function Detail(props) {
  console.log(props);
  const id = useParams();
  const toDo = props.toDos.find((toDo) => toDo.id === parseInt(id.id));
  return (
    <>
      <h1>{toDo.text}</h1>
      <h5>Created at: {toDo.id}</h5>
      <span id={toDo.id}>
        <DelBtn />
      </span>
    </>
  );
}

const mapStateToProps = (state) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Detail);
