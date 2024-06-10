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
    <div className="container">
      <header className="header">
        <ul className="nav">
          <li className="nav-item">Notes List</li>
          <li className="nav-item">Add Notes</li>
        </ul>
      </header>
      <h1>Notes List</h1>
      <ul>
        {dummyData.map((notes) => (
          <li key={notes.id}>{notes.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
