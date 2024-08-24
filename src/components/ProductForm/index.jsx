import { Container } from "./styles";
import { Input } from "../Input";
import { Select } from "../Select";
import { IconButton } from "../IconButton";
import { FaX } from "react-icons/fa6";
import { Button } from "../Button";
import { FaFileUpload, FaPlus } from "react-icons/fa";
export function ProductForm({
  update = false,
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  setImageFile,
  ingredients,
  setIngredients,
  newIngredient,
  setNewIngredient,
  category,
  setCategory,
  options,
  onSubmit,
  handleDelete,
}) {
  function formatPrice(value) {
    const digits = value.replace(/[^0-9]/g, "");
    let lastTwoDigits = digits.substring(digits.length, digits.length - 2);
    lastTwoDigits =
      lastTwoDigits.length < 2 ? lastTwoDigits.padStart(2, "0") : lastTwoDigits;
    let beforeLastTwoDigits = digits.substring(0, digits.length - 2);
    beforeLastTwoDigits =
      beforeLastTwoDigits.length == 0
        ? "0"
        : beforeLastTwoDigits.indexOf("0") == 0
        ? beforeLastTwoDigits.substring(1, digits.length - 2)
        : beforeLastTwoDigits;
    return "R$ " + beforeLastTwoDigits + "," + lastTwoDigits;
  }
  function handleSetImageFile(e) {
    const file = e.target.files[0];
    setImageFile(file);
  }
  function deleteIngredient(name) {
    const filteredIngredients = ingredients.filter(
      (ingredient) => ingredient != name
    );
    setIngredients(filteredIngredients);
  }
  function addIngredient() {
    if (newIngredient == "") return;
    if (ingredients.some((ingredient) => ingredient == newIngredient)) {
      setNewIngredient("");
      return alert("Esse ingrediente já existe!");
    }
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }
  function changeIngredientName(e, index) {
    const updateIngredients = ingredients.map((ingredient, i) => {
      if (i == index) {
        ingredient = e.target.value;
      }
      return ingredient;
    });
    setIngredients(updateIngredients);
  }
  return (
    <Container onSubmit={onSubmit}>
      <legend>{update == false ? "Novo Prato" : "Editar Prato"}</legend>
      <div className="containerGroups image-name-category">
        <div className="image">
          <label htmlFor="productImage">Imagem do prato</label>
          <div className="containerProductImage">
            <label htmlFor="productImage" id="labelForImage"></label>
            <div>
              <FaFileUpload />
              <span>Selecione uma imagem</span>
            </div>
            <input
              type="file"
              id="productImage"
              name="productImage"
              onChange={handleSetImageFile}
            />
          </div>
        </div>
        <div className="name">
          <Input
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="productName"
            description="Nome"
            placeholder="Salada César"
            id="productName"
          />
        </div>
        <div className="category">
          <Select
            id="category"
            defaultOption="Selecione uma categoria"
            label="Categoria"
            name="category"
            selectedOption={category}
            setSelectedOption={setCategory}
            options={options}
            hideAll
            hideIcon
            newOption
          />
        </div>
      </div>
      <div className="containerGroups ingredients-price">
        <div className="ingredientsGroup">
          <label htmlFor="newIngredient">Ingredientes</label>
          <div className="ingredients">
            {ingredients.length > 0 &&
              ingredients.map((ingredient, index) => (
                <div
                  className="oldIngredient"
                  key={ingredient.split(" ").join("")}
                >
                  <input
                    onBlur={(e) => changeIngredientName(e, index)}
                    type="text"
                    defaultValue={ingredient}
                  />
                  <IconButton
                    onClick={() => deleteIngredient(ingredient)}
                    icon={FaX}
                    title={`Clique para deletar o ingrediente ${ingredient}`}
                  />
                </div>
              ))}
            <div className="newIngredient">
              <input
                value={newIngredient}
                type="text"
                id="newIngredient"
                onChange={(e) => setNewIngredient(e.target.value)}
              />
              <IconButton
                onClick={addIngredient}
                icon={FaPlus}
                title={`Clique para adicionar um novo ingrediente`}
              />
            </div>
          </div>
        </div>

        <div className="price">
          <Input
            onChange={(e) => {
              e.target.value = formatPrice(e.target.value);
              let price = Number(
                e.target.value.replace(",", ".").replace("R$", "").trim()
              );
              price = Number(price.toFixed(2));
              setPrice(price);
            }}
            defaultValue={
              price != null ? `R$ ${price.toFixed(2).replace(".", ",")}` : ""
            }
            type="text"
            name="productPrice"
            description="Preço"
            placeholder="R$ 40,00"
            id="productPrice"
          />
        </div>
      </div>
      <div className="description">
        <label htmlFor="productDescription">Descrição</label>
        <textarea
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
          name="productDescription"
          id="productDescription"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        ></textarea>
      </div>
      <div className="containerButtons">
        {update && (
          <Button
            onClick={handleDelete}
            type="button"
            id="deleteProductButton"
            content="Excluir Prato"
            title="Clique para excluir o prato"
          />
        )}
        <Button
          id="submitButton"
          content={update == false ? "Criar novo prato" : "Salvar alterações"}
          title={
            update == false
              ? "Clique para criar novo prato"
              : "Clique para salvar alterações"
          }
        />
      </div>
    </Container>
  );
}
