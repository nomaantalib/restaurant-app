import { useEffect, useState } from "react";
import { foodAPI } from "../services/api";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await foodAPI.getAll();
      setFoods(response.data || []);
    } catch (error) {
      console.error("Error fetching foods:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await foodAPI.create({
        ...formData,
        price: parseFloat(formData.price),
      });
      setFormData({ name: "", description: "", price: "", category: "" });
      fetchFoods();
    } catch (error) {
      console.error("Error creating food:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="foods">
      <h1>Food Items</h1>

      <div className="form-section">
        <h2>Add New Food Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Food Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            step="0.01"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Food</button>
        </form>
      </div>

      <div className="list-section">
        <h2>All Food Items</h2>
        <div className="food-grid">
          {foods.map((food) => (
            <div key={food._id} className="food-card">
              <h3>{food.name}</h3>
              <p>{food.description}</p>
              <p className="price">${food.price}</p>
              <p className="category">Category: {food.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foods;
