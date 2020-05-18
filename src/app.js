const express = require('express')
const app = express()
require('./db/mongoose.js')
const User = require('./models/user')

const port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) => res.send('connescted'))
app.get('/api', async (req,res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.status(500).send() 
    }
})
app.get('/api/users', async (req,res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.status(500).send() 
    }
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
app.post('/api/users', async (req,res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send()
    }
})
app.listen(port, ()=>{
    console.log('Server running on port' +port);
})

