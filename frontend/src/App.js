import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import StoreList from "./components/StoreList";
import RatingForm from "./components/RatingForm";
import AdminDashboard from "./pages/AdminDashboard";
import StoreOwnerDashboard from "./pages/StoreOwnerDashboard";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/stores" element={<StoreList />} />
                <Route path="/rate/:storeId" element={<RatingForm />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/store-owner/dashboard" element={<StoreOwnerDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
