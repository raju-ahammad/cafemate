const router = require('express').Router()


const worksController = require('../controllers/worksController')

router.get('/works', worksController.getWorks);
router.get('/works/:id', worksController.getSigleWorks);
router.delete('/works/delete/:id', worksController.deleteWork);
router.put('/works/edit/:id', worksController.updateWork);
router.post('/work',  worksController.postWorks)

module.exports = router;