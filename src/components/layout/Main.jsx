import Form from "../Form/Form";
import { articoli } from "../../data/articoli";
import { useState } from "react";
import Card from "../Card";

export default function Main() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [articles, setArticle] = useState(articoli);

  /* CREATE */
  const handleCreate = (e) => {
    e.preventDefault();
    const newArticle = {
      id: articles[articles.length - 1].id + 1,
      title,
      author,
      status,
    };
    console.log(newArticle);
    setArticle([...articles, newArticle]);
  };

  /* DELETE */
  const handleDelete = (id) => {
    setArticle(articles.filter((item) => item.id != id));
  };

  /* EDIT */
  const handleEdit = (event, id) => {
    event.preventDefault();
    const indexEditArticle = articles.findIndex((item) => item.id == id);
    const newArticles = articles;
    newArticles[indexEditArticle].title = editedTitle;
    setArticle(newArticles);
    alert("Titolo modificato in: " + editedTitle);
    setEditedTitle("");
    console.log(editedTitle);
  };

  return (
    <main>
      <h2 className="h3">Inserisci articolo</h2>

      <div className="row">
        <div className="col-6">
          <div className="card p-4">
            <Form
              handleCreate={handleCreate}
              setTitle={setTitle}
              setAuthor={setAuthor}
              setStatus={setStatus}
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
            />
          );
        })}
      </div>
    </main>
  );
}
