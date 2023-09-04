const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s223576781:258963@cluster0.2ruzime.mongodb.net/?retryWrites=true&w=majority"; 

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  client.connect();

  module.exports = client;