export default function Checkbox({ name, formData, text, handleChangeForm }) {
  return (
    <>
      <div>
        <label className="p-1" htmlFor={`checkbox-${text}`}>
          {text}
        </label>
        <input
          name={name}
          onChange={handleChangeForm}
          type="checkbox"
          id={`checkbox-${text}`}
          checked={formData}
        ></input>
      </div>
    </>
  );
}
