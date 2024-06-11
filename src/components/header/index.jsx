import { Link } from "react-router-dom";
import "./header.styles.scss";

const Index = () => {
  return (
    <div className="container">
      <header className="header">
        <ul className="nav">
          <Link to={"/notes"}>
            {" "}
            <li className="nav-item">Notes List</li>
          </Link>

          <Link to={"/addNotes"}>
            {" "}
            <li className="nav-item">Add Notes</li>
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default Index;
