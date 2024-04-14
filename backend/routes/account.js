// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    try {
        const account = await Account.findOne({ userId: req.userId });
        if (!account) {
            return res.status(404).json({ 
                message: "Account not found" 
            });
        }
        res.json({ 
            balance: account.balance 
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Internal server error" 
        });
    }
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
try{
    const { amount, to } = req.body;

    if (!amount || !to) {
        await session.abortTransaction();
        return res.status(400).json({ 
            message: "Invalid request body" 
        });
    }

    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
} catch (error) {
    await session.abortTransaction();
    res.status(400).json({ message: error.message });
} finally {
    session.endSession();
}
});

module.exports = router;