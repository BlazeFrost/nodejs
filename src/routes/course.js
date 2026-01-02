const express = require('express')
const router = express.Router()

const SiteController = require('../app/controller/sitenewcontroller')
const courseController = require('../app/controller/coursecontroller')

router.get('/search', SiteController.search)
router.get('/create', courseController.create)
router.post('/create', courseController.create)
router.get('/:id/edit', courseController.edit)
router.post('/handle-form-action', courseController.handleFormActions)
router.put('/:id', courseController.update)
router.delete('/:id', courseController.delete)
router.delete('/:id/force', courseController.forcedelete)
router.get('/:slug', courseController.show)
router.get('/', SiteController.index)

module.exports = router