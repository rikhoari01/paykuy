const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads/recipe"));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const Transcontroller = require("../controllers/transactionsController");

router.get("/bayar/:id", Transcontroller.viewTransaction);
router.get("/transaction/:id", Transcontroller.getTransaction);
router.post("/transaction/add", Transcontroller.addTransaction);
router.put("/transaction/:id/payment/edit", Transcontroller.editPayment);
router.put("/transaction/:id/status/edit", Transcontroller.editStatus);
router.put("/transaction/:id/image/edit", multer({ storage: diskStorage }).single("recipe"), Transcontroller.editImage);

module.exports = router;
