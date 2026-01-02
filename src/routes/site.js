const express = require('express')
const router = express.Router()

const siteController = require('../app/controller/sitenewcontroller')

//newCcontroller.index

router.get('/search', siteController.search)
router.get('/', siteController.index);
router.get('/home', siteController.index)

module.exports = router       