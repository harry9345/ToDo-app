import { Provider } from "react-redux";
import store from "./redux/store";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import AddToDo from "./components/AddToDo";
import classes from "./ui/App.module.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container className={classes.MainCon} fluid>
      <NavBar />
      <Provider store={store}>
        <AddToDo />
      </Provider>
    </Container>
  );
}

export default App;
