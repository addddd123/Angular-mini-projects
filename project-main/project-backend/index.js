const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const res = require('express/lib/response')
app.use(cors())
app.use(express.json())
let userDB = []
app.get('/', (req, res) => {
    res.status(200).send(userDB)
})

app.put('/update-user', (req, res) => {
    registerModel = req.body

    // console.log(re.body.firstName)
    removedIndex = userDB.findIndex((user) =>
        user.email == registerModel.email)
    if (removedIndex != -1) {
        dataDelted = userDB.splice(
            removedIndex, 1, registerModel)
        res.status(200).send(userDB)
    } else {
        res.send('failed to update')
    }

})
app.delete('/delete/:email', (req, res) => {
    email = req.params.email
    console.log('emai is ', email)
    const removedIndex = userDB.findIndex((user) =>
        user.email == email)

    console.log(email, removedIndex, 'email')
    userDB.splice(
        removedIndex, 1
    )
    res.status(200).send(userDB)
})
app.post('/login', (req, res) => {
    console.log('email ', req.body.email, req.body.password)
    loginStatus = userDB.some(obj =>
        req.body.email == obj.email && req.body.password == obj.password
    )
    res.status(200).send({
        "loginStatus": loginStatus,
        "userDB": userDB
    })
})
app.post('/register', (req, res) => {
    registerModel = req.body
        // console.log(req.body.registerModel, 'res-back')
    const emailExists = userDB.some((user) =>
        user.email == registerModel.email)
    if (emailExists) {
        res.status(200).send(false)
    }
    userDB.push(req.body)
    console.log(userDB, 'userdb##')
    res.status(200).send(userDB)
})
app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})