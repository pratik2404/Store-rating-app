import React, { useEffect, useState } from "react";
import API from "../api";

function StoreOwnerDashboard() {
    const [store, setStore] = useState(null);

    useEffect(() => {
        const fetchStore = async () => {
            try {
                const res = await API.get("/store-owner/store");
                setStore(res.data);
            } catch (error) {
                alert("Error fetching store data");
            }
        };
        fetchStore();
    }, []);

    return (
        <div>
            <h2>Store Owner Dashboard</h2>
            {store ? (
                <>
                    <h3>{store.name}</h3>
                    <p>Address: {store.address}</p>
                    <p>Average Rating: {store.rating}</p>
                </>
            ) : (
                <p>Loading store details...</p>
            )}
        </div>
    );
}

export default StoreOwnerDashboard;
