const mongoose = require('mongoose')

mongoose.connect( process.env.MONGO_DB_URI || 'mongodb://127.0.0.1:27017/basic-node-js-api' ,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).catch(
     err => console.log(err.reason)
)

