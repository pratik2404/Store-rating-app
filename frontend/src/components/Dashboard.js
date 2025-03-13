import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "./Auth";
import API from "../api";

function Dashboard() {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(null);
    const [stats, setStats] = useState({ users: 0, stores: 0, ratings: 0 });
    const [store, setStore] = useState(null);

    useEffect(() => {
        if (!Auth.isAuthenticated()) {
            navigate("/login");
        } else {
            setUserRole(Auth.getUserRole());
            if (Auth.getUserRole() === "admin") {
                fetchAdminStats();
            } else if (Auth.getUserRole() === "store_owner") {
                fetchStoreData();
            }
        }
    }, [navigate]);

    // Fetch Admin Stats
    const fetchAdminStats = async () => {
        try {
            const res = await API.get("/admin/stats");
            setStats(res.data);
        } catch (error) {
            alert("Error fetching admin stats");
        }
    };

    // Fetch Store Owner Data
    const fetchStoreData = async () => {
        try {
            const res = await API.get("/store-owner/store");
            setStore(res.data);
        } catch (error) {
            alert("Error fetching store data");
        }
    };

    return (
        <div>
            <h2>Dashboard</h2>
            
            {userRole === "admin" && (
                <div>
                    <h3>Admin Panel</h3>
                    <p>Total Users: {stats.users}</p>
                    <p>Total Stores: {stats.stores}</p>
                    <p>Total Ratings: {stats.ratings}</p>
                    <button onClick={() => navigate("/admin/manage-users")}>Manage Users</button>
                    <button onClick={() => navigate("/admin/manage-stores")}>Manage Stores</button>
                </div>
            )}

            {userRole === "store_owner" && store && (
                <div>
                    <h3>Store Owner Panel</h3>
                    <h4>{store.name}</h4>
                    <p>Address: {store.address}</p>
                    <p>Average Rating: {store.rating}</p>
                </div>
            )}

            {userRole === "user" && (
                <div>
                    <h3>Welcome, User!</h3>
                    <button onClick={() => navigate("/stores")}>View Stores & Rate</button>
                </div>
            )}

            <button onClick={Auth.logout}>Logout</button>
        </div>
    );
}

export default Dashboard;
