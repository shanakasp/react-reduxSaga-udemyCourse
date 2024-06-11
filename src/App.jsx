import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./containers/homePage/index";
import NotesList from "./containers/notesList/index";

function App() {
  return (
    <Routes>
      <Route path="/notes" element={<NotesList />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
