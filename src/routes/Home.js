import FormToDo from "../components/FormToDo";
import ToDo from "../components/ToDo";

function Home({ addToDo }) {
  return (
    <>
      <h1>To Do</h1>
      <FormToDo />
      <ul>
        <ToDo />
      </ul>
    </>
  );
}

export default Home;
