# Juicebox Store 🧃🍎

Juicebox Store is a fully functional e-commerce web application for juice lovers! This project allows users to explore a wide range of juice products, filter them by flavors, add them to a cart, and complete purchases with email confirmations.

## Features 🚀

- **Dynamic Product Filtering**: Filter products by selected flavors.
- **Add to Cart**: Add products to the cart with seamless updates.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Email Confirmation**: Sends a detailed email of purchased products.
- **Modern UI**: Built with React and TailwindCSS.

## Tech Stack 🛠️

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Email Service**: EmailJS

## Project Structure 📁

JuiceboxStore/ ├── backend/ │
├── server.js # Node.js server │
├── routes/ # API routes │
├── models/ # MongoDB schemas │
├── frontend/
│ ├── src/ │ │
├── components/ # React components (NavBar, Catalogue, etc.) │
│ └── App.js # Main App component │
├── public/ # Static files (images, icons)
│ └── package.json # Frontend dependencies └── README.md # Project documentation

## Setup and Installation ⚙️

### Prerequisites

- Node.js (v16+)
- MongoDB Atlas (or local MongoDB instance)
- EmailJS account

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/juicebox-store.git
   cd juicebox-store/backend
   ```
2. npm install
3. Create ENV in backend with your own DB with Schema
4. npm start
   How to Use 🛍️
5. Select your favorite juice flavors from the Flavors section up to two flavors.
6. Browse the filtered products in the catalogue.
7. Add items to your cart.
8. Checkout by entering your email to receive a detailed purchase summary.

### ScreenShots

![JbStore SS](screenshots\ScreenshotJbstore.png)
