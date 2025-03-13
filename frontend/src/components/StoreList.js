import React, { useEffect, useState } from "react";
import API from "../api";

function StoreList() {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        fetchStores();
    }, []);

    const fetchStores = async () => {
        try {
            const res = await API.get("/stores");
            setStores(res.data);
        } catch (error) {
            alert("Error fetching stores");
        }
    };

    return (
        <div>
            <h2>Stores</h2>
            {stores.length === 0 ? (
                <p>No stores available.</p>
            ) : (
                stores.map((store) => (
                    <div key={store.id}>
                        <h3>{store.name}</h3>
                        <p>{store.address}</p>
                        <p>Rating: {store.rating || "No ratings yet"}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default StoreList;
