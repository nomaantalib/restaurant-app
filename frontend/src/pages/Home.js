import { useEffect, useState } from "react";
import { categoryAPI, foodAPI, restaurantAPI } from "../services/api";

const Home = () => {
  const [stats, setStats] = useState({
    restaurants: 0,
    categories: 0,
    foods: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [restaurants, categories, foods] = await Promise.all([
        restaurantAPI.getAll(),
        categoryAPI.getAll(),
        foodAPI.getAll(),
      ]);

      setStats({
        restaurants: restaurants.data?.length || 0,
        categories: categories.data?.length || 0,
        foods: foods.data?.length || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="home">
      <h1>Welcome to Food App</h1>
      <p>Your one-stop solution for restaurant management</p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.restaurants}</h3>
          <p>Restaurants</p>
        </div>
        <div className="stat-card">
          <h3>{stats.categories}</h3>
          <p>Categories</p>
        </div>
        <div className="stat-card">
          <h3>{stats.foods}</h3>
          <p>Food Items</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
