class newController{
    //GET news
    index(req,res){
        res.render('news')
    }

    //GEt /news/:slug
    show(req,res){
        res.send('News detail')
    }
}

module.exports = new newController()

//const newController = require('./newcontroller')  