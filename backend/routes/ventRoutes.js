const express = require('express');
const { PostVent, ReadVent } = require('../controllers/ventController');
const { protect } = require('../middlewares/authMiddleware');
const { createComment } = require('../controllers/CommentController');
const router = express.Router();
router.route('/post').post(PostVent)
router.route('/read').get(ReadVent)
router.route('/comment').post(createComment)
module.exports = router