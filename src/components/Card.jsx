import Button from "./Button";
import Checkbox from "./Form/Checkbox";
export default function Card({
  item,
  handleEdit,
  handleDelete,
  setEditedTitle,
  handleEditStatus,
}) {
  const img = item.image === "" ? "https://placehold.co/600x400" : item.image;
  return (
    <div key={item.id} className="col-3">
      <div className="card p-3">
        <h5 className="fw-bold">ID Articolo: {item.id}</h5>
        <form onSubmit={(event) => handleEdit(event, item.id)}>
          {item.title && (
            <p className="d-flex align-items-center gap-1">
              <b>Titolo:</b>
              <input
                type="text"
                className="form-control"
                placeholder={item.title}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </p>
          )}

          <img className="img-fluid" src={img} alt={`img-${img}`} />

          <p>
            Categoria: {item.category ? item.category : "Nessuna categoria"}
          </p>
          <Checkbox
            text="Published"
            formData={item.status}
            handleEditStatus={handleEditStatus}
            id={item.id}
          />

          <div className="d-flex justify-content-end gap-2">
            <Button icon="trash" id={item.id} handleFunction={handleDelete} />
            <button type="submit" className="btn btn-warning">
              <i className="fa-solid fa-edit fa-xl"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
