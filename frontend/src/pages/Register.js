import { useState } from "react";
import { authAPI } from "../services/api";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    usertype: "client",
    profile: "",
    answer: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await authAPI.register(formData);
      setMessage("Registration successful! You can now login.");
      setFormData({
        username: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        usertype: "client",
        profile: "",
        answer: "",
      });
    } catch (error) {
      // Handle backend error messages properly
      let errorMessage = "Registration failed. Please try again.";

      // Try to get specific error message from backend
      if (error.message && error.message.includes("HTTP error! status: 400")) {
        errorMessage = "Please fill all required fields correctly.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      setMessage(errorMessage);
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Full Name"
          value={formData.username}
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
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
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
        <select
          name="usertype"
          value={formData.usertype}
          onChange={handleChange}
          required
        >
          <option value="client">Client</option>
          <option value="admin">Admin</option>
          <option value="vendor">Vendor</option>
          <option value="driver">Driver</option>
        </select>
        <input
          type="text"
          name="profile"
          placeholder="Profile Photo URL (optional)"
          value={formData.profile}
          onChange={handleChange}
        />
        <input
          type="text"
          name="answer"
          placeholder="Security Answer"
          value={formData.answer}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Register;
