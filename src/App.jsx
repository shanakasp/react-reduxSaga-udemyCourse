import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddNotes from "./containers/addNotes/index";
import Homepage from "./containers/homePage/index";
import NotesList from "./containers/notesList/index";

function App() {
  return (
    <Routes>
      <Route path="/notes" element={<NotesList />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/addNotes" element={<AddNotes />} />
    </Routes>
  );
}

export default App;
