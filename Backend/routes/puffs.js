const express = require('express');
const { getPuffs, createPuff, updatePuff, deletePuff } = require('../controllers/puffs');

const router = express.Router();

router.route('/').get(getPuffs).post(createPuff);

router.route('/:id').put(updatePuff).delete(deletePuff)

module.exports = router;