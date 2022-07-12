module.exports = {
    MongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    ToObject: function (mongooses) {
        return mongooses ? mongooses.toObject() : mongooses;
    },
};
