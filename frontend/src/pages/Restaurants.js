import { useEffect, useState } from "react";
import { restaurantAPI } from "../services/api";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await restaurantAPI.getAll();
      setRestaurants(response.data || []);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await restaurantAPI.create(formData);
      setFormData({ name: "", address: "", phone: "", email: "" });
      fetchRestaurants();
    } catch (error) {
      console.error("Error creating restaurant:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="restaurants">
      <h1>Restaurants</h1>

      <div className="form-section">
        <h2>Add New Restaurant</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Restaurant Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Restaurant</button>
        </form>
      </div>

      <div className="list-section">
        <h2>All Restaurants</h2>
        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <div key={restaurant._id} className="restaurant-card">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.address}</p>
              <p>Phone: {restaurant.phone}</p>
              <p>Email: {restaurant.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
