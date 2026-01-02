const newRouter = require('./news')
const siteRouter = require('./site')
const courseRouter = require('./course')
const meRouter = require('./me')
const SiteController = require('../app/controller/sitenewcontroller')



function routes(app) {
    app.use('/', siteRouter)

    app.use('/news', newRouter)
    app.use('/me', meRouter)
    app.use('/mangas', courseRouter)
    app.get('/search', SiteController.search)
    app.get('/', SiteController.index)
}



module.exports = routes;