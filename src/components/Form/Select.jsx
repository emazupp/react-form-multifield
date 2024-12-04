export default function Select({ handleChangeForm, formData }) {
  return (
    <select
      class="form-select w-50"
      name="category"
      value={formData}
      onChange={handleChangeForm}
    >
      <option selected>Seleziona categoria</option>
      <option value="Categoria 1">Categoria 1</option>
      <option value="Categoria 2">Categoria 2</option>
      <option value="Categoria 3">Categoria 3</option>
    </select>
  );
}
