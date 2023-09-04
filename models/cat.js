let client = require('../dbconnection');

let collection = client.db().collection('Cats');

function postCat(cat, callback) {
    collection.insertOne(cat,callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

function removeCat(cat, callback) {
    collection.deleteOne(cat, callback)
}

module.exports = { postCat, getAllCats, removeCat }