import { useState } from "react";
import Header from "../../components/header/index";
import "./addNots.styles.scss"; // Correct the import statement

const Index = () => {
  const [text, setText] = useState("");

  const Submit = () => {
    alert(text);
    console.log(text);
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="containerAddNotes">
        {" "}
        <h1>Add Notes</h1>
        <form>
          <label>
            Enter your note
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </form>
        <div className="button">
          <button onClick={Submit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
