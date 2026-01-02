module.exports = {
    multipleMongooseToObject: function(mongooseArrays){
        return mongooseArrays.map(mongoose => mongoose.toObject())
    },
    mongooseToObject: function(mongoose){
        return mongooset ? mongoose.toObject() : mongoose
    }
};