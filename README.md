# Product Management App

A simple React application that allows users to add products with subcategories and display them. It connects to a backend API (Node.js with Express) to manage products and subcategories.

## Features

- **Product Creation**: Add products with a name, ID, and associated subcategories (color and brand).
- **Display Products**: Fetch and display a list of products and their associated subcategories.
- **Subcategories**: Each product can have multiple subcategories with attributes like color and brand.
- **Backend Integration**: The app connects to a backend API to store and fetch products.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (assumed)
- **State Management**: React `useState` and `useEffect`
- **API**: Axios or Fetch API

## Prerequisites

- Node.js installed
- MongoDB running (for local development)
- API backend should be running on `http://localhost:5002`

## Installation
### Setup Guide

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/siddharthdhodi05/ProductManagement.git
   cd ProductManagement  
   ```
---

## 🔧 Environment Setup

### Environment Variables  
Create a `.env` file in the `backend` directory and add the following:  

```env
MONGO_URI= Your mongoDB Url
PORT=8000
```
---

# Run the Application

## Start the Backend Server:
Navigate to the backend directory and run:

```bash
cd backend
npm run dev
```

## Start the Frontend Server:
Navigate to the forntend directory and run:
```bash
cd frontend
npm run dev
```
