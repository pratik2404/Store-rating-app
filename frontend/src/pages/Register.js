import React, { useState } from "react";
import axios from "axios";

function Register() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", address: "", role: "User" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", formData);
            alert("Registration Successful!");
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Full Name" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <input name="address" placeholder="Address" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
