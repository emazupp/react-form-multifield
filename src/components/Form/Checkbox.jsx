export default function Checkbox({ text }) {
  return (
    <>
      <div>
        <label className="p-1" for={`checkbox-${text}`}>
          {text}
        </label>
        <input type="checkbox"></input>
      </div>
    </>
  );
}
