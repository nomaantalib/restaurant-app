# Restaurant App - Full Stack Integration

This project integrates a Node.js/Express backend API with a React frontend for a restaurant management system.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Environment variables:**
   Create a `.env` file in the root directory:

   ```
   PORT=8080
   MONGO_URI=your_mongodb_connection_string
   ```

3. **Start the backend server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:8080`

### Frontend Setup

1. **Navigate to client directory:**

   ```bash
   cd client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
restrauntApp/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── App.js         # Main app component
├── controllers/           # Backend controllers
├── models/               # Database models
├── routes/               # API routes
├── middleware/           # Authentication middleware
├── database/             # Database connection
└── index.js             # Express server entry
```

## 🔗 API Endpoints

### Authentication

- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login

### Restaurants

- `GET /api/v1/resturant` - Get all restaurants
- `POST /api/v1/resturant` - Create new restaurant
- `GET /api/v1/resturant/:id` - Get restaurant by ID

### Categories

- `GET /api/v1/category` - Get all categories
- `POST /api/v1/category` - Create new category

### Foods

- `GET /api/v1/food` - Get all food items
- `POST /api/v1/food` - Create new food item

## 🎯 Features

### Backend Features

- RESTful API with Express.js
- MongoDB database with Mongoose
- JWT authentication
- Middleware for route protection
- Error handling

### Frontend Features

- React Router for navigation
- Simple, clean UI
- Form handling
- API integration
- Responsive design

## 🛠️ Development

### Adding New Features

1. **Backend:** Add new routes in `routes/` and controllers in `controllers/`
2. **Frontend:** Add new pages in `client/src/pages/` and update routing

### Testing

- Backend: Use Postman or similar tool to test API endpoints
- Frontend: React Dev Tools for debugging

## 📱 Usage

1. **Register** a new account at `/register`
2. **Login** with your credentials at `/login`
3. **Browse** restaurants, categories, and food items
4. **Add** new restaurants, categories, or food items

## 🐛 Troubleshooting

### Common Issues

1. **CORS errors:** Ensure backend is running on `localhost:8080`
2. **MongoDB connection:** Check your `.env` file for correct MONGO_URI
3. **Port conflicts:** Change ports in `.env` if needed

### Debug Mode

- Backend: Check console for detailed error messages
- Frontend: Use browser Dev Tools for debugging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
