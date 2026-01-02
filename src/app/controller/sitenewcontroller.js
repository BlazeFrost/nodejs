const course = require('../Module/course')
const {multipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
    //GET news
    search(req, res, next) {
        const q = req.query.q?.trim() || ''
        if(!q){
            return res.render('search',{course: [], q})
        }

        course.find({ title: { $regex: q, $options: 'i' } })
        .limit(20)
        .then(course => {
            res.render('search',{ course: multipleMongooseToObject(course), q })
        })
        .catch(next)
    }

    //GEt /news/:slug
    index(req, res, next) {
        course.find({})
            .then(course => {
                console.log('courses from DB: ',course)
                //course = course.map(course => course.toObject())
                res.render('home',{ course: multipleMongooseToObject(course) })})
            .catch(error => next(error)) //.catch(next)
    }   
}

module.exports = new SiteController()

//const newController = require('./newcontroller')