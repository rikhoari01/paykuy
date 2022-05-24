const Transaction = require("../models/Transactions");

let date = new Date();

module.exports = {
    viewTransaction: async (req, res) => {
        try {
            const transaction = await Transaction.findOne({ _id: req.params.id});

            const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September",
                                "Oktober", "November", "Desember"]

            const fullDate = {
                day : transaction.expDate.getDate(),
                month : monthNames[transaction.expDate.getMonth()],
                year : transaction.expDate.getFullYear(),
                hours : transaction.expDate.getHours(),
                minutes : transaction.expDate.getMinutes()
            }

            if(transaction.expDate >= date && transaction.status == false){
                res.render("index", {
                    fullDate, transaction
                });
            }
            else if(transaction.expDate < date && transaction.status == false){
                res.render("expired");
            } else {
                res.render("success");
            }
        } catch (error){
            res.redirect("/error");
        }
    },

    addTransaction: async (req, res) => {
        let newTransaction = new Transaction({
            totalPrice: req.body.totalPrice,
            expDate: date.setDate(date.getDate()+1)
        });

        await newTransaction.save()
        .then((result) => {
            res.json({
                success: true,
                msg: 'Successfully added!',
                result: {
                    _id: result._id,
                    totalPrice: result.totalPrice,
                    expDate: result.expDate,
                    status: result.status
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ success: false, msg: `Something went wrong. ${error}`})
        });
    },

    editTransaction: async (req, res) => {
        Transaction.findOneAndUpdate({_id: req.params.id}, {status: 1})
        .then((oldResult) => {
            Transaction.findOne({ _id: req.params.id})
            .then((newResult) => {
                res.json({
                    success: true,
                    msg: 'Successfully updated!',
                    result: {
                        _id: newResult._id,
                        totalPrice: newResult.totalPrice,
                        expDate: newResult.expDate,
                        status: newResult.status
                    }
                });
            });
        })
        .catch((error) => {
            res.status(500).json({ success: false, msg: `Something went wrong. ${error}`})
        });
    }
}