import React, { useState } from "react";
import API from "../api";

function RatingForm({ storeId }) {
    const [rating, setRating] = useState(0);

    const submitRating = async () => {
        try {
            await API.post("/ratings", { storeId, rating });
            alert("Rating submitted!");
        } catch (error) {
            alert("Error submitting rating.");
        }
    };

    return (
        <div>
            <h3>Submit Rating</h3>
            <select onChange={(e) => setRating(e.target.value)}>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
            </select>
            <button onClick={submitRating}>Submit</button>
        </div>
    );
}

export default RatingForm;
