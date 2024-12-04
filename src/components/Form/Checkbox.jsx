export default function Checkbox({ text, handleChangeForm }) {
  return (
    <>
      <div>
        <label className="p-1" htmlFor={`checkbox-${text}`}>
          {text}
        </label>
        <input type="checkbox" id={`checkbox-${text}`}></input>
      </div>
    </>
  );
}
