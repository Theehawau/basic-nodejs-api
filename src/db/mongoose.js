const mongoose = require('mongoose')

if (process.env.NODE_ENV === 'production') {
    const uri = process.env.MONGO_DB_URI
}else{
    uri = 'mongodb://127.0.0.1:27017/basic-node-js-api'
}
     
mongoose.connect( uri ,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

