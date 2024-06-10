import "./App.css";
import Header from "./components/header/index";
import NotesList from "./containers/notesList/index";

function App() {
  return (
    <>
      <Header></Header>
      <NotesList></NotesList>
    </>
  );
}

export default App;
