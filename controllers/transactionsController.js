const Transaction = require('../models/Transaction');

// @desc Get all transactions
// @route GET /api/v1/transactions
// @access public
exports.getTransactions = async (req,res,next) => {
    
    try {
        const transactions = await Transaction.find();    
        res.send({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch(err) {
        res.send({
            success: false,
            error: 'Server Error'
        })
    }
    next();
} 

// @desc Add transaction
// @route POST /api/v1/transactions
// @access public
exports.addTransactions = async (req,res,next) => {
    try {
        const { text, amount } = req.body;
        const transaction = await Transaction.create(req.body);
        res.send({
            success: true,
            data: transaction
        })
    } catch(err) {
        console.log(err.name);
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            res.send({
                success: false,
                error: messages
            })
        } else {
            res.send({
                success: false,
                error: 'Server Error'
            })
        }
    }
    next();
} 

// @desc Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access public
exports.deleteTransactions = async (req,res,next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) {
            res.send({
                success: false,
                error: 'No transaction found'
            })
        } else {
            await transaction.remove();
            res.send({
                success: true,
                data: {}
            })
        }
    } catch(err) {
        res.send({
            success: false,
            error: 'Server Error'
        })
    }
    next();
} 












