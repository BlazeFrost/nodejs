const course = require('../Module/course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class mecontroller {
    storedCourse(req, res, next) {
        let courseQuey = course.find({})

        let query = course.find({})

        if (req.query.hasOwnProperty('_sort')) {
            const isValidtype = ['asc','desc'].includes(req.query.type)
            query = query.sort({
                [req.query.column]: isValidtype ? req.query.type : 'desc',
            })
        }

        //if (req.query.hasOwnProperty('_sort')) {
        //    courseQuery = courseQuery.sort({
        //        [req.query.column]: req.query.type,
        //    })
        //}

        Promise.all([course.find({}).sortable(req), course.countDocumentsDeleted()])
            .then(([course,deletedCount]) => 
                res.render('me/stored-courses', {
                    deletedCount,
                course: multipleMongooseToObject(courses)
            }))
            .catch(next)
    }

    trashCourse(req, res, next) {
        course.findDeleted({ deletedAt: null })
            .then(courses => res.render('me/trash-courses', {
                course: multipleMongooseToObject(courses)
            }))
            .catch(next)
    }
}

module.exports = new mecontroller()