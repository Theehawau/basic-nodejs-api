const mongoose = require('mongoose')
const uri = "mongodb+srv://Theehawau:basicnodeapp@cluster0-grbed.mongodb.net/test?retryWrites=true&w=majority" 
mongoose.connect(uri,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

// mongodb://127.0.0.1:27017/basic-node-js-api
