const Record = require("../models/Record");
const mongoose = require("mongoose");

// GET SUMMARY
exports.getSummary = async (req, res) => {
    try {
        // 🔥 Convert user id to ObjectId ONCE
        const userId = new mongoose.Types.ObjectId(req.user.id);

        // TOTAL INCOME
        const income = await Record.aggregate([
            { $match: { type: "income", createdBy: userId } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        // TOTAL EXPENSE
        const expense = await Record.aggregate([
            { $match: { type: "expense", createdBy: userId } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        // CATEGORY WISE
        const categoryData = await Record.aggregate([
            { $match: { createdBy: userId } },
            {
                $group: {
                    _id: "$category",
                    total: { $sum: "$amount" }
                }
            }
        ]);

        // RECENT TRANSACTIONS
        const recent = await Record.find({ createdBy: userId })
            .sort({ createdAt: -1 })
            .limit(5);

        res.json({
            success: true,
            data: {
                totalIncome: income[0]?.total || 0,
                totalExpense: expense[0]?.total || 0,
                netBalance:
                    (income[0]?.total || 0) - (expense[0]?.total || 0),
                categoryBreakdown: categoryData,
                recentTransactions: recent
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch summary",
            error: error.message
        });
    }
};