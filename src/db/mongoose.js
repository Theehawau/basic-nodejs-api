const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/basic-node-js-api',{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
