const express = require('express');
const db = require('../config/db');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const [stores] = await db.query("SELECT * FROM stores");
        res.json(stores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
