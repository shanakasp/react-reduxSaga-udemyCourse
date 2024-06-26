import Header from "../../components/header/index";
import "./notes.styles.scss";

const dummyData = [
  {
    name: "First Note",
    id: 1,
  },
  {
    name: "Second Note",
    id: 2,
  },
  {
    name: "Third Note",
    id: 3,
  },
];

const Index = () => {
  return (
    <div>
      {" "}
      <Header></Header>
      <div className="containerNotes">
        <h1>Notes List</h1>
        <ul>
          {dummyData.map((notes) => (
            <li key={notes.id}>{notes.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
