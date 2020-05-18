const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./db/mongoose.js')
const User = require('./models/user')
app.use(express.json(type = 'application/json'))
app.use(express.urlencoded({ extended: true }))

app.post('/api/users', (req,res) =>{
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch(
            err => console.log(err)
        )
})
app.get('/', (req,res) => {
    res.send('connected')
})
app.get('/api/users', (req,res) =>{
    User.find({}).then((users) => {
        res.send(users)
    }).catch(
            err => console.log(err)
        )
})
app.listen(port, ()=>{
    console.log('Server running on port' +port);
})