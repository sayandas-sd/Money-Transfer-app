const express = require("express");


const { default: mongoose } = require("mongoose");
const { Account } = require("../db");
const { authMiddleware } = require("../middleware");

const router = express.Router();

router.get("/balance",  authMiddleware, async (req,res)=>{
    const account = await Account.findOne({
        userId: req.userId
    })
    res.json({
        balance: account.balance
    })
})

router.post("/details", authMiddleware, async (req,res)=>{
    const session = mongoose.startSession();
    session.startTransaction();

    const { amount, to } = req.body;

    const account = await Account.findOne({userId: req.userId}).session(session);

    if(!account || account.balance < amount) {
        await session.abortTransaction();
        res.status(403).json({
            msg: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({userID: to}).session(session);

    if(toAccount) {
        await session.abortTransaction();
        res.status(403).json({
            msg: "Invalid Account"
        })
    }

    await Account.updateOne({userId: req.userId,},
        {
            "$inc": {
                balance: -amount
            }
        }).session(session);

    await Account.updateOne({userId: to},
        {
            "$inc": {
                balance: amount
            }
        }).session(session);

    await session.commitTransaction();
    res.json({
        msg: "Transfer Successfully"
    })
})
module.exports = router;