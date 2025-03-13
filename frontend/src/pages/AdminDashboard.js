import React, { useEffect, useState } from "react";
import API from "../api";

function AdminDashboard() {
    const [stats, setStats] = useState({ users: 0, stores: 0, ratings: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await API.get("/admin/stats");
                setStats(res.data);
            } catch (error) {
                alert("Error fetching admin stats");
            }
        };
        fetchStats();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <p>Total Users: {stats.users}</p>
            <p>Total Stores: {stats.stores}</p>
            <p>Total Ratings: {stats.ratings}</p>
        </div>
    );
}

export default AdminDashboard;
