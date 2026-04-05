const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// ONLY ADMIN CAN ACCESS
router.get("/admin", authMiddleware, roleMiddleware("admin"), (req, res) => {
    res.json({ message: "Welcome Admin ✅" });
});

// ADMIN + ANALYST
router.get("/analyst", authMiddleware, roleMiddleware("admin", "analyst"), (req, res) => {
    res.json({ message: "Welcome Analyst/Admin ✅" });
});

// ALL LOGGED USERS
router.get("/user", authMiddleware, (req, res) => {
    res.json({ message: "Welcome User ✅" });
});

module.exports = router;