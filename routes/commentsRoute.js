const router = require('express').Router()
const songController = require('../controllers/songController');
const auth = require('../middleware/auth');


router.post('/events/:id/song', songController.postSong );
router.put('/event/:eventid/song/:id', songController.updateSong );
router.get('/events/songs', songController.getAllsong );

module.exports = router;