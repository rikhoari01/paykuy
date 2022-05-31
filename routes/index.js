const express = require("express");
const router = express.Router();

const Transcontroller = require("../controllers/transactionsController");

router.get("/bayar/:id", Transcontroller.viewTransaction);
router.get("/transaction/:id", Transcontroller.getTransaction);
router.post("/transaction/add", Transcontroller.addTransaction);
router.put("/transaction/:id/edit", Transcontroller.editTransaction);
router.put("/transaction/:id/image/edit", Transcontroller.editImage);

module.exports = router;
