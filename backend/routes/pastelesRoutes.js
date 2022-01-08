const express = require('express');
const router = express.Router();

const { getPasteles, getPastel } = require('../controllers/pastelesController');

router.get('/', getPasteles);

router.get('/:id', getPastel);

module.exports = router;
