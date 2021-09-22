const router = require('express').Router()
const songController = require('../controllers/songController')


router.post('/events/:id/song', songController.postSong );
router.get('/events/songs', songController.getAllsong );

module.exports = router;