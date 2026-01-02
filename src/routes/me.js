const express = require('express')
const router = express.Router()

const mecontroller = require ('../app/controller/mecontroller')

router.get('/stored/course',mecontroller.storedCourse)
router.get('/trash/course',mecontroller.trashCourse)

module.exports=router