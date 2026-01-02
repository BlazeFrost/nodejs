const express = require('express')
const router = express.Router()

const newController = require('../app/controller/newcontroller');
const newcontroller = require('../app/controller/newcontroller');

//newCcontroller.index

//router.get('/:slug', newController.show)
router.get('/:slug',newController.show);
router.get('/', newController.index);

module.exports=router