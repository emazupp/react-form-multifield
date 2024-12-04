export default function Button({ icon, id, handleFunction }) {
  return (
    <button className="btn btn-danger" onClick={() => handleFunction(id)}>
      <i className={`fa-solid fa-${icon} fa-xl`}></i>
    </button>
  );
}
