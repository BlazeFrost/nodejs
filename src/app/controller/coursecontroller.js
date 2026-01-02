const course = require('../Module/course')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
const { request } = require('express')

class CourseController {
    //GET news
    show(req, res, next) {
        //can use body,params.slug,request.query.name

        res.send('course detail - ')
        course.findOne({ slug: request.params.slug })
            .then(course => {
                res.render('course/show', { course: mongooseToObject(course) })
            })
            .catch(next)
    }

    create(req, res, next) {
        res.send('COURSE CREATE')
    }

    store(req, res, next) {
        const formData = req.body
        req.body.image = ``
        course.findOne({})
            .sort({ _id: 'desc' })
            .then(latestCourse => {
                req.body._id = latestCourse._id + 1
                const course = new Course(formData)
                    .save()
                    .then(() => res.redirect('/me/stored/courses'))
                    .catch(next)
            })
        /*.then(course => {
            res.redirect('/', { course: mongooseToObject(course) })
        })
        .catch(next)*/
        //res.send('COURSE SAVED')
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('course/edit'))
            .catch(next)
    }

    //[PUT]
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.render('me/stored/courses'))
            .catch(next)
    }

    forcedelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    delete(req, res, next) {
        Course.delete({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    restore(req, res, next) {
        Course.restore({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break
            default:
                res.json({ message: 'action invalid' })
        }
    }
}

module.exports = new CourseController()

//const newController = require('./newcontroller')