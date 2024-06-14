import Header from "../../components/header/index";
import useForm from "./UseForm";
import "./addNots.styles.scss";

const Index = () => {
  const { values, handleChange, resetForm } = useForm({
    text1: "",
    text2: "",
    text3: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="containerAddNotes">
        <h1>Add Notes</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your first note
            <input
              type="text"
              name="text1"
              value={values.text1}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your second note
            <input
              type="text"
              name="text2"
              value={values.text2}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your third note
            <input
              type="text"
              name="text3"
              value={values.text3}
              onChange={handleChange}
            />
          </label>
          <div className="button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
