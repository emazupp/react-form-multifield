import Dropdown from "./Dropdown";
import InputText from "./InputText";
import Checkbox from "./Checkbox";
export default function Form({ handleCreate, setTitle, setAuthor, setStatus }) {
  return (
    <>
      <form onSubmit={handleCreate}>
        <InputText text="Titolo" setFunction={setTitle} />
        <InputText text="Autore" setFunction={setAuthor} />

        <div className="d-flex justify-content-between">
          <Dropdown setStatus={setStatus} />
          <Checkbox text="Published" />
          <button type="submit" className="btn btn-primary">
            Invia
          </button>
        </div>
      </form>
    </>
  );
}
