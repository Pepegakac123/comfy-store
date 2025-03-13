# Comfy Store - E-commerce Platform

## [Live Demo](https://comfystore.kacperadamczyk.pl/)

[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-8.1.2-purple?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-4.12.10-5A0EF8?style=for-the-badge)](https://daisyui.com/)
[![React Query](https://img.shields.io/badge/React_Query-4.32.6-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query/latest)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## 📱 Project Overview

Comfy Store is an e-commerce application built with React. Users can browse products, create accounts, add items to cart, and complete purchases. The app includes product filtering, sorting, and pagination capabilities, along with user authentication and order history tracking.

![Comfy Store Gif](https://github.com/Pepegakac123/comfy-store/blob/main/public/comfystore.gif)

## 🚀 Key Features

- **User Authentication**: Secure login and registration system with guest user access
- **Product Browsing**: View featured products on the home page and browse the full catalog
- **Product Filtering**: Filter products by category, company, price range, and more
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Shopping Cart**: Add, remove, and update product quantities in the cart
- **Checkout Process**: Complete purchases with shipping information
- **Order History**: View past orders with details like date, items, and total cost
- **Theme Toggle**: Switch between light and dark themes

## 🛠️ Tech Stack

### Frontend
- **React**: Component-based UI development with hooks
- **Redux Toolkit**: State management for cart and user data
- **React Router**: Client-side routing with data loaders and actions
- **TanStack Query (React Query)**: Server state management and data fetching
- **Tailwind CSS & DaisyUI**: Utility-first styling with component library
- **Axios**: HTTP client for API requests
- **React Toastify**: Toast notifications for user feedback
- **dayjs**: Date formatting for orders

### Build Tools
- **Vite**: Fast, modern frontend build tool
- **ESLint**: Code linting and formatting

## ⚙️ Project Structure

```
comfy-store/
├── src/
│   ├── assets/            # Static assets like images
│   ├── Components/        # Reusable UI components
│   │   ├── CartItem.jsx
│   │   ├── CheckoutForm.jsx
│   │   ├── Filters.jsx
│   │   ├── Header.jsx
│   │   └── ...
│   ├── features/          # Redux slices
│   │   ├── cart/
│   │   └── user/
│   ├── pages/             # Main page components
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Products.jsx
│   │   └── ...
│   ├── utils/             # Helper functions
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── store.js           # Redux store configuration
└── package.json
```

## 📋 Installation & Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/comfy-store.git
   cd comfy-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file with the following variables:
   ```
   VITE_BASE_URL=your_api_url
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:5173`

## 💡 Key Implementation Details

### Data Fetching with React Query
```javascript
// Example from Landing.jsx
const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch.get(url),
};

export const loader = (queryClient) => async () => {
  const { data } = await queryClient.ensureQueryData(featuredProductsQuery);
  // ...
};
```

### State Management with Redux
```javascript
// Example from cartSlice.js
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      // Add item logic...
    },
    // Other reducers...
  },
});
```

### Routing with React Router
```javascript
// Example from App.jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      // Other routes...
    ],
  },
  // More routes...
]);
```

## 🔮 Why This Project Matters

This project demonstrates my ability to:

1. **Build Complete Applications**: Create a full-featured application with multiple interconnected components
2. **Implement Modern Frontend Practices**: Use the latest tools and libraries like React Query, Redux Toolkit, and React Router
3. **Create Responsive UIs**: Design interfaces that work well across different devices and screen sizes
4. **Manage Application State**: Properly handle both client and server state
5. **Handle User Authentication**: Implement secure login and registration flows
6. **Process User Input**: Create forms with validation and error handling
7. **Fetch and Display Data**: Work with external APIs to retrieve and display information

## 📄 License

MIT License

---

*This project was created as part of my journey to become a proficient frontend developer. I'm continuously working to improve my skills and would appreciate any feedback or suggestions!*