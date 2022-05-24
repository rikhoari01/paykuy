var express = require('express');
var router = express.Router();

const Transcontroller = require('../controllers/transactionsController'); 

/* GET home page. */
router.get('/bayar/:id', Transcontroller.viewTransaction);
router.post('/transaction/add', Transcontroller.addTransaction);
router.put('/transaction/:id/edit/', Transcontroller.editTransaction);

module.exports = router;
