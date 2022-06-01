const Transaction = require("../models/Transactions");

let date = new Date();

module.exports = {
  viewTransaction: async (req, res) => {
    const id = req.params.id;
    try {
      const transaction = await Transaction.findById(id);
      const price = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumSignificantDigits: 6 }).format(transaction.totalPrice)
      const monthNames = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];

      const fullDate = {
        day: transaction.expDate.getDate(),
        month: monthNames[transaction.expDate.getMonth()],
        year: transaction.expDate.getFullYear(),
        hours: transaction.expDate.getHours(),
        minutes: transaction.expDate.getMinutes(),
      };

      if (transaction.expDate >= date && transaction.status == false) {
        res.render("index", {
          fullDate,
          id,
          price,
        });
      } else if (transaction.expDate < date && transaction.status == false) {
        res.render("expired");
      } else {
        res.render("success");
      }
    } catch (error) {
      res.render("error");
      console.log(error);
    }
  },

  getTransaction: async (req, res) => {
    const foreignId = req.params.id;
    await Transaction.find({ foreignId })
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res
          .status(500)
          .json({ success: false, msg: `Something went wrong. ${error}` });
      });
  },

  addTransaction: async (req, res) => {
    let newTransaction = new Transaction({
      totalPrice: req.body.totalPrice,
      expDate: date.setDate(date.getDate() + 1),
      foreignId: req.body.id,
    });

    await newTransaction
      .save()
      .then((result) => {
        res.json({
          success: true,
          msg: "Successfully added!",
          result: {
            _id: result._id,
            totalPrice: result.totalPrice,
            expDate: result.expDate,
            status: result.status,
            paymentMethod: result.paymentMethod,
            receiptUrl: result.receiptUrl,
            foreignId: result.foreignId,
          },
        });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ success: false, msg: `Something went wrong. ${error}` });
      });
  },

  editTransaction: async (req, res) => {
    Transaction.findOneAndUpdate(
      { _id: req.params.id },
      {
        paymentMethod: req.body.paymentMethod,
        status: 1,
        receiptUrl: req.body.receipt,
      }
    )
      .then((oldResult) => {
        Transaction.findOne({ _id: req.params.id }).then((newResult) => {
          res.json({
            success: true,
            msg: "Successfully updated!",
            result: {
              _id: newResult._id,
              totalPrice: newResult.totalPrice,
              expDate: newResult.expDate,
              status: newResult.status,
              paymentMethod: newResult.paymentMethod,
              receiptUrl: newResult.receiptUrl,
              foreignId: newResult.foreignId,
            },
          });
        });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ success: false, msg: `Something went wrong. ${error}` });
      });
  },

  editImage: async (req, res) => {
    Transaction.findOneAndUpdate(
      { _id: req.params.id },
      { receiptUrl: req.body.receipt }
    )
      .then((oldResult) => {
        Transaction.findOne({ _id: req.params.id }).then((newResult) => {
          res.json({
            success: true,
            msg: "Successfully updated!",
            result: {
              _id: newResult._id,
              totalPrice: newResult.totalPrice,
              expDate: newResult.expDate,
              status: newResult.status,
              paymentMethod: result.paymentMethod,
              receiptUrl: result.receiptUrl,
              foreignId: result.foreignId,
            },
          });
        });
        res.redirect("/bayar/" + req.params.id);
      })
      .catch((error) => {
        res
          .status(500)
          .json({ success: false, msg: `Something went wrong. ${error}` });
        res.redirect("/bayar/" + req.params.id);
      });
  },
};
