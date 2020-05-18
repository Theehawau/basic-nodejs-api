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
app.get('/api/users/:id', async (req,res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(500).send()
    }
})
app.put('/api/users/:id', async (req, res) => {   
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true, useFindAndModify:false})
        if( !user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(500).send()
    }
})
app.delete('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id, { useFindAndModify:false})
        if( !user) {
            return res.status(404).send()
         }
         res.send(user)
    } catch (error) {
        res.status(500).send()
    }
})
app.listen(port, ()=>{
    console.log('Server running on port' +port);
})