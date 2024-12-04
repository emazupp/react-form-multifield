import Form from "../Form/Form";
import { articoli } from "../../data/articoli";
import { useEffect, useState } from "react";
import Card from "../Card";

const initialFormData = {
  title: "",
  image: "",
  author: "",
  category: "",
  status: "draft",
};

export default function Main() {
  const [formData, setFormData] = useState(initialFormData);

  const [editedTitle, setEditedTitle] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [articles, setArticle] = useState(articoli);

  const handleChangeForm = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData((formData) => ({
      ...formData,
      [e.target.name]: value,
    }));
  };

  /* CREATE */
  const handleCreate = (e) => {
    e.preventDefault();
    formData.id = articles[articles.length - 1].id + 1;
    setArticle([...articles, { ...formData }]);
    setFormData(initialFormData);
  };

  /* DELETE */
  const handleDelete = (id) => {
    setArticle(articles.filter((item) => item.id != id));
  };

  /* EDIT TITLE */
  const handleEdit = (event, id) => {
    event.preventDefault();
    const indexEditArticle = articles.findIndex((item) => item.id == id);
    const newArticles = articles;
    newArticles[indexEditArticle].title = editedTitle;
    setArticle(newArticles);
    alert("Titolo modificato in: " + editedTitle);
  };

  const handleEditStatus = (id) => {
    const newStatus = !editStatus;
    const indexEditStatus = articles.findIndex((item) => item.id == id);
    const newArticles = articles;
    newArticles[indexEditStatus].status = newStatus;
    setEditStatus(newStatus);
    setArticle(newArticles);
  };

  useEffect(() => {
    if (editStatus) alert("Articolo pubblicato");
  }, [editStatus]);

  return (
    <main>
      <h2 className="h3">Inserisci articolo</h2>

      <div className="row">
        <div className="col-6">
          <div className="card p-4">
            <Form
              formData={formData}
              handleCreate={handleCreate}
              handleChangeForm={handleChangeForm}
            />
          </div>
        </div>
      </div>

      {/* SHOW */}
      <div className="row mt-5 g-5">
        {articles.map((item) => {
          return (
            <Card
              item={item}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setEditedTitle={setEditedTitle}
              handleEditStatus={handleEditStatus}
            />
          );
        })}
      </div>
    </main>
  );
}
