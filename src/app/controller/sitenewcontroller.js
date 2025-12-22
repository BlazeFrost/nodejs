class SiteController{
    //GET news
    index(req,res){
        res.render('home')
    }

    //GEt /news/:slug
    search(req,res){
        res.render('search')    
    }
}

module.exports = new SiteController()

//const newController = require('./newcontroller')