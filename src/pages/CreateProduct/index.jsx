import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { FaChevronLeft } from "react-icons/fa";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProductForm } from "../../components/ProductForm";

export function CreateProduct() {
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState({
    value: "",
    label: "",
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [imageFile, setImageFile] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  async function fetchCategories() {
    const res = await api.get("/categories");
    const categories = res.data.map((category) => {
      return {
        value: category.name.toLowerCase().split(" ").join(""),
        label: category.name,
      };
    });
    setOptions(categories);
  }
  async function handleCreate(e) {
    e.preventDefault();
    try {
      let image = null;
      if (imageFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", imageFile);
        const res = await api.post(`/products/image`, fileUploadForm);
        image = res.data;
      }
      // console.log(price);
      await api.post(`/products/`, {
        name,
        image,
        price,
        description,
        category: category.label,
        ingredients,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível criar prato!");
      }
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Container>
      <Header />
      <main>
        <Link to={-1}>
          <FaChevronLeft />
          voltar
        </Link>
        <ProductForm
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
          onSubmit={handleCreate}
        />
      </main>
      <Footer />
    </Container>
  );
}
