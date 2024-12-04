export default function InputText({ text, setFunction }) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        {text}
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="..."
        onChange={(e) => setFunction(e.target.value)}
      />
    </div>
  );
}
