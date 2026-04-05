const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
    createRecord,
    getRecords,
    updateRecord,
    deleteRecord
} = require("../controllers/recordController");

// ADMIN
router.post("/", auth, role("admin"), createRecord);
router.put("/:id", auth, role("admin"), updateRecord);
router.delete("/:id", auth, role("admin"), deleteRecord);

// ANALYST + ADMIN
router.get("/", auth, role("admin", "analyst"), getRecords);

module.exports = router;