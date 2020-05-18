const mongoose = require('mongoose')
const uri = "mongodb+srv://Theehawau:basicnodeapp@cluster0-grbed.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect('uri',{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Theehawau:<password>@cluster0-grbed.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// mongodb://127.0.0.1:27017/basic-node-js-api
