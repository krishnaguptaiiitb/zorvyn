const Record = require("../models/Record");

// CREATE (Admin only)
exports.createRecord = async (req, res) => {
    try {
        const record = new Record({
            ...req.body,
            createdBy: req.user.id
        });

        await record.save();
        res.status(201).json(record);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ALL (Analyst + Admin)
exports.getRecords = async (req, res) => {
    try {
        const { type, category, startDate, endDate, page = 1, limit = 5 } = req.query;

        let filter = {
            createdBy: req.user.id
        };

        // type filter
        if (type) filter.type = type;

        // category filter
        if (category) filter.category = category;

        // date filter
        if (startDate && endDate) {
            filter.date = {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            };
        }

        // pagination
        const skip = (page - 1) * limit;

        const records = await Record.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Record.countDocuments(filter);

        res.json({
            success: true,
            data: {
                total,
                page: parseInt(page),
                pages: Math.ceil(total / limit),
                records
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch records",
            error: error.message
        });
    }
};

// UPDATE (Admin only)
exports.updateRecord = async (req, res) => {
    try {
        const updated = await Record.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updated);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE (Admin only)
exports.deleteRecord = async (req, res) => {
    try {
        await Record.findByIdAndDelete(req.params.id);
        res.json({ message: "Record deleted" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};