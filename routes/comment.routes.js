const express = require('express');
const { getComments, createComment } = require('../controllers/comment.controller');

const router = express.Router();

router.get('/', getComments);
router.post('/', createComment);

module.exports = router;
