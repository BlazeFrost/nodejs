const mongoose = require ('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://lehongquansg_db_user:hurticane@cluster0.dp8cbrb.mongodb.net/Eo3')
        console.log('connect successfully')
    } catch (error) {
        console.log('connect failed')
        console.error(error)
    }
}

module.exports = {connect}