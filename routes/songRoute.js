const router = require('express').Router()


const eventController = require('../controllers/eventController')

router.post('/event', eventController.postEvent)
router.get("/events", eventController.getAllEvent)
router.get("/allevents", eventController.getAllEvents)



module.exports = router;
