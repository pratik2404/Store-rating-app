const db = require('../config/db');

class User {
    static async createUser(name, email, password, address, role) {
        return db.query("INSERT INTO users (name, email, password, address, role) VALUES (?, ?, ?, ?, ?)", 
        [name, email, password, address, role]);
    }

    static async findUserByEmail(email) {
        const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
        return rows[0];
    }
}

module.exports = User;
