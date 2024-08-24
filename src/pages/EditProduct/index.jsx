import { Link, useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";
import { FaChevronLeft } from "react-icons/fa";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProductForm } from "../../components/ProductForm";

export function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [options, setOptions] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [imageFile, setImageFile] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [category, setCategory] = useState({
    value: "",
    label: "",
  });
  const navigate = useNavigate();
  async function fetchCategories() {
    const res = await api.get("/categories");

    const options = res.data.map((category) => {
      return {
        id: category.id,
        value: category.name.toLowerCase().split(" ").join(""),
        label: category.name,
      };
    });
    return options;
  }
  async function fetchProduct() {
    const res = await api.get(`/products/${id}`);
    const options = await fetchCategories();

    const selectedCategory = options.find(
      (category) => category.id == res.data.category_id
    );
    setProduct(res.data);
    setCategory(selectedCategory);
    setOptions(options);
    setName(res.data.name);
    setDescription(res.data.description);
    setPrice(res.data.price);
    const ingredients = res.data.ingredients.map(
      (ingredient) => ingredient.name
    );
    setIngredients(ingredients);
  }
  async function handleUpdate(e) {
    e.preventDefault();
    try {
      if (imageFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", imageFile);
        await api.patch(`/products/image/${product.id}`, fileUploadForm);
      }
      await api.put(`/products/${product.id}`, {
        name,
        price,
        description,
        category: category.label,
        ingredients,
      });
      navigate(-1);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar!");
      }
    }
  }
  async function handleDelete() {
    await api.delete(`/products/${product.id}`);
    navigate("/");
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <Container>
      <Header />
      <main>
        <Link to={-1}>
          <FaChevronLeft />
          voltar
        </Link>
        {product && (
          <ProductForm
            update
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            setImageFile={setImageFile}
            ingredients={ingredients}
            setIngredients={setIngredients}
            newIngredient={newIngredient}
            setNewIngredient={setNewIngredient}
            category={category}
            setCategory={setCategory}
            options={options}
            onSubmit={handleUpdate}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer />
    </Container>
  );
}
