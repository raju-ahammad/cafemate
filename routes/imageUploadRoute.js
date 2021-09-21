const router = require('express').Router()

const imageUpload = require('../middleware/imageUpload')

const imageUploadController = require('../controllers/imageUploadController')

router.post('/image', imageUpload.single("picture") , imageUploadController.postImage)

module.exports = router;