import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import AddToDo from "./components/AddToDo";
import classes from "./ui/App.module.css";

function App() {
  return (
    <Container className={classes.MainCon} fluid>
      <NavBar />
      <AddToDo />
    </Container>
  );
}

export default App;
